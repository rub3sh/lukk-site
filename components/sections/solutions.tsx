"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";

const coreSolutions = [
  {
    title: "Autonomous Mobile Robots",
    abbr: "AMR",
    description: "Smart mobile robots for automated material transport. No tracks, no tape required.",
    img: "/solutions/amr.jpg",
    detail: {
      tagline: "Navigate freely. Move intelligently.",
      overview: "LUKK AMRs use SLAM (Simultaneous Localisation and Mapping) navigation to move freely through dynamic environments without fixed tracks, QR codes, or floor markings. They self-adapt to obstacles and reroute in real time.",
      specs: [
        { label: "Payload Capacity", value: "100 – 1,500 kg" },
        { label: "Navigation", value: "SLAM + LiDAR Fusion" },
        { label: "Speed", value: "Up to 2.0 m/s" },
        { label: "Battery", value: "Li-Ion, auto-charging" },
        { label: "Safety", value: "ISO 3691-4 compliant" },
        { label: "Integration", value: "WMS / ERP / MES ready" },
      ],
      useCases: ["Warehouse intralogistics", "Hospital material delivery", "Manufacturing line feeding", "Cold storage operations"],
    },
  },
  {
    title: "Autonomous Guided Vehicles",
    abbr: "AGV",
    description: "Path-guided vehicles for reliable, repetitive material movement in structured environments.",
    img: "/solutions/agv.jpg",
    detail: {
      tagline: "Precision on every route.",
      overview: "LUKK AGVs follow pre-defined magnetic, laser, or optical paths to deliver consistent, high-volume material movement in structured warehouse and factory environments. Ideal for predictable, repetitive routes.",
      specs: [
        { label: "Payload Capacity", value: "500 – 5,000 kg" },
        { label: "Navigation", value: "Magnetic / Laser / Optical" },
        { label: "Speed", value: "Up to 1.5 m/s" },
        { label: "Positioning Accuracy", value: "±10 mm" },
        { label: "Safety", value: "Multi-zone laser scanners" },
        { label: "Integration", value: "PLC / SCADA / WMS" },
      ],
      useCases: ["Heavy pallet transport", "Assembly line supply", "Cross-dock operations", "Container yard logistics"],
    },
  },
  {
    title: "Forklift Mobile Robots",
    abbr: "FMR",
    description: "Autonomous forklifts for safe, precise pallet handling at height.",
    img: "/solutions/fmr.jpg",
    detail: {
      tagline: "Autonomous lifting. Zero incidents.",
      overview: "LUKK FMRs autonomously perform pallet pick-and-place at height with millimetre-level accuracy. Equipped with 3D cameras, laser scanners, and AI-driven vision to identify and engage pallets safely — even in tight racking environments.",
      specs: [
        { label: "Lift Height", value: "Up to 6 metres" },
        { label: "Payload", value: "Up to 1,500 kg" },
        { label: "Pallet Detection", value: "3D Vision + LiDAR" },
        { label: "Aisle Width", value: "From 2.8 m" },
        { label: "Certification", value: "ISO 3691-4" },
        { label: "Shift Duration", value: "8–10 hrs per charge" },
      ],
      useCases: ["High-bay warehouse racking", "Pallet storage & retrieval", "Loading dock automation", "Cross-docking operations"],
    },
  },
  {
    title: "Digital Packing Station",
    abbr: "DPS",
    description: "AI-assisted packing workstation with OCR and pick-to-light guidance.",
    img: "/solutions/packing.jpg",
    detail: {
      tagline: "Pack smarter. Ship faster.",
      overview: "The LUKK Digital Packing Station combines AI vision, OCR scanning, and pick-to-light indicators to guide operators through each pack cycle — eliminating mispacks and dramatically reducing training time. Full traceability on every shipment.",
      specs: [
        { label: "Packing Accuracy", value: "99%+" },
        { label: "OCR Speed", value: "< 0.5s per scan" },
        { label: "Throughput", value: "Up to 600 orders/hr" },
        { label: "Integration", value: "WMS / OMS / ERP" },
        { label: "Verification", value: "Weight + Vision + Barcode" },
        { label: "Traceability", value: "Full audit trail" },
      ],
      useCases: ["E-commerce fulfilment", "Pharma serialisation", "B2B order packing", "Returns processing"],
    },
  },
  {
    title: "Vision & AI Systems",
    abbr: "AI",
    description: "Real-time inspection, OCR, and object recognition solutions at 95–99% accuracy.",
    img: "/solutions/vision.jpg",
    detail: {
      tagline: "See everything. Miss nothing.",
      overview: "LUKK Vision & AI systems use deep learning models and high-resolution industrial cameras to perform real-time quality inspection, defect detection, character recognition, and object classification — directly on the production or logistics line.",
      specs: [
        { label: "Detection Accuracy", value: "95 – 99%" },
        { label: "Processing Speed", value: "< 50ms per frame" },
        { label: "Camera Resolution", value: "Up to 20MP" },
        { label: "Model Type", value: "Custom deep learning" },
        { label: "Output", value: "Pass/Fail + Data logging" },
        { label: "Integration", value: "PLC / SCADA / MES" },
      ],
      useCases: ["Defect detection & QC", "Label & barcode verification", "Object counting & sorting", "Dimension measurement"],
    },
  },
  {
    title: "Robotic Arm Integration",
    abbr: "ARM",
    description: "Automated arm solutions for assembly and pick-and-place operations.",
    img: "/solutions/robotic-arm.jpg",
    detail: {
      tagline: "Precision. Speed. Repeatability.",
      overview: "LUKK integrates 4–6 axis collaborative and industrial robotic arms for pick-and-place, assembly, welding, and packaging. Pre-configured with vision-guided grasping and safety-rated force sensing for human-robot collaboration.",
      specs: [
        { label: "Axes", value: "4 – 6 axis" },
        { label: "Repeatability", value: "±0.02 mm" },
        { label: "Payload", value: "3 – 20 kg" },
        { label: "Reach", value: "500 – 1,300 mm" },
        { label: "Vision", value: "2D / 3D guided grasping" },
        { label: "Collaboration", value: "ISO/TS 15066 certified" },
      ],
      useCases: ["PCB & electronics assembly", "Packaging & palletising", "Welding & soldering", "Food portioning"],
    },
  },
  {
    title: "6-Way Shuttle System",
    abbr: "SHT",
    description: "High-speed automated storage and movement of totes and pallets.",
    img: "/solutions/shuttle.jpg",
    detail: {
      tagline: "Maximum density. Maximum throughput.",
      overview: "The LUKK 6-Way Shuttle operates autonomously across X, Y, and Z axes in dense racking structures — delivering, retrieving, and transferring totes or pallets at high speed. Ideal for high-SKU, space-constrained warehouses.",
      specs: [
        { label: "Movement", value: "6-directional (X/Y/Z)" },
        { label: "Speed", value: "2 – 4 m/s" },
        { label: "Cycle Rate", value: "Hundreds/hr per shuttle" },
        { label: "Tote / Pallet", value: "Both supported" },
        { label: "Control", value: "Central WCS integration" },
        { label: "Scalability", value: "Multi-shuttle per aisle" },
      ],
      useCases: ["High-density AS/RS storage", "Omnichannel fulfilment", "Cold storage buffering", "Batch picking operations"],
    },
  },
  {
    title: "Software Platform",
    abbr: "SW",
    description: "Fleet management and AI vision software for robotics control and monitoring.",
    img: "/solutions/software.jpg",
    detail: {
      tagline: "One platform. Total visibility.",
      overview: "The LUKK Software Platform provides centralised fleet management, real-time map visualisation, task scheduling, AI route optimisation, and analytics — all through a single web dashboard. Native integration with WMS, ERP, and MES systems.",
      specs: [
        { label: "Interface", value: "Web-based dashboard" },
        { label: "Fleet Size", value: "Unlimited robots" },
        { label: "Map View", value: "Real-time live tracking" },
        { label: "Route AI", value: "Dynamic optimisation" },
        { label: "Integration", value: "REST API / MQTT / OPC-UA" },
        { label: "Uptime", value: "99.9% SLA" },
      ],
      useCases: ["Multi-robot orchestration", "KPI & OEE reporting", "Maintenance scheduling", "Remote monitoring"],
    },
  },
];

