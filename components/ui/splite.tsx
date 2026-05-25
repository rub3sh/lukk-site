"use client"

import dynamic from "next/dynamic"

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-transparent">
      <div className="w-8 h-8 border-2 border-[#a3c59a] border-t-transparent rounded-full animate-spin" />
    </div>
  ),
})

export function SplineScene({ scene, className }: { scene: string; className?: string }) {
  return <Spline scene={scene} className={className} />
}
