"use client"

import { useEffect, useRef } from "react"
import createGlobe, { type COBEOptions } from "cobe"

// LUKK presence markers (SG HQ + MY, IN, ID)
const MARKERS: COBEOptions["markers"] = [
  { location: [1.35, 103.82],   size: 0.08  },   // Singapore
  { location: [5.41, 100.33],   size: 0.055 },   // Malaysia  (Penang)
  { location: [13.08, 80.27],   size: 0.055 },   // India     (Chennai)
  { location: [-7.25, 112.75],  size: 0.055 },   // Indonesia (Surabaya)
]

// Arcs connecting all 4 countries (hub SG + cross-links)
const ARCS: COBEOptions["arcs"] = [
  { from: [1.35, 103.82],  to: [5.41, 100.33]  },  // SG → MY
  { from: [1.35, 103.82],  to: [13.08, 80.27]  },  // SG → IN
  { from: [1.35, 103.82],  to: [-7.25, 112.75] },  // SG → ID
  { from: [5.41, 100.33],  to: [13.08, 80.27]  },  // MY → IN
  { from: [5.41, 100.33],  to: [-7.25, 112.75] },  // MY → ID
]

export function FooterGlobe({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return
    const canvas = canvasRef.current
    let phi = 1.8           // centers on Indian Ocean / SE Asia
    let animId: number
    let globe: ReturnType<typeof createGlobe> | null = null

    const init = () => {
      const w = canvas.offsetWidth
      if (!w || globe) return

      globe = createGlobe(canvas, {
        devicePixelRatio: Math.min(window.devicePixelRatio ?? 1, 2),
        width: w * 2,
        height: w * 2,
        phi,
        theta: 0.15,
        dark: 1,
        diffuse: 1.3,
        mapSamples: 14000,
        mapBrightness: 7,
        baseColor: [0.12, 0.14, 0.12],
        markerColor: [0.64, 0.77, 0.60],   // #a3c59a
        glowColor: [0.05, 0.12, 0.05],
        arcColor: [0.64, 0.77, 0.60],
        arcWidth: 1.2,
        arcHeight: 0.3,
        markers: MARKERS,
        arcs: ARCS,
        opacity: 0.85,
      })

      const animate = () => {
        phi += 0.003
        globe!.update({ phi })
        animId = requestAnimationFrame(animate)
      }
      animate()

      setTimeout(() => { if (canvas) canvas.style.opacity = "1" })
    }

    if (canvas.offsetWidth > 0) {
      init()
    } else {
      const ro = new ResizeObserver(entries => {
        if (entries[0]?.contentRect.width > 0) {
          ro.disconnect()
          init()
        }
      })
      ro.observe(canvas)
      return () => ro.disconnect()
    }

    return () => {
      cancelAnimationFrame(animId)
      if (globe) globe.destroy()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ width: "100%", height: "100%", opacity: 0, transition: "opacity 1.2s ease" }}
    />
  )
}
