"use client"

import { useEffect, useRef, useState, useCallback } from "react"

export const PROTECTION = {
  blockRightClick:   true,
  blockDevTools:     true,
  showWarningModal:  true,
  modalDelaySeconds: 30,   // timed notice fires after this many seconds regardless of DevTools
} as const

// ── Mobile / tablet guard ──────────────────────────────────────────────────────
// (hover: none) + (pointer: coarse) = touch-only device (phone / tablet / TV).
// These devices cannot open DevTools — skip all detection to prevent false positives.
function isTouchOnlyDevice(): boolean {
  if (typeof window === "undefined") return false
  return window.matchMedia("(hover: none) and (pointer: coarse)").matches
}

// ── Detection Method 1: Window size gap ───────────────────────────────────────
// Width gap > 80px  → DevTools docked on left or right
// Height gap > 160px → DevTools docked at bottom
// (desktop browser chrome alone is ~75–95px, so 160px leaves a safe buffer)
function sizeGap(): boolean {
  return (
    window.outerWidth  - window.innerWidth  > 80  ||
    window.outerHeight - window.innerHeight > 160
  )
}

// ── Detection Method 2: Console object getter trap ────────────────────────────
// Chrome/Brave eagerly evaluates object properties when the console panel is open.
let _trapped = false
function armTrap() {
  _trapped = false
  try {
    const img = new Image()
    Object.defineProperty(img, "id", {
      get() { _trapped = true },
      configurable: true,
    })
    console.log("%c ", "font-size:0;line-height:0;color:transparent", img)
  } catch { /* ignore */ }
}
function trapFired(): boolean {
  const v = _trapped; _trapped = false; return v
}

