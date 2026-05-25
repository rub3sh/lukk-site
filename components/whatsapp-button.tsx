"use client";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
  return (
    <motion.a
      href={`https://wa.me/6585460045?text=${encodeURIComponent("Hi LUKK Automations, I'd like to enquire about your robotics & automation solutions.")}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, duration: 0.4, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-[#25D366]/30"
    >
      {/* Ping ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />

      {/* WhatsApp icon */}
      <svg viewBox="0 0 32 32" className="h-7 w-7 fill-white relative z-10" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 2C8.28 2 2 8.28 2 16c0 2.46.66 4.77 1.8 6.77L2 30l7.44-1.77A13.94 13.94 0 0016 30c7.72 0 14-6.28 14-14S23.72 2 16 2zm0 25.5a11.43 11.43 0 01-5.82-1.59l-.42-.25-4.4 1.05 1.08-4.3-.27-.44A11.44 11.44 0 014.5 16C4.5 9.6 9.6 4.5 16 4.5S27.5 9.6 27.5 16 22.4 27.5 16 27.5zm6.26-8.56c-.34-.17-2.03-1-2.34-1.12-.32-.11-.55-.17-.78.17-.23.34-.9 1.12-1.1 1.35-.2.23-.4.26-.75.09-.34-.17-1.45-.54-2.76-1.7-1.02-.92-1.7-2.04-1.9-2.39-.2-.34-.02-.53.15-.7.15-.15.34-.4.52-.6.17-.2.23-.34.34-.57.11-.23.06-.43-.03-.6-.09-.17-.78-1.87-1.07-2.57-.28-.67-.57-.58-.78-.59H9.9c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5s1.07 2.9 1.22 3.1c.15.2 2.12 3.22 5.13 4.52.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.17-1.43-.07-.13-.29-.2-.63-.37z" />
      </svg>
    </motion.a>
  );
}
