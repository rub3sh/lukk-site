"use client";
import { motion } from "framer-motion";
import { Bot, Wrench, Cpu, ArrowRight } from "lucide-react";

const steps = [
  { icon: <Bot className="w-6 h-6" />, label: "Tell Us Your Challenge", desc: "Describe your workflow, environment, and automation goal." },
  { icon: <Cpu className="w-6 h-6" />, label: "We Design the Solution", desc: "Our engineers create a custom robot spec within 48 hours." },
  { icon: <Wrench className="w-6 h-6" />, label: "We Build & Deploy", desc: "Your custom automation system is deployed in weeks, not months." },
];

export default function BuildMyBot() {
  return (
    <section className="relative bg-zinc-950 border-t border-zinc-900 py-24 lg:py-32 overflow-hidden">

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#a3c59a]/6 blur-[120px] rounded-full" />
      </div>

      {/* Grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: "linear-gradient(rgba(163,197,154,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(163,197,154,0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#a3c59a] mb-4">
              Custom Engineering
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.0] mb-6">
              Didn&apos;t find<br />
              what you need?
            </h2>
            <p className="text-xl text-[#a3c59a] font-bold mb-4">
              We can custom tailor make just for you.
            </p>
            <p className="text-base leading-8 text-zinc-400 mb-10 max-w-lg">
              Not every automation challenge fits a catalogue solution. Tell us your problem — our engineers will design a custom robot or automation platform built specifically for your environment, workflow, and budget.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-[#a3c59a] text-black font-black text-base uppercase tracking-widest px-10 py-5 hover:bg-white transition-colors duration-300 group"
            >
              Build My Bot
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          {/* Right — steps */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-px bg-zinc-800"
          >
            {steps.map((s, i) => (
              <div key={i} className="flex gap-6 items-start bg-zinc-950 p-8 group hover:bg-zinc-900 transition-colors duration-300">
                {/* Number + icon */}
                <div className="flex flex-col items-center gap-2 shrink-0">
                  <span className="text-xs font-black text-zinc-700 font-mono group-hover:text-[#a3c59a] transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex h-12 w-12 items-center justify-center border border-zinc-800 text-zinc-500 group-hover:border-[#a3c59a] group-hover:text-[#a3c59a] transition-all duration-300 bg-zinc-900">
                    {s.icon}
                  </div>
                </div>
                {/* Text */}
                <div className="pt-1">
                  <h3 className="text-lg font-bold text-white group-hover:text-[#a3c59a] transition-colors mb-2">
                    {s.label}
                  </h3>
                  <p className="text-base text-zinc-500 group-hover:text-zinc-300 transition-colors leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
