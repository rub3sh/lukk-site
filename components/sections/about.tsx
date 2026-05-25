"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const team = [
  { initials: "KU", name: "K. Udayakumar", role: "Founder & Chief Operating Officer", color: "bg-[#a3c59a] text-black", img: "/team/founder.jpg" },
  { initials: "AS", name: "Aravind Sethuraman", role: "Director & General Manager", color: "bg-zinc-700 text-white", img: "/team/director.jpg" },
  { initials: "HB", name: "Herman Bin Roseli", role: "Commercial & Business Development Manager", color: "bg-zinc-800 text-white", img: "/team/dev-manager.jpg" },
];

const offices = [
  { country: "Singapore", label: "HQ", detail: "2 Yishun Industrial Street 1, Northpoint Biz Hub, #04-29" },
  { country: "India — Chennai", label: "Regional", detail: "Canyon Workspace, #A4 Chandrasekaran Ave, Thoraipakkam" },
  { country: "Malaysia — Penang", label: "Operations", detail: "Southeast Asian project deployments" },
  { country: "Indonesia — Surabaya", label: "Operations", detail: "Regional project execution base" },
];

export default function About() {
  return (
    <section id="about" className="bg-zinc-950 py-16 sm:py-24 lg:py-32 border-t border-zinc-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20">
          {/* Left — Company story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#a3c59a] mb-4">
              Who We Are
            </p>
            <h2 className="text-3xl sm:text-5xl font-bold text-white leading-tight mb-6 sm:mb-8">
              An Engineering-First<br />
              <span className="text-[#a3c59a]">Robotics Company</span>
            </h2>

            <div className="space-y-4 sm:space-y-5 text-sm sm:text-base leading-7 sm:leading-8 text-zinc-400">
              <p>
                <strong className="text-white">Lukk Automation</strong> is a Singapore-headquartered robotics and AI engineering company founded in <strong className="text-white">2023</strong>, delivering intelligent automation solutions for industrial, institutional, and smart-infrastructure environments. With growing operations across Malaysia (Penang), Indonesia (Surabaya), and India (Chennai), we support customers across Southeast Asia with scalable and reliable automation systems.
              </p>
              <p>
                We design, build, and deploy <strong className="text-white">AI-driven robotics and automation platforms</strong> that improve operational efficiency, safety, and sustainability. Our core expertise spans autonomous mobile robots (AMRs/FMRs), AI vision systems, intralogistics automation, and custom industrial robotics solutions.
              </p>
              <p>
                Our solutions are engineered for real-world, <strong className="text-white">24/7 operations</strong> — from physical robot hardware to AI intelligence layers and central software platforms, with <strong className="text-white">local support in every country we operate</strong>.
              </p>
            </div>

            {/* Vision / Mission */}
            <div className="mt-10 space-y-4">
              <div className="border-l-2 border-[#a3c59a] pl-5">
                <p className="text-xs font-bold uppercase tracking-widest text-[#a3c59a] mb-1">Vision</p>
                <p className="text-white text-base font-medium">Make robotics accessible for every business in Asia.</p>
              </div>
              <div className="border-l-2 border-zinc-700 pl-5">
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-1">Mission</p>
                <p className="text-zinc-300 text-base">Build high-performance robots within weeks, not months — delivering fast, scalable solutions without the long lead times typical of enterprise robotics.</p>
              </div>
            </div>
          </motion.div>

          {/* Right — Team + Offices */}
          <div className="space-y-12">
            {/* Leadership */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <p className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-5">Leadership</p>
              <div className="space-y-4">
                {team.map((m, i) => (
                  <div key={i} className="flex items-center gap-5 border border-zinc-800 p-5 bg-zinc-900/40 group hover:border-[#a3c59a]/40 transition-colors">
                    <div className="relative h-20 w-20 shrink-0 overflow-hidden">
                      <Image
                        src={m.img}
                        alt={m.name}
                        fill
                        sizes="80px"
                        className="object-cover object-top"
                      />
                    </div>
                    <div>
                      <p className="text-base font-bold text-white">{m.name}</p>
                      <p className="text-sm text-zinc-400 mt-0.5 uppercase tracking-wider">{m.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Global Offices */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <p className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-5">Global Presence</p>
              <div className="grid grid-cols-2 gap-3">
                {offices.map((o, i) => (
                  <div key={i} className="border border-zinc-800 p-5 bg-zinc-900/30 hover:border-[#a3c59a]/40 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm font-bold text-white">{o.country}</p>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#a3c59a] border border-[#a3c59a]/40 px-2 py-0.5">
                        {o.label}
                      </span>
                    </div>
                    <p className="text-sm text-zinc-500 leading-snug">{o.detail}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
