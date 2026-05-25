"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-zinc-950 py-16 sm:py-24 lg:py-32 border-t border-zinc-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#a3c59a] mb-4">Get In Touch</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Ready to Automate?<br />
              <span className="text-[#a3c59a]">Let&apos;s Talk.</span>
            </h2>
            <p className="text-zinc-400 text-base leading-8 mb-10 max-w-md">
              Whether you need a single robot or a full-facility automation system, our engineers are ready to assess your needs and build a tailored solution — deployed in weeks.
            </p>

            <div className="space-y-5">
              {[
                { icon: <Mail className="w-4 h-4" />, label: "Email", value: "hello@lukkautomations.com" },
                { icon: <Phone className="w-4 h-4" />, label: "Phone (SG)", value: "+65 6298 5647" },
                { icon: <MessageCircle className="w-4 h-4" />, label: "WhatsApp", value: "+65 8546 0045", href: "https://wa.me/6585460045" },
                { icon: <Phone className="w-4 h-4" />, label: "Phone (IN)", value: "+91 9994312112" },
                { icon: <MapPin className="w-4 h-4" />, label: "HQ", value: "2 Yishun Industrial Street 1, Northpoint Biz Hub, #04-29, Singapore 768159" },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center bg-zinc-900 border border-zinc-800 text-[#a3c59a]">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">{item.label}</p>
                    <p className="text-base text-zinc-300 mt-0.5">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="border border-zinc-800 bg-zinc-900/40 p-5 sm:p-8 lg:p-10"
          >
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Request a Demo</h3>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full bg-zinc-950 border border-zinc-700 text-white text-sm px-4 py-3 focus:outline-none focus:border-[#a3c59a] transition-colors placeholder:text-zinc-600"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full bg-zinc-950 border border-zinc-700 text-white text-sm px-4 py-3 focus:outline-none focus:border-[#a3c59a] transition-colors placeholder:text-zinc-600"
                    placeholder="Smith"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-2">Company</label>
                <input
                  type="text"
                  className="w-full bg-zinc-950 border border-zinc-700 text-white text-sm px-4 py-3 focus:outline-none focus:border-[#a3c59a] transition-colors placeholder:text-zinc-600"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full bg-zinc-950 border border-zinc-700 text-white text-sm px-4 py-3 focus:outline-none focus:border-[#a3c59a] transition-colors placeholder:text-zinc-600"
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-2">Industry</label>
                <select className="w-full bg-zinc-950 border border-zinc-700 text-zinc-300 text-sm px-4 py-3 focus:outline-none focus:border-[#a3c59a] transition-colors">
                  <option value="">Select your industry</option>
                  <option>Warehousing & Logistics</option>
                  <option>Manufacturing & Assembly</option>
                  <option>E-Commerce Fulfilment</option>
                  <option>Pharma & Healthcare</option>
                  <option>Automotive</option>
                  <option>Food & Beverage</option>
                  <option>Semiconductor / Clean Room</option>
                  <option>Energy & Construction</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full bg-zinc-950 border border-zinc-700 text-white text-sm px-4 py-3 focus:outline-none focus:border-[#a3c59a] transition-colors placeholder:text-zinc-600 resize-none"
                  placeholder="Tell us about your automation challenge..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#a3c59a] text-black font-bold text-sm uppercase tracking-widest py-4 hover:bg-white transition-colors duration-300 active:scale-95"
              >
                Send Request
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
