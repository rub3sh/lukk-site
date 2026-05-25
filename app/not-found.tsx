"use client";
import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center overflow-hidden select-none px-6"
      style={{ backgroundColor: "#000000" }}
    >
      {/* Scanline texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.6) 3px, rgba(255,255,255,0.6) 4px)",
        }}
      />

      {/* ARQX logo */}
      <div className="relative z-10 mb-10 w-28 sm:w-36 opacity-80">
        <Image
          src="/arqx_logo.jpg"
          alt="ARQX-Atlas Systems"
          width={420}
          height={420}
          className="w-full h-auto object-contain"
          priority
        />
      </div>

      {/* Big 404 */}
      <p
        className="relative z-10 text-[9rem] sm:text-[13rem] font-black leading-none tracking-tighter mb-2"
        style={{ color: "#ffffff" }}
      >
        404
      </p>

      {/* Mocking headline */}
      <h1
        className="relative z-10 text-2xl sm:text-4xl font-black uppercase tracking-tight text-center mb-4"
        style={{ color: "#ffffff" }}
      >
        Bro really typed a{" "}
        <span style={{ color: "#ff3b3b" }}>fake URL</span> 💀
      </h1>

      {/* Sub-lines */}
      <p className="relative z-10 text-sm sm:text-base font-bold text-center mb-2" style={{ color: "rgba(255,255,255,0.45)" }}>
        This page doesn&apos;t exist. Never did. Never will.
      </p>
      <p className="relative z-10 text-sm sm:text-base font-bold text-center mb-10" style={{ color: "rgba(255,255,255,0.25)" }}>
        You hunted it down and found absolutely nothing. Classic.
      </p>

      {/* CTA */}
      <Link
        href="/"
        className="relative z-10 inline-flex items-center gap-3 px-10 py-3.5 font-black text-sm uppercase tracking-widest transition-all duration-200 hover:scale-105 active:scale-95"
        style={{ backgroundColor: "#ffffff", color: "#000000" }}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        Take Me Home
      </Link>

      {/* Bottom stamp */}
      <p
        className="absolute bottom-5 text-[9px] uppercase tracking-[0.4em] z-10"
        style={{ color: "rgba(255,255,255,0.08)" }}
      >
        ARQX&#8209;Atlas Systems &nbsp;·&nbsp; Internal Deployment
      </p>
    </div>
  );
}
