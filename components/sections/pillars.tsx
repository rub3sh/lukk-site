"use client";
import { motion } from "framer-motion";
import { MapPin, Settings2, Layers } from "lucide-react";

const pillars = [
  {
    icon: <MapPin className="w-5 h-5 sm:w-7 sm:h-7" />,
    title: "Local Support",
    subtitle: "In Every Country",
    desc: "Dedicated on-ground teams in Singapore, Malaysia, India, and Indonesia. Fast response, local expertise — no waiting on overseas vendors.",
  },
  {
    icon: <Settings2 className="w-5 h-5 sm:w-7 sm:h-7" />,
    title: "Fully Customised",
    subtitle: "Per Client Solution",
    desc: "Not a box-product vendor. Every system is engineered to your specific workflow, environment, and payload requirements.",
  },
  {
    icon: <Layers className="w-5 h-5 sm:w-7 sm:h-7" />,
    title: "End-to-End",
    subtitle: "Hardware to Software",
    desc: "From physical robots to AI vision and fleet management software — one partner, one responsibility, zero integration gaps.",
  },
];

export default function Pillars() {
  return (
    <section className="bg-zinc-950 py-12 sm:py-20 border-t border-zinc-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-14 text-center"
        >
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#a3c59a] mb-3">
            Why Clients Choose LUKK
          </p>
          <h2 className="text-2xl sm:text-3xl sm:text-4xl font-bold text-white">
            The <span className="text-[#a3c59a]">3 Pillars</span> That Set Us Apart
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-zinc-800 border border-zinc-800">
          {pillars.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="relative bg-zinc-950 p-4 sm:p-10 group hover:bg-zinc-900 transition-colors duration-300 overflow-hidden"
            >
              {/* Number watermark */}
              <span className="absolute -right-3 -top-4 text-[80px] sm:text-[120px] font-black text-zinc-900 leading-none select-none group-hover:text-zinc-800 transition-colors">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="relative z-10">
                <div className="mb-3 sm:mb-6 flex h-10 w-10 sm:h-14 sm:w-14 items-center justify-center bg-zinc-900 border border-zinc-800 text-[#a3c59a] group-hover:bg-[#a3c59a] group-hover:text-black transition-all duration-300">
                  {p.icon}
                </div>

                <h3 className="text-base sm:text-xl font-extrabold uppercase tracking-wider text-white leading-tight">
                  {p.title}
                </h3>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#a3c59a] mt-1 mb-3 sm:mb-4">
                  {p.subtitle}
                </p>
                <p className="text-sm leading-relaxed text-zinc-400 group-hover:text-zinc-200 transition-colors">
                  {p.desc}
                </p>

                <div className="mt-4 sm:mt-8 h-[1px] w-8 bg-zinc-800 group-hover:w-full group-hover:bg-[#a3c59a] transition-all duration-700" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
