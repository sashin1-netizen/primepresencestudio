import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import StoryPanel from "../components/StoryPanel";
import Services from "../components/Services";
import WebsiteShowcase from "../components/cinematic/WebsiteShowcase";
import Portfolio from "../components/Portfolio";
import Process from "../components/Process";
import PremiumCTA from "../components/cinematic/PremiumCTA";
import Footer from "../components/Footer";
import { site } from "@/content/site";
import { publishedMediaById } from "@/content/media";

export default function Home() {
  const heroMedia = publishedMediaById("home-hero");

  return (
    <>
      <Navbar siteName={site.name} />
      <main id="main-content" className="overflow-hidden bg-[#050505] text-white">
        <Hero
          location={site.location}
          media={heroMedia ? { src: heroMedia.src, alt: heroMedia.alt, decorative: heroMedia.decorative } : undefined}
        />
        <StoryPanel />
        <Services />
        <WebsiteShowcase />
        <Portfolio />
        <Process />
        <PremiumCTA />
      </main>
      <Footer />
    </>
  );
}
