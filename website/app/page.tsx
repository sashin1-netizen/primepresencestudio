import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ExperienceRibbon from "../components/ExperienceRibbon";
import StoryPanel from "../components/StoryPanel";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Process from "../components/Process";
import Industries from "../components/Industries";
import Insights from "../components/Insights";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="overflow-hidden bg-[#050505] text-white">
        <Hero />
        <ExperienceRibbon />
        <StoryPanel />
        <Services />
        <Portfolio />
        <Process />
        <Industries />
        <Insights />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
