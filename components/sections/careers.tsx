"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Clock, ArrowRight, Briefcase } from "lucide-react";

const openings = [
  {
    title: "Robotics Systems Engineer",
    location: "Singapore",
    type: "Full-time",
    dept: "Engineering",
    description: "Design, integrate, and commission AMR, AGV, and FMR systems for industrial clients across Southeast Asia. You will work directly on-site with clients from initial assessment through go-live.",
    requirements: ["Degree in Mechatronics, Electrical, or Robotics Engineering", "Experience with ROS, SLAM, or autonomous navigation", "Able to travel across SG, MY, IN, ID", "Strong client-facing communication skills"],
    email: "hello@lukkautomations.com",
  },
  {
    title: "AI & Computer Vision Engineer",
    location: "India — Chennai",
    type: "Full-time",
    dept: "AI & Software",
    description: "Build and optimise deep learning models for real-time defect detection, OCR, and object recognition deployed on our edge AI hardware. Your models will run on production lines and warehouse systems across Asia.",
    requirements: ["Strong Python and PyTorch / TensorFlow experience", "Experience deploying models on edge hardware (NVIDIA Jetson, etc.)", "Background in object detection, segmentation, or OCR", "Knowledge of industrial camera and vision systems a plus"],
    email: "hello@lukkautomations.com",
  },
  {
    title: "Sales Engineer — Southeast Asia",
    location: "Singapore / Remote",
    type: "Full-time",
    dept: "Commercial",
    description: "Drive new business across the logistics, manufacturing, and pharma sectors in Singapore, Malaysia, and Indonesia. You will work with our engineering team to create compelling, technically-accurate proposals.",
    requirements: ["3+ years in B2B technical sales (automation, robotics, or industrial equipment preferred)", "Strong network in logistics, manufacturing, or pharma sectors", "Able to travel across the region", "Fluency in English; Malay or Bahasa a strong plus"],
    email: "hello@lukkautomations.com",
  },
  {
    title: "Project Manager — Automation Deployments",
    location: "Singapore",
    type: "Full-time",
    dept: "Operations",
    description: "Lead end-to-end delivery of automation projects from kick-off through commissioning. You will coordinate cross-functional teams, manage client relationships, and ensure every deployment runs on time and on budget.",
    requirements: ["PMP or Prince2 certification preferred", "Experience in industrial or tech project delivery", "Excellent stakeholder management skills", "Familiarity with automation systems or warehousing operations"],
    email: "hello@lukkautomations.com",
  },
];

const perks = [
  { label: "Work on real robots", desc: "Every project ships physical systems to real clients — your work has visible, immediate impact." },
  { label: "Multi-country exposure", desc: "Travel across Singapore, Malaysia, India, and Indonesia on live deployments." },
  { label: "Fast-growing team", desc: "Small, senior team — you'll have ownership from day one, not just execute tickets." },
  { label: "Engineering-first culture", desc: "Founded and led by engineers. Technical excellence is respected and rewarded." },
];

type Opening = typeof openings[0];

