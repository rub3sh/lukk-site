"use client"

import { useEffect, useState } from "react"

// ══════════════════════════════════════════════════════════
//  KILL SWITCHES — flip individual flags to false to disable
// ══════════════════════════════════════════════════════════
export const PROTECTION = {
  blockRightClick:  true,   // blocks browser context menu on right-click
  blockDevTools:    true,   // blocks F12 / Ctrl+Shift+I/J/C/K / Ctrl+U shortcuts
  showWarningModal: false,   // shows the warning notice
  modalDelaySeconds: 30,    // ← seconds before the warning modal appears
} as const
// ══════════════════════════════════════════════════════════

export default function DevProtection() {
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    // ── Right-click block ──────────────────────────────────
    const onContextMenu = (e: MouseEvent) => {
      if (PROTECTION.blockRightClick) e.preventDefault()
    }

    // ── DevTools keyboard-shortcut block ───────────────────
    const onKeyDown = (e: KeyboardEvent) => {
      if (!PROTECTION.blockDevTools) return

      const key = e.key.toUpperCase()
      const isBlocked =
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey  && /^[IJCK]$/.test(key)) ||   // Win/Linux
        (e.ctrlKey && !e.shiftKey && key === "U")            ||  // view-source
        (e.metaKey && e.altKey    && /^[IJC]$/.test(key))        // macOS

      if (isBlocked) {
        e.preventDefault()
        e.stopPropagation()
      }
    }

    document.addEventListener("contextmenu", onContextMenu)
    document.addEventListener("keydown", onKeyDown, true)

    // ── Warning modal timer ────────────────────────────────
    let timer: ReturnType<typeof setTimeout>
    if (PROTECTION.showWarningModal) {
      timer = setTimeout(() => {
        setShowModal(true)
        document.body.style.overflow = "hidden"
      }, PROTECTION.modalDelaySeconds * 1000)
    }

    return () => {
      document.removeEventListener("contextmenu", onContextMenu)
      document.removeEventListener("keydown", onKeyDown, true)
      clearTimeout(timer)
    }
  }, [])

  if (!showModal) return null

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/92 backdrop-blur-md p-4 sm:p-8"
      onContextMenu={(e) => e.preventDefault()}
    >
      <div className="w-full max-w-2xl bg-[#0a0a0b] border border-amber-600/50 shadow-[0_0_80px_rgba(0,0,0,0.9)] select-none">

        {/* ── Header ─────────────────────────────────────── */}
        <div className="border-b border-amber-600/30 bg-amber-500/8 px-4 sm:px-8 py-4 sm:py-5 flex items-center gap-3 sm:gap-4">
          {/* Warning triangle */}
          <svg
            className="h-6 w-6 shrink-0 text-amber-400"
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
            <p className="text-[9px] font-black uppercase tracking-[0.35em] text-amber-500/70 mb-0.5">
              Notice
            </p>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-amber-300">
              Warning — Development Environment
            </p>
          </div>
        </div>

        {/* ── Message body ───────────────────────────────── */}
        <div className="px-4 sm:px-8 py-5 sm:py-8">
          <div className="space-y-4 sm:space-y-5 text-[13px] sm:text-[15px] leading-[1.75] sm:leading-[1.85] text-zinc-300">
            <p>
              This website is a temporary development environment deployed by{" "}
              <strong className="text-white">ARQX Systems</strong> for testing,
              review, and internal client demonstration purposes only.
            </p>
            <p>
              The version you are currently viewing is not the final production
              website, but a controlled preview instance used during the
              development phase.
            </p>
            <p>
              Any access to system files, design modifications, or functional
              changes is restricted and managed exclusively through{" "}
              <strong className="text-white">Nexen Media</strong>.
            </p>
            <p>
              If you wish to request access, implement changes, or avail
              additional services, you must contact{" "}
              <strong className="text-white">Nexen Media</strong> directly.
              Unauthorized usage or modifications are not permitted.
            </p>
          </div>
        </div>

        {/* ── Footer ─────────────────────────────────────── */}
        <div className="border-t border-zinc-800 px-4 sm:px-8 py-3 sm:py-4 flex items-center justify-between gap-3 sm:gap-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-500">
            Powered by ARQX&#8209;Atlas Systems
          </p>
          <div className="flex items-center gap-1.5 shrink-0">
            <svg
              className="h-3 w-3 text-amber-500/60"
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
            <p className="text-[10px] text-zinc-600 uppercase tracking-widest">
              Internal Preview Only
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}
