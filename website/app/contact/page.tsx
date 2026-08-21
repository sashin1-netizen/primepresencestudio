import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { contactDetails, site } from "@/content/site";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = { title: "Start a Project", description: "Enquire about brand identity, logo design, brand reveal or premium website work with Prime Presence Atelier.", alternates: { canonical: "/contact" } };

export default function Page(){
  return <>
    <Navbar siteName={site.name}/>
    <main id="main-content" className="pt-20">
      <section className="px-4 pt-8 sm:px-8 sm:pt-12 lg:px-12">
        <div className="mx-auto grid max-w-[1380px] overflow-hidden border border-white/[.08] bg-[#070604] lg:grid-cols-[1.1fr_.9fr]">
          <div className="relative min-h-[360px] overflow-hidden sm:min-h-[460px] lg:min-h-[560px]">
            <Image src={`${basePath}/media/ppa-brand-identity-1.webp`} alt="Prime Presence Atelier premium black and gold identity collateral" fill priority sizes="(max-width:1024px) 100vw,55vw" className="object-cover object-center" />
            <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,.62),transparent_58%),linear-gradient(90deg,transparent_55%,rgba(7,6,4,.48))]" />
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-9 sm:left-9"><p className="text-[8px] font-bold uppercase tracking-[.22em] text-[#d6ad58]">Begin with context</p><p className="mt-3 max-w-lg font-[family-name:var(--font-cormorant)] text-3xl leading-[.95] text-[#f3ece1] sm:text-5xl">A strong project starts before the first design decision.</p></div>
          </div>
          <div className="flex items-center p-7 sm:p-10 lg:p-12">
            <div><p className="eyebrow">Project entry</p><h1 className="mt-5 max-w-[10ch] font-[family-name:var(--font-cormorant)] text-[clamp(3rem,6vw,5.4rem)] leading-[.88] tracking-[-.04em] text-[#f4ede2]">Tell us what needs to feel <span className="italic text-[#d5aa52]">different.</span></h1><p className="mt-6 max-w-xl text-[15px] leading-8 text-white/52">The form below is not a test and it does not require agency language. Give us the business context, what is changing and the impression you need to create.</p><div className="mt-8 grid grid-cols-3 gap-3 border-t border-white/[.08] pt-6">{[['01','Context'],['02','Fit'],['03','Scope']].map(([n,t])=><div key={n}><p className="text-[8px] font-bold tracking-[.18em] text-[#c99a3c]">{n}</p><p className="mt-2 font-[family-name:var(--font-cormorant)] text-xl text-[#eee6da] sm:text-2xl">{t}</p></div>)}</div></div>
          </div>
        </div>
      </section>
      <Contact contact={contactDetails} headingLevel="h2"/>
    </main>
    <Footer/>
  </>
}
