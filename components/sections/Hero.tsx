"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { SplineScene } from "@/components/ui/splite";

const revealItems = [
  { label: "Autonomous Robots",   sublabel: "AMR · AGV · FMR",         delay: 0.7  },
  { label: "AI Vision Systems",   sublabel: "95–99% Accuracy",          delay: 1.5  },
  { label: "4 Countries",         sublabel: "SG · MY · IN · ID",        delay: 2.3  },
  { label: "Deployed in Weeks",   sublabel: "Not Months",               delay: 3.1  },
  { label: "Full-Stack Platform", sublabel: "Hardware + AI + Software",  delay: 3.9  },
];

export default function Hero() {
  return (
    <section
      className="relative bg-zinc-950 overflow-hidden flex flex-col"
      style={{ minHeight: "calc(100svh - 56px)", maxHeight: "calc(100svh - 56px)" }}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Ambient green glow — wrapped to prevent blur overflow on mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#a3c59a]/8 blur-[140px]" />
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-3 pb-0 flex-1 flex flex-col lg:flex-row gap-4 lg:gap-0 overflow-hidden">

        {/* Left — text */}
        <div className="flex-1 flex flex-col justify-center lg:pr-6 z-10">
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 border border-[#a3c59a]/30 bg-[#a3c59a]/10 px-4 py-1.5 mb-5 w-fit"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#a3c59a] animate-pulse" />
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#a3c59a]">
              Engineered in Asia. Built for the World.
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-5xl xl:text-6xl font-black tracking-tight text-white leading-[1.05]"
          >
            Building the{" "}
            <span className="text-[#a3c59a]">Future</span>
            {" "}of<br />
            Robotics &amp; Automation.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-4 text-sm sm:text-base leading-relaxed text-zinc-400 max-w-xl"
          >
            <strong className="text-white">LUKK Automations</strong> designs and
            deploys AI-driven robotics platforms — from warehouse floors to
            cleanrooms — across Southeast Asia. Fast, scalable, and fully
            customised to your operations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-6 sm:mt-7 flex flex-wrap gap-3 sm:gap-4"
          >
            <Link
              href="#solutions"
              className="inline-block bg-[#a3c59a] px-6 sm:px-8 py-2.5 sm:py-3 font-bold text-black text-sm tracking-wide transition-all hover:bg-white hover:scale-[1.03] active:scale-95"
            >
              Explore Solutions
            </Link>
            <Link
              href="#contact"
              className="inline-block border-2 border-zinc-700 px-6 sm:px-8 py-2.5 sm:py-3 font-bold text-white text-sm tracking-wide transition-all hover:border-[#a3c59a] hover:text-[#a3c59a]"
            >
              Request a Demo →
            </Link>
          </motion.div>
        </div>

        {/* Right — 3D robot, bottom-anchored, desktop only */}
        <div className="hidden lg:flex flex-1 flex-col justify-end items-center">
          <div
            className="relative w-full"
            style={{ height: "min(580px, calc(100svh - 56px - 210px))" }}
          >
            <div
              className="w-full h-full"
              style={{
                filter: "sepia(0.12) hue-rotate(88deg) saturate(2.5) brightness(0.92)",
              }}
            >
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ARQX architect stamp — barely visible, bottom-left */}
      <div className="absolute bottom-[125px] sm:bottom-[195px] left-4 sm:left-6 z-10 pointer-events-none select-none">
        <p className="text-[7px] font-mono uppercase tracking-[0.3em] text-zinc-700 opacity-50">
          ARQX&#8209;Atlas Systems
        </p>
      </div>

      {/* ── BOTTOM ANIMATION STRIP — visible on all screens ── */}
      <div
        className="relative w-full border-t border-zinc-800/60 overflow-hidden shrink-0 h-[120px] sm:h-[190px]"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 to-transparent" />
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 5px, rgba(163,197,154,0.015) 5px, rgba(163,197,154,0.015) 6px)",
          }}
        />

        <div className="absolute inset-0 flex items-center">
          <div className="w-full grid grid-cols-3 sm:grid-cols-5 px-4 sm:px-8 gap-2 sm:gap-4">
            {revealItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 18, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: item.delay, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col items-center text-center${i >= 3 ? " hidden sm:flex" : ""}`}
              >
                <span className="text-[10px] sm:text-base font-extrabold uppercase tracking-widest text-white leading-tight">
                  {item.label}
                </span>
                <span className="mt-1 sm:mt-1.5 text-[9px] sm:text-xs font-bold text-[#a3c59a] tracking-wider uppercase">
                  {item.sublabel}
                </span>
                <span className="mt-1.5 sm:mt-2 h-1 w-1 rounded-full bg-[#a3c59a]/60" />
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ x: "-110%" }}
          animate={{ x: "calc(100vw + 120%)" }}
          transition={{ duration: 5, delay: 0.3, ease: "linear" }}
          className="absolute bottom-0 left-0 z-20 pointer-events-none"
          style={{ width: "clamp(100px, 14vw, 270px)" }}
        >
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-6 bg-[#a3c59a]/15 blur-2xl rounded-full" />
          <Image
            src="/robot.png"
            alt="LUKK FMR Autonomous Robot"
            width={380}
            height={340}
            priority
            className="relative z-10 w-full object-contain"
            style={{
              height: "auto",
              filter: "drop-shadow(0 16px 48px rgba(163,197,154,0.18)) drop-shadow(0 4px 12px rgba(0,0,0,0.6))",
            }}
          />
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#a3c59a] via-[#a3c59a]/60 to-transparent" />
      </div>
    </section>
  );
}
