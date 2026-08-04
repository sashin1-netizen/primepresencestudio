import type { Metadata } from "next"; import Navbar from "@/components/Navbar"; import Contact from "@/components/Contact"; import Footer from "@/components/Footer";
export const metadata: Metadata = { title: "Start a Project", description: "Enquire about brand identity, logo design, brand reveal or premium website work with Prime Presence.", alternates: { canonical: "/contact" } };
export default function Page(){ return <><Navbar/><main id="main-content" className="pt-20"><Contact/></main><Footer/></> }