function JobModal({ job, onClose }: { job: Opening; onClose: () => void }) {
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
          className="relative z-10 w-full max-w-2xl bg-zinc-900 border border-zinc-700 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 flex h-9 w-9 items-center justify-center bg-zinc-800 border border-zinc-700 text-zinc-400 hover:bg-[#a3c59a] hover:text-black hover:border-[#a3c59a] transition-all duration-200"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="p-8">
            {/* Header */}
            <div className="mb-6 pr-8">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#a3c59a] border border-[#a3c59a]/40 px-3 py-1">{job.dept}</span>
                <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 border border-zinc-700 px-3 py-1">{job.type}</span>
              </div>
              <h2 className="text-2xl font-black text-white mb-2">{job.title}</h2>
              <div className="flex items-center gap-4 text-sm text-zinc-400">
                <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" />{job.location}</span>
                <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{job.type}</span>
              </div>
            </div>

            {/* Description */}
            <div className="mb-6">
              <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-3">About the Role</p>
              <p className="text-base leading-8 text-zinc-300">{job.description}</p>
            </div>

            {/* Requirements */}
            <div className="mb-8">
              <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-3">What We&apos;re Looking For</p>
              <div className="space-y-2.5">
                {job.requirements.map((r, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <ArrowRight className="w-3.5 h-3.5 text-[#a3c59a] mt-1 shrink-0" />
                    <p className="text-base text-zinc-300 leading-relaxed">{r}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Apply */}
            <a
              href={`mailto:${job.email}?subject=Application: ${encodeURIComponent(job.title)}`}
              className="inline-flex items-center gap-2 bg-[#a3c59a] text-black text-sm font-black uppercase tracking-widest px-8 py-4 hover:bg-white transition-colors"
            >
              Apply Now <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Careers() {
  const [selected, setSelected] = useState<Opening | null>(null);

  return (
    <>
      <section id="careers" className="bg-zinc-950 border-t border-zinc-900 py-24 lg:py-32 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">

          {/* Header */}
          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#a3c59a] mb-4">Join the Team</p>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-tight mb-6">
                Build the future<br />
                <span className="text-[#a3c59a]">of robotics.</span>
              </h2>
              <p className="text-base leading-8 text-zinc-400">
                Join a team of engineers, innovators, and problem-solvers creating intelligent robotics and AI systems that transform how industries operate across Southeast Asia.
              </p>
            </motion.div>

            {/* Perks grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="grid grid-cols-2 gap-3"
            >
              {perks.map((p, i) => (
                <div key={i} className="border border-zinc-800 bg-zinc-900/40 p-5 hover:border-[#a3c59a]/40 transition-colors">
                  <p className="text-sm font-bold text-white mb-1">{p.label}</p>
                  <p className="text-sm text-zinc-500 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Job openings */}
          <div className="mb-8">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-400 mb-8">Open Positions</p>
            <div className="divide-y divide-zinc-800 border-t border-b border-zinc-800">
              {openings.map((job, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => setSelected(job)}
                  className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-6 cursor-pointer hover:bg-zinc-900/30 px-2 -mx-2 transition-colors"
                >
                  <div className="flex items-start sm:items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-zinc-900 border border-zinc-800 text-zinc-500 group-hover:border-[#a3c59a] group-hover:text-[#a3c59a] transition-all">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-[#a3c59a] transition-colors">{job.title}</h3>
                      <div className="flex flex-wrap items-center gap-3 mt-1">
                        <span className="flex items-center gap-1 text-sm text-zinc-500"><MapPin className="w-3 h-3" />{job.location}</span>
                        <span className="text-sm text-zinc-600">·</span>
                        <span className="text-sm text-zinc-500">{job.dept}</span>
                        <span className="text-sm text-zinc-600">·</span>
                        <span className="text-sm text-zinc-500">{job.type}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 shrink-0 ml-14 sm:ml-0">
                    <span className="text-sm font-bold text-[#a3c59a] opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest">
                      View Role
                    </span>
                    <ArrowRight className="w-4 h-4 text-zinc-600 group-hover:text-[#a3c59a] transition-colors" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Spontaneous application */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-dashed border-zinc-700 p-8 text-center hover:border-[#a3c59a]/50 transition-colors group"
          >
            <p className="text-base font-bold text-white mb-2">Don&apos;t see your role?</p>
            <p className="text-base text-zinc-500 mb-6 max-w-md mx-auto">
              We&apos;re always interested in exceptional engineers and business talent. Send us your CV and tell us how you&apos;d fit into our mission.
            </p>
            <a
              href="mailto:hello@lukkautomations.com?subject=Spontaneous Application"
              className="inline-flex items-center gap-2 border border-[#a3c59a] text-[#a3c59a] text-sm font-bold uppercase tracking-widest px-8 py-3.5 hover:bg-[#a3c59a] hover:text-black transition-all"
            >
              Send Your CV <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

        </div>
      </section>

      {selected && <JobModal job={selected} onClose={() => setSelected(null)} />}
    </>
  );
}
