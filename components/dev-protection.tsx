"use client"

import { useEffect, useRef, useState, useCallback } from "react"

export const PROTECTION = {
  blockRightClick:  true,
  blockDevTools:    true,
  showWarningModal: true,
} as const

// ── Mobile / tablet guard ──────────────────────────────────────────────────────
// (hover: none) + (pointer: coarse) = touch-only device (phone / tablet / TV).
// These devices cannot open DevTools — skip all detection to prevent false positives.
function isTouchOnlyDevice(): boolean {
  if (typeof window === "undefined") return false
  return window.matchMedia("(hover: none) and (pointer: coarse)").matches
}

// ── Detection Method 1: Window size gap ────────────────────────────────────────
// outerWidth/Height = full browser window
// innerWidth/Height = viewport (shrinks when DevTools docks)
//
// Width gap > 80px  → DevTools panel docked on left or right side
// Height gap > 160px → DevTools panel docked at bottom
//   (desktop browser chrome alone is ~75–95px, so 160px leaves a safe buffer;
//    mobile browser chrome is 150–250px which is WHY we bail out above for touch devices)
function sizeGap(): boolean {
  return (
    window.outerWidth  - window.innerWidth  > 80  ||
    window.outerHeight - window.innerHeight > 160
  )
}

// ── Detection Method 2: Console object getter trap ─────────────────────────────
// Chrome / Brave eagerly evaluates properties of objects printed to the console
// ONLY when the console panel is actively open. The getter fires = DevTools is open.
let _trapped = false
function armTrap() {
  _trapped = false
  try {
    const img = new Image()
    Object.defineProperty(img, "id", {
      get() { _trapped = true },
      configurable: true,
    })
    // Zero-size log so nothing visible appears in the console
    console.log("%c ", "font-size:0;line-height:0;color:transparent", img)
  } catch { /* ignore in sandboxed envs */ }
}
function trapFired(): boolean {
  const v = _trapped; _trapped = false; return v
}

// ── Component ──────────────────────────────────────────────────────────────────
export default function DevProtection() {
  const [locked, setLocked]   = useState(false)
  const lockedRef              = useRef(false)

  const lock = useCallback(() => {
    if (lockedRef.current) return
    lockedRef.current = true
    setLocked(true)
    document.documentElement.style.overflow = "hidden"
    document.body.style.overflow            = "hidden"
  }, [])

  useEffect(() => {
    // ── Right-click block ──────────────────────────────────────────────────
    const onContextMenu = (e: MouseEvent) => {
      if (PROTECTION.blockRightClick) e.preventDefault()
    }

    // ── Keyboard shortcut block ────────────────────────────────────────────
    const onKeyDown = (e: KeyboardEvent) => {
      if (!PROTECTION.blockDevTools) return
      const k = e.key.toUpperCase()
      const blocked =
        e.key === "F12"                                          ||
        (e.ctrlKey && e.shiftKey  && /^[IJCKE]$/.test(k))      ||
        (e.ctrlKey && !e.shiftKey && k === "U")                 ||
        (e.metaKey && e.altKey    && /^[IJCE]$/.test(k))
      if (blocked) {
        e.preventDefault()
        e.stopPropagation()
        // Only trigger warning on non-touch devices
        if (PROTECTION.showWarningModal && !isTouchOnlyDevice()) lock()
      }
    }

    document.addEventListener("contextmenu", onContextMenu)
    document.addEventListener("keydown",      onKeyDown, true)

    // ── Skip all size/console detection on phones, tablets, TVs ───────────
    if (!PROTECTION.showWarningModal || isTouchOnlyDevice()) {
      return () => {
        document.removeEventListener("contextmenu", onContextMenu)
        document.removeEventListener("keydown",      onKeyDown, true)
      }
    }

    // ── Initial check (catches DevTools already open on page load) ─────────
    armTrap()
    if (sizeGap()) { lock(); return }

    // ── Polling every 200ms ────────────────────────────────────────────────
    // armTrap() re-arms the getter; setTimeout(60ms) gives Chrome one tick
    // to evaluate the console object before we read _trapped.
    const interval = setInterval(() => {
      if (lockedRef.current) return
      armTrap()
      setTimeout(() => {
        if (!lockedRef.current && (sizeGap() || trapFired())) lock()
      }, 60)
    }, 200)

    // ── Resize — fires the instant a dock panel appears or changes size ────
    const onResize = () => {
      if (!lockedRef.current && sizeGap()) lock()
    }
    window.addEventListener("resize", onResize)

    // ── Visibility change — user switches tab back, re-check ───────────────
    const onVisible = () => {
      if (!lockedRef.current && document.visibilityState === "visible") {
        armTrap()
        setTimeout(() => {
          if (!lockedRef.current && (sizeGap() || trapFired())) lock()
        }, 60)
      }
    }
    document.addEventListener("visibilitychange", onVisible)

    return () => {
      document.removeEventListener("contextmenu",      onContextMenu)
      document.removeEventListener("keydown",           onKeyDown,  true)
      document.removeEventListener("visibilitychange",  onVisible)
      window.removeEventListener("resize",              onResize)
      clearInterval(interval)
    }
  }, [lock])

  if (!locked) return null

  return (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.98)", backdropFilter: "blur(16px)" }}
      onContextMenu={(e) => e.preventDefault()}
    >
      {/* Full click-blocker so nothing underneath is reachable */}
      <div className="absolute inset-0" onClick={(e) => e.stopPropagation()} />

      <div className="relative w-full max-w-md bg-[#0a0a0b] border border-red-600/60 shadow-[0_0_120px_rgba(220,38,38,0.15)] select-none">

        {/* Top bar */}
        <div className="bg-red-500/10 border-b border-red-600/30 px-6 py-4 flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500 animate-pulse" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-500 animate-pulse [animation-delay:0.2s]" />
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
          </div>
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-red-400 ml-1">
            Security Alert
          </p>
        </div>

        {/* Body */}
        <div className="px-6 sm:px-8 py-8 flex flex-col items-center text-center gap-6">

          <div className="relative">
            <div className="h-16 w-16 rounded-full bg-red-500/10 border border-red-500/40 flex items-center justify-center">
              <svg className="h-8 w-8 text-red-400" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <line x1="12" y1="8" x2="12" y2="12"/>
                <line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
            </div>
            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 border-2 border-[#0a0a0b] animate-ping" />
          </div>

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

          <button
            onClick={() => window.location.reload()}
            className="w-full bg-[#a3c59a] text-black font-black uppercase tracking-[0.18em] text-xs py-3.5 px-6 hover:bg-white transition-colors duration-150"
          >
            Close DevTools &amp; Refresh →
          </button>
        </div>

        {/* Footer */}
        <div className="border-t border-zinc-800/60 px-6 py-3 flex items-center justify-between">
          <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-zinc-600">
            LUKK Automations
          </p>
          <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-zinc-600">
            Protected — Do Not Inspect
          </p>
        </div>

      </div>
    </div>
  )
}
