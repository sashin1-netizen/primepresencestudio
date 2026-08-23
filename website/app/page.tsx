import Navbar from "../components/Navbar";
import PositioningHome from "../components/cinematic/PositioningHome";
import Footer from "../components/Footer";
import { site } from "@/content/site";

export default function Home() {
  return (
    <>
      <Navbar siteName={site.name} />
      <PositioningHome location={site.location} />
      <Footer />
    </>
  );
}
