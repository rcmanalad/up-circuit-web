import Hero from "@/components/hero";
import About from "@/components/about";
import WhyPartner from "@/components/why-partner";
import FlagshipProjects from "@/components/flagship-projects";
import Legacy from "@/components/legacy";
import SponsorshipTiers from "@/components/sponsorship-tiers";
import Contact from "@/components/contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <WhyPartner />
      <FlagshipProjects />
      <Legacy />
      <SponsorshipTiers />
      <Contact />
    </>
  );
}
