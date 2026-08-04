import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import StoryPanel from "../components/StoryPanel";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Process from "../components/Process";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import BrandRevealPanel from "../components/cinematic/BrandRevealPanel";
import WebsiteShowcase from "../components/cinematic/WebsiteShowcase";
import TrustPrinciples from "../components/cinematic/TrustPrinciples";
import PremiumCTA from "../components/cinematic/PremiumCTA";
import SectionDivider from "../components/cinematic/SectionDivider";
import { contactDetails, site } from "@/content/site";

export default function Home() {
  return (
    <>
      <Navbar siteName={site.name} />
      <main id="main-content" className="overflow-hidden bg-[#050505] text-white">
        <Hero location={site.location} />
        <StoryPanel />
        <SectionDivider />
        <Services />
        <BrandRevealPanel />
        <Portfolio />
        <WebsiteShowcase />
        <Process />
        <TrustPrinciples />
        <FAQ />
        <PremiumCTA />
        <Contact contact={contactDetails} />
      </main>
      <Footer />
    </>
  );
}
