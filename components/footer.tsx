"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

function PrivacyModal({ onClose }: { onClose: () => void }) {
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
          className="relative z-10 w-full max-w-2xl bg-zinc-900 border border-zinc-700 shadow-2xl max-h-[85vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 flex h-9 w-9 items-center justify-center bg-zinc-800 border border-zinc-700 text-zinc-400 hover:bg-[#a3c59a] hover:text-black hover:border-[#a3c59a] transition-all duration-200"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="p-5 sm:p-8 pr-10 sm:pr-12">
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#a3c59a] mb-2">Legal</p>
            <h2 className="text-2xl font-black text-white mb-6">Privacy Policy</h2>

            <div className="space-y-6 text-sm leading-7 text-zinc-400">
              <div>
                <h3 className="text-base font-bold text-white mb-2">1. Who We Are</h3>
                <p>Lukk Automation Solutions Pte. Ltd. (&quot;LUKK&quot;, &quot;we&quot;, &quot;our&quot;) is a Singapore-registered company headquartered at 2 Yishun Industrial Street 1, Northpoint Biz Hub, #04-29, Singapore 768159. We operate this website at lukkautomations.com.</p>
              </div>

              <div>
                <h3 className="text-base font-bold text-white mb-2">2. Information We Collect</h3>
                <p>When you use our contact form or reach out to us, we may collect: your name, company name, email address, phone number, and the content of your enquiry. We do not collect payment information through this website.</p>
              </div>

              <div>
                <h3 className="text-base font-bold text-white mb-2">3. How We Use Your Information</h3>
                <p>We use the information you provide solely to: respond to your enquiry, assess your automation requirements, and follow up on project discussions. We do not sell, rent, or share your personal data with third parties for marketing purposes.</p>
              </div>

              <div>
                <h3 className="text-base font-bold text-white mb-2">4. Data Retention</h3>
                <p>We retain your enquiry data for up to 24 months, or until you request deletion. You may request access to, correction of, or deletion of your personal data at any time by contacting us at hello@lukkautomations.com.</p>
              </div>

              <div>
                <h3 className="text-base font-bold text-white mb-2">5. Cookies</h3>
                <p>This website uses minimal cookies required for basic functionality. We do not use tracking or advertising cookies. No third-party analytics platforms are used to track your individual behaviour on this site.</p>
              </div>

              <div>
                <h3 className="text-base font-bold text-white mb-2">6. Security</h3>
                <p>We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, loss, or disclosure.</p>
              </div>

              <div>
                <h3 className="text-base font-bold text-white mb-2">7. Your Rights</h3>
                <p>Under applicable data protection laws (including Singapore&apos;s PDPA), you have the right to access, correct, or withdraw your personal data. To exercise these rights, contact us at hello@lukkautomations.com.</p>
              </div>

              <div>
                <h3 className="text-base font-bold text-white mb-2">8. Contact</h3>
                <p>For any privacy-related questions, contact our data officer at <a href="mailto:hello@lukkautomations.com" className="text-[#a3c59a] hover:underline">hello@lukkautomations.com</a>.</p>
              </div>

              <p className="text-xs text-zinc-600 pt-4 border-t border-zinc-800">
                Last updated: January 2026. Lukk Automation Solutions Pte. Ltd.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Footer() {
  const [privacyOpen, setPrivacyOpen] = useState(false);

  const companyLinks = [
    { label: "About Us", href: "#about", modal: false },
    { label: "Industries", href: "#industries", modal: false },
    { label: "Careers", href: "#careers", modal: false },
    { label: "Contact", href: "#contact", modal: false },
    { label: "Privacy Policy", href: "#", modal: true },
  ];

  return (
    <>
      <footer className="bg-zinc-950 text-white border-t border-zinc-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-20">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">

            {/* Brand */}
            <div className="lg:col-span-1">
              <Image src="/logo.png" alt="LUKK Automations" width={180} height={28} loading="lazy" className="opacity-100" />
              <p className="mt-5 text-sm leading-7 text-zinc-400 max-w-xs">
                Engineered in Asia. Built for the world. Leading the transition to fully autonomous industrial environments through modular robotics.
              </p>
              <div className="mt-6 flex gap-3">
                <a
                  href="https://sg.linkedin.com/company/lukk-automation-solution"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center border border-zinc-700 text-zinc-500 hover:border-[#a3c59a] hover:text-[#a3c59a] transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                </a>
                <a
                  href="https://www.instagram.com/lukk_automation_solution?igsh=ZGZ3a2xsMjNmNWk0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center border border-zinc-700 text-zinc-500 hover:border-[#a3c59a] hover:text-[#a3c59a] transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                </a>
                <a
                  href="https://wa.me/6585460045"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center border border-zinc-700 text-zinc-500 hover:border-[#a3c59a] hover:text-[#a3c59a] transition-colors"
                  aria-label="WhatsApp"
                >
                  <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
                </a>
              </div>
            </div>

            {/* Products */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#a3c59a] mb-5">Products</h4>
              <ul className="space-y-2.5 text-sm text-zinc-400">
                {[
                  "AMR — Mobile Robots",
                  "AGV — Guided Vehicles",
                  "FMR — Forklift Robots",
                  "Digital Packing Station",
                  "Vision & AI Systems",
                  "Robotic Arm Integration",
                  "6-Way Shuttle System",
                  "Software Platform",
                ].map((item) => (
                  <li key={item}>
                    <Link href="#solutions" className="hover:text-[#a3c59a] transition-colors">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#a3c59a] mb-5">Company</h4>
              <ul className="space-y-2.5 text-sm text-zinc-400">
                {companyLinks.map((item) =>
                  item.modal ? (
                    <li key={item.label}>
                      <button
                        onClick={() => setPrivacyOpen(true)}
                        className="hover:text-[#a3c59a] transition-colors text-left"
                      >
                        {item.label}
                      </button>
                    </li>
                  ) : (
                    <li key={item.label}>
                      <Link href={item.href} className="hover:text-[#a3c59a] transition-colors">{item.label}</Link>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#a3c59a] mb-5">Contact</h4>
              <div className="space-y-3 text-sm text-zinc-400">
                <p>
                  <a href="mailto:hello@lukkautomations.com" className="hover:text-[#a3c59a] transition-colors">
                    hello@lukkautomations.com
                  </a>
                </p>
                <p>
                  <a href="tel:+6562985647" className="hover:text-[#a3c59a] transition-colors">+65 6298 5647 (SG)</a>
                </p>
                <p>
                  <a href="https://wa.me/6585460045" target="_blank" rel="noopener noreferrer" className="hover:text-[#a3c59a] transition-colors">
                    +65 8546 0045 (WhatsApp)
                  </a>
                </p>
                <p>
                  <a href="tel:+919994312112" className="hover:text-[#a3c59a] transition-colors">+91 9994312112 (India)</a>
                </p>
                <p className="leading-6 pt-2">
                  2 Yishun Industrial Street 1<br />
                  Northpoint Biz Hub, #04-29<br />
                  Singapore 768159
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-900 py-5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-zinc-600">
              © {new Date().getFullYear()} Lukk Automation Solutions Pte. Ltd. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <p className="text-xs text-zinc-700">
                Singapore · Malaysia · India · Indonesia
              </p>
              <span className="hidden sm:block h-3 w-px bg-zinc-800" />
              <p className="text-[10px] text-zinc-700 tracking-wider uppercase">
                Built by{" "}
                <span className="text-zinc-500 font-semibold tracking-widest">ARQX&#8209;Atlas Systems</span>
              </p>
            </div>
          </div>
        </div>
      </footer>

      {privacyOpen && <PrivacyModal onClose={() => setPrivacyOpen(false)} />}
    </>
  );
}
