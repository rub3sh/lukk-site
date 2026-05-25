import Hero from "@/components/sections/Hero";
import Clients from "@/components/sections/clients";
import Pillars from "@/components/sections/pillars";
import Features from "@/components/sections/features";
import Solutions from "@/components/sections/solutions";
import Industries from "@/components/sections/industries";
import Stats from "@/components/sections/stats";
import BuildMyBot from "@/components/sections/build-my-bot";
import About from "@/components/sections/about";
import Careers from "@/components/sections/careers";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Clients />
      <Pillars />
      <Stats />
      <Features />
      <Solutions />
      <Industries />
      <BuildMyBot />
      <About />
      <Careers />
      <Contact />
    </>
  );
}
