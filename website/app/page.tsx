import Navbar from "../components/Navbar";
import AtelierHomeV2 from "../components/cinematic/AtelierHomeV2";
import Footer from "../components/Footer";
import { site } from "@/content/site";

export default function Home() {
  return (
    <>
      <Navbar siteName={site.name} />
      <AtelierHomeV2 location={site.location} />
      <Footer />
    </>
  );
}
