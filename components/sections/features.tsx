"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Banknote, MousePointerClick, HeartHandshake, ShieldCheck, ArrowRight } from "lucide-react";

const features = [
  {
    num: "01",
    title: "Affordable",
    tagline: "ROI in months, not years.",
    metric: "Up to 60% reduction in operational labour costs.",
    icon: <Banknote className="w-7 h-7" />,
    body: "Automation is no longer a luxury — it's a smart investment. Our modular systems are designed for cost efficiency at every scale. We reduce capital risk by starting small, proving value fast, and expanding on your timeline.",
    bullets: ["No large upfront infrastructure spend", "Modular — add robots as you grow", "Typical ROI within 12–18 months", "Reduces labour dependency and error rates"],
    color: "#a3c59a",
  },
  {
    num: "02",
    title: "Easy To Use",
    tagline: "Running in days, not months.",
    metric: "Average operator trained in under 2 weeks.",
    icon: <MousePointerClick className="w-7 h-7" />,
    body: "We build solutions that work for people — not the other way around. From intuitive web dashboards to plug-and-play robot deployment, our systems are built for seamless adoption across teams at every technical level.",
    bullets: ["Plug-and-play robot deployment", "Web-based fleet dashboard — no local software", "Minimal operator training required", "On-site setup and commissioning by our engineers"],
    color: "#7ab8f5",
  },
  {
    num: "03",
    title: "Helpful",
    tagline: "Your team's best co-worker.",
    metric: "Robots work 24/7 alongside your people.",
    icon: <HeartHandshake className="w-7 h-7" />,
    body: "Every solution we deliver is engineered to simplify complex operations. Whether automating material movement, improving packing accuracy, or optimising workflows — our robots work alongside your team, not instead of it.",
    bullets: ["Human-robot collaboration certified (ISO/TS 15066)", "Adapts to your existing workflow", "Real-time alerts and status to your team", "Zero disruption to operations during deployment"],
    color: "#f5a623",
  },
  {
    num: "04",
    title: "Quality",
    tagline: "Enterprise-grade. No compromises.",
    metric: "99%+ uptime guaranteed across all deployments.",
    icon: <ShieldCheck className="w-7 h-7" />,
    body: "Reliability is at the core of every system we build. Backed by global OEM partnerships and local engineering expertise, our automation solutions meet the highest standards of performance, durability, and precision — with full warranty and support.",
    bullets: ["Full 1-year warranty on all hardware", "24/7 remote monitoring and support", "ISO-certified robots and safety systems", "Local engineers in SG, MY, IN, ID"],
    color: "#e05c5c",
  },
];

export default function Features() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="bg-zinc-950 border-t border-zinc-900 py-16 sm:py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* Header */}
        <div className="mb-10 sm:mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 sm:gap-6">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#a3c59a] mb-3">
              Why LUKK Automations
            </p>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.0]">
              Built different.<br />
              <span className="text-[#a3c59a]">On purpose.</span>
            </h2>
          </div>
          <p className="text-base text-zinc-400 max-w-sm leading-7 lg:text-right">
            Four commitments that every LUKK solution is engineered around — from the first site visit to the last support call.
          </p>
        </div>

        {/* Feature rows — accordion */}
        <div className="divide-y divide-zinc-800 border-t border-zinc-800">
          {features.map((f, i) => {
            const isOpen = active === i;
            return (
              <motion.div
                key={i}
                layout
                onClick={() => setActive(isOpen ? null : i)}
                className="group cursor-pointer"
              >
                {/* Always-visible row */}
                <div className={`flex items-center gap-6 py-7 transition-all duration-300 ${isOpen ? "opacity-100" : "opacity-80 hover:opacity-100"}`}>
                  {/* Number */}
                  <span
                    className="text-4xl sm:text-5xl font-black font-mono leading-none shrink-0 transition-colors duration-300"
                    style={{ color: isOpen ? f.color : "#3f3f46", minWidth: 56 }}
                  >
                    {f.num}
                  </span>

                  {/* Icon box */}
                  <div
                    className="hidden sm:flex h-14 w-14 shrink-0 items-center justify-center border transition-all duration-300"
                    style={{
                      borderColor: isOpen ? f.color : "#3f3f46",
                      backgroundColor: isOpen ? `${f.color}15` : "transparent",
                      color: isOpen ? f.color : "#71717a",
                    }}
                  >
                    {f.icon}
                  </div>

                  {/* Title + metric */}
                  <div className="flex-1 min-w-0">
                    <h3
                      className="text-2xl lg:text-3xl font-black uppercase tracking-tight transition-colors duration-300"
                      style={{ color: isOpen ? f.color : "#ffffff" }}
                    >
                      {f.title}
                    </h3>
                    <p className="text-sm text-zinc-500 mt-1 hidden sm:block">{f.tagline}</p>
                  </div>

                  {/* Metric pill — desktop */}
                  <div className="hidden lg:block shrink-0">
                    <span
                      className="text-sm font-bold px-4 py-2 border transition-all duration-300"
                      style={{
                        borderColor: isOpen ? f.color : "#3f3f46",
                        color: isOpen ? f.color : "#71717a",
                        backgroundColor: isOpen ? `${f.color}10` : "transparent",
                      }}
                    >
                      {f.metric}
                    </span>
                  </div>

                  {/* Arrow */}
                  <motion.div
                    animate={{ rotate: isOpen ? 90 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0"
                    style={{ color: isOpen ? f.color : "#52525b" }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </div>

                {/* Expandable detail */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div
                        className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 pb-8 sm:pb-10 pl-4 sm:pl-[88px] lg:pl-[160px] border-l-4"
                        style={{ borderColor: f.color }}
                      >
                        {/* Description */}
                        <div>
                          <p className="text-sm sm:text-base leading-7 sm:leading-8 text-zinc-300 mb-5 sm:mb-6">{f.body}</p>
                          <a
                            href="#contact"
                            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest transition-colors"
                            style={{ color: f.color }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            Learn more <ArrowRight className="w-4 h-4" />
                          </a>
                        </div>

                        {/* Bullets */}
                        <div className="space-y-3">
                          {f.bullets.map((b, bi) => (
                            <div key={bi} className="flex items-start gap-3">
                              <span
                                className="mt-1.5 h-1.5 w-1.5 rounded-full shrink-0"
                                style={{ backgroundColor: f.color }}
                              />
                              <p className="text-base text-zinc-300 leading-relaxed">{b}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
