import type { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { site } from "@/content/site";

export default function PageShell({ eyebrow, title, intro, children, after }: { eyebrow: string; title: string; intro: string; children?: ReactNode; after?: ReactNode }) {
  return (
    <>
      <Navbar siteName={site.name} />
      <main id="main-content" className="min-h-screen overflow-hidden bg-[#040403] pb-24 text-white">
        <section className="relative isolate border-b border-white/[.07] px-5 pb-16 pt-28 sm:px-8 sm:pb-24 sm:pt-40 lg:px-12 lg:pb-28">
          <div aria-hidden="true" className="luxury-grain absolute inset-0 -z-10" />
          <div aria-hidden="true" className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_78%_22%,rgba(201,154,60,.11),transparent_22rem),linear-gradient(135deg,#050504,#080705_48%,#030303)]" />
          <header className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[.56fr_1.44fr] lg:items-end lg:gap-20">
            <div><p className="eyebrow flex items-center gap-3"><span className="h-px w-8 bg-[#c99a3c]/70 sm:w-10" />{eyebrow}</p><p className="mt-6 max-w-xs text-sm leading-7 text-white/42">Prime Presence Atelier™<br/>Durban · Worldwide remote delivery</p></div>
            <div><h1 className="max-w-5xl text-balance font-[family-name:var(--font-cormorant)] text-[clamp(2.9rem,12vw,4.2rem)] leading-[.9] tracking-[-.035em] text-[#f7f0e6] sm:text-[clamp(4.2rem,7vw,7.2rem)] sm:leading-[.84]">{title}</h1><p className="mt-6 max-w-3xl text-base leading-8 text-[#c8c0b4] sm:mt-8 sm:text-lg sm:leading-9">{intro}</p></div>
          </header>
        </section>
        {children && <section className="editorial-section px-5 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-28"><div className="mx-auto max-w-7xl">{children}</div></section>}
        {after}
      </main>
      <Footer />
    </>
  );
}
