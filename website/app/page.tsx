import Navbar from "../components/Navbar";
import AtelierHomePages from "../components/cinematic/AtelierHomePages";
import Footer from "../components/Footer";
import { site } from "@/content/site";

export default function Home() {
  return (
    <>
      <Navbar siteName={site.name} />
      <AtelierHomePages location={site.location} />
      <Footer />
    </>
  );
}
