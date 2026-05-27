import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { Process } from "@/components/Process";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <PortfolioGrid />
      <Process />
      <About />
      <Contact />
    </>
  );
}