// ── Component ──────────────────────────────────────────────────────────────────
export default function DevProtection() {
  // "devtools" = DevTools detected, "timer" = 30s timed notice, null = hidden
  const [trigger, setTrigger] = useState<"devtools" | "timer" | null>(null)
  const lockedRef = useRef(false)

  const lock = useCallback((reason: "devtools" | "timer") => {
    if (lockedRef.current) return
    lockedRef.current = true
    setTrigger(reason)
    document.documentElement.style.overflow = "hidden"
    document.body.style.overflow = "hidden"
  }, [])

  useEffect(() => {
    const touch = isTouchOnlyDevice()

    // ── Right-click block (desktop only) ──────────────────────────────────
    const onContextMenu = (e: MouseEvent) => {
      if (PROTECTION.blockRightClick) e.preventDefault()
    }

    // ── Keyboard shortcut block (desktop only) ────────────────────────────
    const onKeyDown = (e: KeyboardEvent) => {
      if (!PROTECTION.blockDevTools) return
      const k = e.key.toUpperCase()
      const blocked =
        e.key === "F12"                                         ||
        (e.ctrlKey && e.shiftKey  && /^[IJCKE]$/.test(k))     ||
        (e.ctrlKey && !e.shiftKey && k === "U")                ||
        (e.metaKey && e.altKey    && /^[IJCE]$/.test(k))
      if (blocked) {
        e.preventDefault()
        e.stopPropagation()
        if (PROTECTION.showWarningModal) lock("devtools")
      }
    }

    if (!touch) {
      document.addEventListener("contextmenu", onContextMenu)
      document.addEventListener("keydown",      onKeyDown, true)
    }

    // ── Timed notice — fires on ALL devices after modalDelaySeconds ──────
    let timer: ReturnType<typeof setTimeout> | undefined
    if (PROTECTION.showWarningModal) {
      timer = setTimeout(() => lock("timer"), PROTECTION.modalDelaySeconds * 1000)
    }

    // ── Skip DevTools polling on touch devices (keep timer above) ─────────
    if (!PROTECTION.showWarningModal || touch) {
      return () => {
        if (!touch) {
          document.removeEventListener("contextmenu", onContextMenu)
          document.removeEventListener("keydown",      onKeyDown, true)
        }
        clearTimeout(timer)
      }
    }

    // ── Initial check (catches DevTools open before page load) ────────────
    armTrap()
    if (sizeGap()) { lock("devtools"); return }

    // ── Poll every 200ms — re-arm console trap each cycle ─────────────────
    const interval = setInterval(() => {
      if (lockedRef.current) return
      armTrap()
      setTimeout(() => {
        if (!lockedRef.current && (sizeGap() || trapFired())) lock("devtools")
      }, 60)
    }, 200)

    // ── Resize — instant detection when dock panel opens ──────────────────
    const onResize = () => {
      if (!lockedRef.current && sizeGap()) lock("devtools")
    }
    window.addEventListener("resize", onResize)

    // ── Visibility change — re-check when tab regains focus ───────────────
    const onVisible = () => {
      if (!lockedRef.current && document.visibilityState === "visible") {
        armTrap()
        setTimeout(() => {
          if (!lockedRef.current && (sizeGap() || trapFired())) lock("devtools")
        }, 60)
      }
    }
    document.addEventListener("visibilitychange", onVisible)

    return () => {
      document.removeEventListener("contextmenu",     onContextMenu)
      document.removeEventListener("keydown",          onKeyDown,  true)
      document.removeEventListener("visibilitychange", onVisible)
      window.removeEventListener("resize",             onResize)
      clearInterval(interval)
      clearTimeout(timer)
    }
  }, [lock])

  if (!trigger) return null

  // ── Two different modal messages based on what triggered it ───────────────
  const isDevTools = trigger === "devtools"

  return (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.98)", backdropFilter: "blur(16px)" }}
      onContextMenu={(e) => e.preventDefault()}
    >
      <div className="absolute inset-0" onClick={(e) => e.stopPropagation()} />

      <div className={`relative w-full max-w-md bg-[#0a0a0b] border shadow-2xl select-none ${
        isDevTools ? "border-red-600/60 shadow-red-950/40" : "border-amber-600/50 shadow-amber-950/30"
      }`}>

        {/* Top bar */}
        <div className={`border-b px-6 py-4 flex items-center gap-3 ${
          isDevTools ? "bg-red-500/10 border-red-600/30" : "bg-amber-500/8 border-amber-600/30"
        }`}>
          <div className="flex gap-1.5">
            <span className={`h-2.5 w-2.5 rounded-full animate-pulse ${isDevTools ? "bg-red-500" : "bg-amber-500"}`} />
            <span className={`h-2.5 w-2.5 rounded-full animate-pulse [animation-delay:0.2s] ${isDevTools ? "bg-amber-500" : "bg-amber-400"}`} />
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
          </div>
          <p className={`text-[10px] font-black uppercase tracking-[0.3em] ml-1 ${isDevTools ? "text-red-400" : "text-amber-400"}`}>
            {isDevTools ? "Security Alert" : "Notice"}
          </p>
        </div>

        {/* Body */}
        <div className="px-6 sm:px-8 py-8 flex flex-col items-center text-center gap-5">

          {/* Icon */}
          <div className="relative">
            <div className={`h-16 w-16 rounded-full flex items-center justify-center border ${
              isDevTools ? "bg-red-500/10 border-red-500/40" : "bg-amber-500/10 border-amber-500/40"
            }`}>
              {isDevTools ? (
                <svg className="h-8 w-8 text-red-400" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  <line x1="12" y1="8" x2="12" y2="12"/>
                  <line x1="12" y1="16" x2="12.01" y2="16"/>
                </svg>
              ) : (
                <svg className="h-8 w-8 text-amber-400" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
                  <line x1="12" y1="9" x2="12" y2="13"/>
                  <line x1="12" y1="17" x2="12.01" y2="17"/>
                </svg>
              )}
            </div>
            <span className={`absolute -top-1 -right-1 h-4 w-4 rounded-full border-2 border-[#0a0a0b] animate-ping ${
              isDevTools ? "bg-red-500" : "bg-amber-500"
            }`} />
          </div>

          {/* Message */}
          {isDevTools ? (
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-black uppercase tracking-wider text-white leading-snug">
                Developer Tools<br />Detected
              </h2>
              <p className="text-sm leading-relaxed text-zinc-400 max-w-xs mx-auto">
                You&apos;re trying to access Developer Tools, which is{" "}
                <span className="text-red-400 font-semibold">not allowed</span> on this site.
              </p>
              <p className="text-sm leading-relaxed text-zinc-300 font-medium">
                Close DevTools and refresh the page to load the site.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-black uppercase tracking-wider text-white leading-snug">
                Development<br />Environment
              </h2>
              <div className="space-y-4 text-sm leading-relaxed text-zinc-400 max-w-sm mx-auto text-left">
                <p>
                  This website is a temporary development environment deployed by{" "}
                  <strong className="text-white">ARQX Systems</strong> for testing,
                  review, and internal client demonstration purposes only.
                </p>
                <p>
                  Any access to system files, design modifications, or functional changes
                  is restricted and managed exclusively through{" "}
                  <strong className="text-white">Nexen Media</strong>.
                </p>
                <p>
                  If you wish to request access or implement changes, contact{" "}
                  <strong className="text-white">Nexen Media</strong> directly.
                  Unauthorized usage or modifications are not permitted.
                </p>
              </div>
            </div>
          )}

          {/* Steps (DevTools only) */}
          {isDevTools && (
            <div className="w-full bg-zinc-900/60 border border-zinc-800 px-5 py-4 text-left space-y-2.5">
              {[
                ["1", "Close the DevTools panel completely"],
                ["2", "Click the button below to reload"],
              ].map(([num, text]) => (
                <div key={num} className="flex items-center gap-3">
                  <span className="h-5 w-5 rounded-full bg-[#a3c59a]/20 border border-[#a3c59a]/40 flex items-center justify-center text-[10px] font-black text-[#a3c59a] shrink-0">
                    {num}
                  </span>
                  <span className="text-xs text-zinc-400">{text}</span>
                </div>
              ))}
            </div>
          )}

          <button
            onClick={() => window.location.reload()}
            className="w-full bg-[#a3c59a] text-black font-black uppercase tracking-[0.18em] text-xs py-3.5 px-6 hover:bg-white transition-colors duration-150"
          >
            {isDevTools ? "Close DevTools & Refresh →" : "Reload Page →"}
          </button>
        </div>

        {/* Footer */}
        <div className="border-t border-zinc-800/60 px-6 py-3 flex items-center justify-between">
          <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-zinc-600">
            Powered by ARQX&#8209;Atlas Systems
          </p>
          <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-zinc-600">
            {isDevTools ? "Protected — Do Not Inspect" : "Internal Preview Only"}
          </p>
        </div>

      </div>
    </div>
  )
}
