"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ArrowRight } from "lucide-react";

const industries = [
  {
    name: "Logistics & Warehouse",
    img: "/industries/logistics.jpg",
    tagline: "End-to-end intralogistics automation.",
    overview: "LUKK delivers full-stack warehouse automation — from inbound receiving to outbound dispatch. Our AMRs, AGVs, FMR forklifts, shuttle systems, and digital packing stations work together as a connected, AI-managed fleet that runs 24/7.",
    feasibility: "High feasibility for warehouses with 20+ staff and repetitive material movement. ROI typically within 12–18 months.",
    applications: ["Goods-to-person picking", "Pallet storage & retrieval (FMR)", "Cross-docking & sortation", "Digital packing & dispatch verification"],
    technologies: ["AMR", "AGV", "FMR", "Shuttle System", "Digital Packing Station", "Software Platform"],
    roi: ["40–60% reduction in manual handling labour", "3× throughput increase", "99.9% inventory accuracy", "24/7 operation with no shift premiums"],
  },
  {
    name: "Food & Beverage",
    img: "/industries/food.jpg",
    tagline: "Hygienic automation for demanding environments.",
    overview: "Food facilities demand zero contamination and consistent cold-chain integrity. LUKK deploys hygienic-rated AMRs and AI vision systems specifically designed for food manufacturing, cold stores, and packaging lines.",
    feasibility: "Ideal for facilities with high-volume repetitive material movement. Fast ROI due to labour savings in cold-chain environments where human exposure is costly.",
    applications: ["Cold room material transport", "Production line feeding", "AI quality & contamination inspection", "Hygienic packaging automation"],
    technologies: ["Hygienic AMR", "Vision & AI Systems", "Digital Packing Station", "Software Platform"],
    roi: ["Eliminate human exposure in cold environments", "Zero contamination risk from handling", "Consistent throughput regardless of shift changes", "Full product traceability"],
  },
  {
    name: "Pharmaceuticals",
    img: "/industries/pharma.jpg",
    tagline: "GMP-compliant automation with full traceability.",
    overview: "Pharma demands strict GMP compliance, serialisation, and contamination control. LUKK's cleanroom-rated AMRs and AI-vision packing stations provide the traceability and audit trails required by FDA, WHO, and local regulators.",
    feasibility: "Critical for facilities under regulatory scrutiny. Automation reduces human-error-driven compliance failures and recall risk — strong business case for any GMP-certified facility.",
    applications: ["Cleanroom material transport", "Serialisation & packing verification", "Cold-chain drug storage movement", "AI-based label & QC inspection"],
    technologies: ["Cleanroom AMR", "Digital Packing Station", "Vision & AI Systems", "Software Platform"],
    roi: ["99%+ regulatory compliance rate", "Full digital audit trail per batch", "Reduced recall risk and associated costs", "Zero cross-contamination incidents"],
  },
  {
    name: "Automobile",
    img: "/industries/automobile.jpg",
    tagline: "Just-in-time delivery to every line station.",
    overview: "Automotive production runs on tight JIT schedules. LUKK AGVs and FMRs deliver components to line stations on-demand, while AI vision systems perform real-time defect detection — keeping production moving without delays.",
    feasibility: "High impact for automotive plants with 3+ production lines and significant internal logistics. Immediate payback through reduction of line stoppages caused by material delay.",
    applications: ["Line-side component delivery (JIT)", "Sub-assembly transport", "Container & pallet handling (FMR)", "Defect detection & dimensional inspection"],
    technologies: ["AGV", "FMR", "Vision & AI Systems", "Robotic Arm Integration"],
    roi: ["30% reduction in WIP inventory", "Zero line stoppages from material delay", "Early defect detection — saves rework cost", "Consistent 24/7 line feeding"],
  },
  {
    name: "E-Commerce & Retail",
    img: "/industries/ecommerce.jpg",
    tagline: "Peak-season scale without extra headcount.",
    overview: "E-commerce operations face extreme volume spikes. LUKK's goods-to-person AMR systems, shuttle storage, and AI-assisted packing let you scale throughput on demand — without proportionally scaling headcount.",
    feasibility: "Ideal for 3PLs and e-commerce operators fulfilling 500+ orders/day. Pays back fastest during high-growth and seasonal peak periods.",
    applications: ["Goods-to-person order picking", "Sortation & lane management", "AI-assisted packing (OCR + pick-to-light)", "Returns processing automation"],
    technologies: ["AMR", "Shuttle System", "Digital Packing Station", "Vision & AI Systems"],
    roi: ["5× order throughput with same footprint", "99%+ packing accuracy — zero mispacks", "Scale instantly for peak without extra hires", "40% faster dispatch cycle time"],
  },
  {
    name: "Manufacturing",
    img: "/industries/manufacturing.jpg",
    tagline: "Smart factory from floor to finished goods.",
    overview: "Manufacturing plants need consistent material flow, precision assembly, and zero-defect quality. LUKK autonomous robots handle material movement while AI vision systems perform inline QC — turning your factory into a smart facility.",
    feasibility: "Strong fit for manufacturers with more than 30 manual material handling operators. Proven payback across electronics, FMCG, metal fabrication, and industrial goods.",
    applications: ["Raw material & WIP transport", "Assembly line automation (co-bot arms)", "Inline AI quality inspection", "Finished goods palletising"],
    technologies: ["AMR", "AGV", "Robotic Arm Integration", "Vision & AI Systems", "Software Platform"],
    roi: ["70% reduction in non-value-added material movement", "Zero unplanned stoppages from misfeeds", "Defect catch rate improves to 98%+", "24/7 production with no fatigue errors"],
  },
  {
    name: "Clean Room",
    img: "/industries/cleanroom.jpg",
    tagline: "Zero-particle automation for ISO-controlled environments.",
    overview: "Clean room environments in semiconductor, biotech, and medical device manufacturing cannot tolerate particulate contamination from human presence. LUKK ISO-rated AMRs maintain cleanroom integrity while automating every material movement.",
    feasibility: "Mandatory consideration for any ISO Class 5–8 facility. Every human removed from a cleanroom is a contamination risk eliminated — the ROI case is immediate.",
    applications: ["Material transport without human entry", "Precision pick-and-place", "AI contamination & defect inspection", "Automated sample storage/retrieval"],
    technologies: ["ISO-rated AMR", "Robotic Arm Integration", "Vision & AI Systems", "Digital Packing Station"],
    roi: ["Zero contamination incidents from material handling", "ISO class integrity maintained 24/7", "Reduced gowning costs and time", "Full movement traceability per ISO audit"],
  },
  {
    name: "Semiconductor",
    img: "/industries/semiconductor.jpg",
    tagline: "Sub-millimetre precision for your most sensitive loads.",
    overview: "Semiconductor fabs handle wafers, FOUPs, and dies that require ultra-precise, vibration-free transport. LUKK's precision AMRs and AI alignment vision systems ensure zero handling damage from fab entry to final test.",
    feasibility: "Essential for fabs processing 200mm+ wafers. One wafer drop can cost tens of thousands — automation pays back immediately.",
    applications: ["FOUP & wafer transport", "Reticle and die handling", "AI alignment & defect inspection", "Cleanroom stocker integration"],
    technologies: ["Precision AMR", "Vision & AI Systems", "Robotic Arm Integration", "Software Platform"],
    roi: ["Zero wafer handling damage", "100% movement traceability (SEMI E84/E87 ready)", "Higher wafer yield through consistent handling", "24/7 fab operation without human fatigue"],
  },
  {
    name: "Energy & Construction",
    img: "/industries/energy.jpg",
    tagline: "Autonomous operations in hazardous environments.",
    overview: "Energy sites — oil & gas, solar farms, power plants, and large construction projects — expose workers to hazardous conditions. LUKK autonomous inspection robots and AI monitoring systems remove humans from dangerous zones while maintaining safety compliance.",
    feasibility: "High value for facilities under HSE regulations with repetitive hazardous inspection tasks. Strong insurance and compliance cost reduction case.",
    applications: ["Autonomous facility inspection", "Asset tracking in hazardous zones", "AI safety compliance monitoring", "Remote monitoring via software platform"],
    technologies: ["Inspection AMR", "Vision & AI Systems", "Software Platform"],
    roi: ["Reduce human exposure in hazardous zones", "Continuous 24/7 inspection vs periodic audits", "Lower insurance premiums via HSE compliance", "Early fault detection — prevents costly shutdowns"],
  },
  {
    name: "Education",
    img: "/industries/education.jpg",
    tagline: "Live robotics for the next generation.",
    overview: "Educational institutions — universities, polytechnics, and research centres — are deploying LUKK's automation systems as live teaching platforms and research tools. Students interact with real industrial robots in controlled, safe environments.",
    feasibility: "Strong fit for engineering schools and automation research centres. LUKK provides configuration for educational use with built-in safety modes and curriculum integration support.",
    applications: ["Live robot demonstration platforms", "AI vision lab installations", "Research automation testbeds", "Industry-readiness training environments"],
    technologies: ["AMR", "Vision & AI Systems", "Robotic Arm Integration", "Software Platform"],
    roi: ["Industry-relevant training on real equipment", "Research grants attract additional funding", "Differentiates curriculum from competitors", "LUKK engineers provide guest-lecturing support"],
  },
];

