"use client";
import { useEffect, useRef } from "react";
import { useMotionValue, useSpring, useInView } from "framer-motion";

function Counter({ value, triggered }: { value: number; triggered: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);

  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 200,
  });

  useEffect(() => {
    if (triggered) {
      motionValue.set(value);
    }
  }, [motionValue, value, triggered]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        const clampedValue = Math.min(Math.round(latest), value);
        ref.current.textContent = Intl.NumberFormat("en-US").format(clampedValue);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}>0</span>;
}

export default function StatsBento() {
  const gridRef = useRef<HTMLDivElement>(null);
  const triggered = useInView(gridRef, { once: true, margin: "0px" });

  return (
    <section className="py-12 sm:py-24 bg-zinc-950 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div ref={gridRef} className="grid grid-cols-3 gap-2 sm:gap-4 auto-rows-fr">

          {/* 1. Custom-Engineered Solutions */}
          <div className="bg-zinc-900/40 p-4 sm:p-10 border border-zinc-800 flex flex-col justify-between group hover:border-[#a3c59a]/50 transition-colors">
            <span className="text-4xl sm:text-7xl font-bold tracking-tighter text-white leading-none">
              <Counter value={100} triggered={triggered} />%
            </span>
            <p className="text-[#a3c59a] font-bold uppercase tracking-widest text-[9px] sm:text-sm mt-2 sm:mt-0">
              Custom-Engineered Solutions
            </p>
          </div>

          {/* 2. Middle Column */}
          <div className="flex flex-col gap-2 sm:gap-4">
            <div className="flex-1 bg-white p-4 sm:p-8 flex flex-col justify-center">
              <span className="text-2xl sm:text-4xl font-bold text-black">
                <Counter value={10} triggered={triggered} />+
              </span>
              <p className="text-zinc-500 text-[8px] sm:text-[10px] uppercase font-bold tracking-[0.15em] sm:tracking-[0.2em] mt-1 sm:mt-2 leading-tight">
                Robotics Projects Delivered
              </p>
            </div>

            <div className="flex-1 bg-zinc-900/40 border border-zinc-800 p-4 sm:p-8 flex flex-col justify-center group hover:border-[#a3c59a]/50 transition-colors">
              <span className="text-2xl sm:text-4xl font-bold text-white">
                <Counter value={99} triggered={triggered} />%
              </span>
              <p className="text-zinc-400 text-[8px] sm:text-[10px] uppercase font-bold tracking-[0.15em] sm:tracking-[0.2em] mt-1 sm:mt-2">
                Uptime
              </p>
            </div>
          </div>

          {/* 3. Countries & Warranty */}
          <div className="bg-[#a3c59a] p-4 sm:p-10 flex flex-col justify-between text-black">
            <div className="flex flex-col">
              <span className="text-4xl sm:text-7xl font-bold tracking-tighter leading-none">
                <Counter value={4} triggered={triggered} />
              </span>
              <p className="font-bold uppercase tracking-widest text-[9px] sm:text-sm mt-1 sm:mt-2">
                Countries – SG, MY, IN, ID
              </p>
            </div>

            <div className="pt-3 sm:pt-8 border-t border-black/20 mt-3 sm:mt-0">
              <p className="font-bold uppercase tracking-widest text-[9px] sm:text-sm leading-tight">
                Full 1-Year Warranty <br /> & Technical Support
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
