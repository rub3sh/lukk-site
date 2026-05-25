"use client"

import { useEffect, useState, useCallback } from "react"

export const PROTECTION = {
  blockRightClick:  true,
  blockDevTools:    true,
  showWarningModal: true,
} as const

// Detects docked DevTools by measuring the gap between outer and inner window dimensions.
// Works across Chrome, Edge, Firefox, and Safari for all dock positions.
function devToolsOpen(): boolean {
  const threshold = 100
  return (
    window.outerWidth  - window.innerWidth  > threshold ||
    window.outerHeight - window.innerHeight > threshold
  )
}

export default function DevProtection() {
  const [showModal, setShowModal] = useState(false)

  const triggerModal = useCallback(() => {
    setShowModal(true)
    document.body.style.overflow = "hidden"
  }, [])

  useEffect(() => {
    // ── Right-click block ──────────────────────────────────
    const onContextMenu = (e: MouseEvent) => {
      if (PROTECTION.blockRightClick) e.preventDefault()
    }

    // ── Keyboard shortcut block ────────────────────────────
    const onKeyDown = (e: KeyboardEvent) => {
      if (!PROTECTION.blockDevTools) return
      const key = e.key.toUpperCase()
      const isBlocked =
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey  && /^[IJCK]$/.test(key)) ||
        (e.ctrlKey && !e.shiftKey && key === "U")           ||
        (e.metaKey && e.altKey    && /^[IJC]$/.test(key))
      if (isBlocked) {
        e.preventDefault()
        e.stopPropagation()
        if (PROTECTION.showWarningModal) triggerModal()
      }
    }

    document.addEventListener("contextmenu", onContextMenu)
    document.addEventListener("keydown", onKeyDown, true)

    if (!PROTECTION.showWarningModal) {
      return () => {
        document.removeEventListener("contextmenu", onContextMenu)
        document.removeEventListener("keydown", onKeyDown, true)
      }
    }

    // ── DevTools detection ─────────────────────────────────
    // Check immediately (catches DevTools open before page load)
    if (devToolsOpen()) triggerModal()

    // Poll every 600ms to catch mid-session opens via browser menu
    const interval = setInterval(() => {
      if (devToolsOpen()) triggerModal()
    }, 600)

    // Also fire on resize — docking/undocking changes outer dimensions
    const onResize = () => { if (devToolsOpen()) triggerModal() }
    window.addEventListener("resize", onResize)

    return () => {
      document.removeEventListener("contextmenu", onContextMenu)
      document.removeEventListener("keydown", onKeyDown, true)
      window.removeEventListener("resize", onResize)
      clearInterval(interval)
    }
  }, [triggerModal])

  if (!showModal) return null

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-8"
      onContextMenu={(e) => e.preventDefault()}
    >
      <div className="w-full max-w-lg bg-[#0a0a0b] border border-red-600/50 shadow-[0_0_100px_rgba(0,0,0,0.95)] select-none">

        {/* Header */}
        <div className="border-b border-red-600/30 bg-red-500/8 px-6 sm:px-8 py-4 sm:py-5 flex items-center gap-3 sm:gap-4">
          <svg
            className="h-6 w-6 shrink-0 text-red-400"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
            <line x1="12" y1="9" x2="12" y2="13" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
          <div>
            <p className="text-[9px] font-black uppercase tracking-[0.35em] text-red-500/70 mb-0.5">
              Access Restricted
            </p>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-red-300">
              Developer Tools Detected
            </p>
          </div>
        </div>

        {/* Body */}
        <div className="px-6 sm:px-8 py-7 sm:py-9 flex flex-col items-center text-center gap-5">
          <div className="h-14 w-14 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center">
            <svg
              className="h-7 w-7 text-red-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="3" width="20" height="14" rx="2" />
              <path d="M8 21h8M12 17v4" />
              <path d="M9 9l2 2-2 2M13 13h2" />
            </svg>
          </div>

          <div className="space-y-3">
            <p className="text-base sm:text-lg font-black uppercase tracking-wider text-white leading-snug">
              You&apos;re trying to access<br />Developer Tools
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-zinc-400 max-w-sm mx-auto">
              Developer Tools access is not permitted on this site.
              Please <span className="text-white font-semibold">close DevTools</span> and{" "}
              <span className="text-white font-semibold">refresh the page</span> to continue.
            </p>
          </div>

          <button
            onClick={() => window.location.reload()}
            className="mt-2 w-full bg-[#a3c59a] text-black font-black uppercase tracking-[0.2em] text-xs sm:text-sm py-3 px-6 hover:bg-white transition-colors"
          >
            Close DevTools &amp; Refresh
          </button>
        </div>

        {/* Footer */}
        <div className="border-t border-zinc-800 px-6 sm:px-8 py-3 flex items-center justify-between">
          <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-zinc-600">
            LUKK Automations
          </p>
          <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-zinc-600">
            Protected Site
          </p>
        </div>

      </div>
    </div>
  )
}
