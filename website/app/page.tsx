import Navbar from "../components/Navbar";
import AtelierHome from "../components/cinematic/AtelierHome";
import Footer from "../components/Footer";
import { site } from "@/content/site";

export default function Home() {
  return (
    <>
      <Navbar siteName={site.name} />
      <AtelierHome location={site.location} />
      <Footer />
    </>
  );
}
