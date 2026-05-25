import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsapp-button";
import DevProtection from "@/components/dev-protection";

export const metadata: Metadata = {
  title: "LUKK",
  description: "Lukk Automation Solutions delivers custom AMR, AGV, FMR, AI Vision and full-stack robotics platforms across Singapore, Malaysia, India & Indonesia. Deployed in weeks, not months.",
  keywords: "robotics automation Singapore, AMR AGV FMR, AI vision systems, warehouse automation Asia, industrial robots",
  generator: "ARQX-Atlas Systems",
  other: {
    "x-built-by": "ARQX-Atlas Systems",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="flex min-h-screen flex-col bg-zinc-950 text-white">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton />
        <DevProtection />
      </body>
    </html>
  );
}