type Industry = typeof industries[0];

function IndustryModal({ industry, onClose }: { industry: Industry; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-4xl bg-zinc-900 border border-zinc-700 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 flex h-9 w-9 items-center justify-center bg-zinc-800 border border-zinc-700 text-zinc-400 hover:bg-[#a3c59a] hover:text-black hover:border-[#a3c59a] transition-all duration-200"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex flex-col lg:flex-row overflow-auto">
            {/* Image */}
            <div className="relative w-full lg:w-[42%] aspect-video sm:aspect-square lg:aspect-auto lg:min-h-[420px] shrink-0 bg-zinc-950 flex items-center justify-center">
              <Image
                src={industry.img}
                alt={industry.name}
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-contain p-4"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/30 via-transparent to-transparent lg:bg-gradient-to-r" />
              <div className="absolute bottom-4 left-4">
                <span className="text-xs font-black uppercase tracking-widest text-white bg-[#a3c59a] px-3 py-1.5">
                  Industry
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 p-8 overflow-y-auto">
              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#a3c59a] mb-2">{industry.tagline}</p>
              <h2 className="text-2xl font-black uppercase tracking-tight text-white mb-4">{industry.name}</h2>
              <p className="text-base leading-7 text-zinc-400 mb-6">{industry.overview}</p>

              {/* Feasibility */}
              <div className="mb-6 border border-[#a3c59a]/30 bg-[#a3c59a]/5 p-4">
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#a3c59a] mb-1">Feasibility & ROI Snapshot</p>
                <p className="text-sm text-zinc-300 leading-relaxed">{industry.feasibility}</p>
              </div>

              {/* Applications */}
              <div className="mb-6">
                <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-3">Key Applications</p>
                <div className="space-y-2">
                  {industry.applications.map((a, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <ArrowRight className="w-3.5 h-3.5 text-[#a3c59a] mt-1 shrink-0" />
                      <p className="text-sm text-zinc-300">{a}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ROI points */}
              <div className="mb-6">
                <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-3">Expected Outcomes</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {industry.roi.map((r, i) => (
                    <div key={i} className="flex items-start gap-2 bg-zinc-800/60 px-3 py-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#a3c59a] mt-1.5 shrink-0" />
                      <p className="text-xs text-zinc-300 leading-relaxed">{r}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-3">Technologies Deployed</p>
                <div className="flex flex-wrap gap-2">
                  {industry.technologies.map((t, i) => (
                    <span key={i} className="text-xs border border-zinc-700 text-zinc-300 px-3 py-1.5 bg-zinc-800">{t}</span>
                  ))}
                </div>
              </div>

              <a
                href="#contact"
                onClick={onClose}
                className="inline-block bg-[#a3c59a] text-black text-sm font-black uppercase tracking-widest px-8 py-3.5 hover:bg-white transition-colors"
              >
                Discuss Your Project →
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Industries() {
  const [selected, setSelected] = useState<Industry | null>(null);

  return (
    <>
      <section id="industries" className="bg-zinc-900/30 py-24 lg:py-32 border-t border-zinc-900">
        <div className="mx-auto max-w-7xl px-6">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#a3c59a] mb-4">Sectors We Serve</p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white uppercase">
              10 Industries. <span className="text-[#a3c59a]">One Platform.</span>
            </h2>
            <p className="mt-3 text-base text-zinc-400">Click any industry to see applications, ROI, and feasibility.</p>
            <div className="mt-4 h-[2px] w-16 bg-[#a3c59a]" />
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-zinc-800 border border-zinc-800">
            {industries.map((ind, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                onClick={() => setSelected(ind)}
                className="bg-zinc-950 group hover:bg-zinc-900 transition-colors duration-300 overflow-hidden cursor-pointer"
              >
                {/* Image */}
                <div className="relative w-full overflow-hidden h-[130px] sm:h-[180px] lg:h-[220px]">
                  <Image
                    src={ind.img}
                    alt={ind.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                  <div className="absolute top-3 left-3 text-xs font-black text-[#a3c59a] font-mono bg-zinc-950/70 px-2 py-1">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  {/* View detail overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-zinc-950/40">
                    <span className="text-white text-xs font-bold uppercase tracking-widest border border-white/40 px-3 py-1.5 backdrop-blur-sm">
                      View Details
                    </span>
                  </div>
                </div>

                {/* Text */}
                <div className="p-2 sm:p-5">
                  <h3 className="text-[10px] sm:text-base font-extrabold uppercase tracking-wide text-white group-hover:text-[#a3c59a] transition-colors leading-tight mb-1 sm:mb-2">
                    {ind.name}
                  </h3>
                  <p className="text-[9px] sm:text-sm leading-relaxed text-zinc-500 group-hover:text-zinc-300 transition-colors line-clamp-2 hidden sm:block">
                    {ind.tagline}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {selected && <IndustryModal industry={selected} onClose={() => setSelected(null)} />}
    </>
  );
}