type Solution = typeof coreSolutions[0];

function ProductModal({ solution, onClose }: { solution: Solution; onClose: () => void }) {
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
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

        {/* Modal box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-4xl bg-zinc-900 border border-zinc-700 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 flex h-9 w-9 items-center justify-center bg-zinc-800 border border-zinc-700 text-zinc-400 hover:bg-[#a3c59a] hover:text-black hover:border-[#a3c59a] transition-all duration-200"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex flex-col lg:flex-row overflow-auto">
            {/* Left — image */}
            <div className="relative w-full lg:w-[42%] aspect-video sm:aspect-square lg:aspect-auto lg:min-h-[420px] shrink-0 bg-zinc-950 flex items-center justify-center">
              <Image
                src={solution.img}
                alt={solution.title}
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-contain p-4"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 to-transparent lg:bg-gradient-to-r lg:from-zinc-950/30 pointer-events-none" />
              {/* Abbr badge */}
              <div className="absolute top-4 left-4 bg-[#a3c59a] text-black text-xs font-black px-3 py-1.5 tracking-widest uppercase">
                {solution.abbr}
              </div>
            </div>

            {/* Right — details */}
            <div className="flex-1 p-4 sm:p-8 overflow-y-auto">
              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#a3c59a] mb-2">
                {solution.detail.tagline}
              </p>
              <h2 className="text-2xl font-black uppercase tracking-tight text-white mb-4 leading-tight">
                {solution.title}
              </h2>
              <p className="text-sm leading-7 text-zinc-400 mb-7">
                {solution.detail.overview}
              </p>

              {/* Specs grid */}
              <div className="mb-7">
                <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-3">Key Specifications</p>
                <div className="grid grid-cols-2 gap-px bg-zinc-800 border border-zinc-800">
                  {solution.detail.specs.map((s, i) => (
                    <div key={i} className="bg-zinc-900 px-4 py-3">
                      <p className="text-[10px] uppercase tracking-wider text-zinc-500">{s.label}</p>
                      <p className="text-sm font-bold text-white mt-0.5">{s.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Use cases */}
              <div className="mb-8">
                <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-3">Common Use Cases</p>
                <div className="flex flex-wrap gap-2">
                  {solution.detail.useCases.map((u, i) => (
                    <span key={i} className="text-xs border border-zinc-700 text-zinc-300 px-3 py-1.5 bg-zinc-800">
                      {u}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <a
                href="#contact"
                onClick={onClose}
                className="inline-block bg-[#a3c59a] text-black text-sm font-black uppercase tracking-widest px-8 py-3.5 hover:bg-white transition-colors duration-200"
              >
                Request a Demo →
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Solutions() {
  const [selected, setSelected] = useState<Solution | null>(null);

  return (
    <>
      <section id="solutions" className="bg-zinc-950 py-16 sm:py-24 lg:py-32 border-t border-zinc-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 sm:mb-16"
          >
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#a3c59a] mb-4">
              Product Portfolio
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white uppercase">
              Our Core <span className="text-[#a3c59a]">Solutions</span>
            </h2>
            <p className="mt-3 text-base text-zinc-400">Click any product to view full specifications.</p>
            <div className="mt-4 h-[2px] w-16 bg-[#a3c59a]" />
          </motion.div>

          <div className="grid grid-cols-2 gap-px bg-zinc-800 border border-zinc-800 lg:grid-cols-4">
            {coreSolutions.map((solution, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                onClick={() => setSelected(solution)}
                className="group flex flex-col bg-zinc-950 transition-all duration-300 cursor-pointer"
              >
                {/* Image area */}
                <div className="relative aspect-square w-full bg-zinc-900 overflow-hidden">
                  <Image
                    src={solution.img}
                    alt={solution.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-zinc-950/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-xs font-bold uppercase tracking-widest border border-white/40 px-4 py-2 backdrop-blur-sm">
                      View Details
                    </span>
                  </div>

                  {/* Accent line bottom */}
                  <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#a3c59a] transition-all duration-500 group-hover:w-full" />
                </div>

                {/* Text */}
                <div className="flex flex-col p-3 sm:p-7 items-center text-center flex-grow group-hover:bg-zinc-900/60 transition-colors duration-300">
                  <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-zinc-300 group-hover:text-[#a3c59a] transition-colors leading-snug">
                    {solution.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-500 group-hover:text-zinc-300 transition-colors">
                    {solution.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA below grid */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 text-center"
          >
            <a
              href="#contact"
              className="inline-block border border-[#a3c59a] text-[#a3c59a] px-10 py-4 text-base font-bold uppercase tracking-widest hover:bg-[#a3c59a] hover:text-black transition-all duration-300"
            >
              Request a Product Demo
            </a>
          </motion.div>
        </div>
      </section>

      {selected && (
        <ProductModal solution={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}
