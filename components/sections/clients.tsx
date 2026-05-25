"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const partners = [
  { name: "AITEN", img: "/partners/aiten.jpg" },
  { name: "REEMAN", img: "/partners/reeman.png" },
  { name: "Keyence", img: "/partners/keyence.png" },
  { name: "MECHONYX", img: "/partners/mechonyx.jpg" },
  { name: "ZIKOO", img: "/partners/zikoo.jpg" },
];

const clients = [
  { img: "/clients/client1.jpg", alt: "Client 1" },
  { img: "/clients/client2.jpg", alt: "Client 2" },
  { img: "/clients/client3.jpg", alt: "Client 3" },
  { img: "/clients/kingshead.png", alt: "KingsHead" },
];

function LogoCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center border border-zinc-200 bg-white px-3 sm:px-8 py-3 sm:py-5 hover:border-[#a3c59a] transition-all duration-300 h-16 sm:h-24">
      {children}
    </div>
  );
}

export default function Clients() {
  return (
    <section className="bg-zinc-900/50 border-t border-b border-zinc-800 py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* Technology Partners */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16"
        >
          <p className="text-center text-sm font-bold uppercase tracking-[0.3em] text-zinc-400 mb-8 sm:mb-12">
            Our Technology Partners &amp; Platforms
          </p>

          {/* Mobile: row of 3, then centered row of 2 */}
          <div className="sm:hidden space-y-3">
            <div className="flex justify-center gap-3">
              {partners.slice(0, 3).map((p, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="flex-1 max-w-[108px]">
                  <LogoCard>
                    <Image src={p.img} alt={p.name} width={100} height={50} className="object-contain max-h-9 w-auto" />
                  </LogoCard>
                </motion.div>
              ))}
            </div>
            <div className="flex justify-center gap-3">
              {partners.slice(3).map((p, i) => (
                <motion.div key={i + 3} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i + 3) * 0.08 }} className="w-[108px]">
                  <LogoCard>
                    <Image src={p.img} alt={p.name} width={100} height={50} className="object-contain max-h-9 w-auto" />
                  </LogoCard>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Desktop: flex wrap centered */}
          <div className="hidden sm:flex flex-wrap items-center justify-center gap-6">
            {partners.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                style={{ minWidth: 180, height: 96 }}
              >
                <LogoCard>
                  <Image src={p.img} alt={p.name} width={150} height={60} className="object-contain max-h-14 w-auto" />
                </LogoCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Clients */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="border-t border-zinc-800 pt-12 sm:pt-16"
        >
          <p className="text-center text-sm font-bold uppercase tracking-[0.3em] text-zinc-400 mb-8 sm:mb-12">
            Customers We Serve
          </p>

          {/* Mobile: 2-col grid → 2+2 */}
          <div className="sm:hidden grid grid-cols-2 gap-3 max-w-xs mx-auto">
            {clients.map((c, i) => (
              <LogoCard key={i}>
                <Image src={c.img} alt={c.alt} width={100} height={50} className="object-contain max-h-9 w-auto" />
              </LogoCard>
            ))}
          </div>

          {/* Desktop: flex wrap centered */}
          <div className="hidden sm:flex flex-wrap items-center justify-center gap-6">
            {clients.map((c, i) => (
              <div key={i} style={{ minWidth: 180, height: 96 }}>
                <LogoCard>
                  <Image src={c.img} alt={c.alt} width={150} height={60} className="object-contain max-h-14 w-auto" />
                </LogoCard>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
