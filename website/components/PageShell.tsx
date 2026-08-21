import type { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { site } from "@/content/site";

export default function PageShell({ eyebrow, title, intro, children, after }: { eyebrow: string; title: string; intro: string; children?: ReactNode; after?: ReactNode }) {
  return (
    <>
      <Navbar siteName={site.name} />
      <main id="main-content" className="min-h-screen overflow-hidden bg-[#040403] pb-24 text-white">
        <section className="relative isolate border-b border-white/[.07] px-4 pb-20 pt-36 sm:px-8 sm:pb-24 sm:pt-44 lg:px-12 lg:pb-28">
          <div aria-hidden="true" className="luxury-grain absolute inset-0 -z-10" />
          <div aria-hidden="true" className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_78%_22%,rgba(201,154,60,.11),transparent_22rem),linear-gradient(135deg,#050504,#080705_48%,#030303)]" />
          <div aria-hidden="true" className="absolute right-[-12rem] top-16 -z-10 h-[32rem] w-[32rem] rounded-full border border-[#c99a3c]/10 sm:h-[42rem] sm:w-[42rem]" />
          <header className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.56fr_1.44fr] lg:items-end lg:gap-20">
            <div>
              <p className="eyebrow flex items-center gap-3"><span className="h-px w-10 bg-[#c99a3c]/70" />{eyebrow}</p>
              <p className="mt-8 max-w-xs text-sm leading-7 text-white/38">Prime Presence Atelier™<br/>Durban · Worldwide remote delivery</p>
            </div>
            <div>
              <h1 className="max-w-5xl text-balance font-[family-name:var(--font-cormorant)] text-[clamp(4rem,8vw,7.7rem)] leading-[.82] tracking-[-.05em] text-[#f7f0e6]">{title}</h1>
              <p className="mt-8 max-w-3xl text-lg leading-9 text-[#c8c0b4]">{intro}</p>
            </div>
          </header>
        </section>

        {children && (
          <section className="editorial-section px-4 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
            <div className="mx-auto max-w-7xl">{children}</div>
          </section>
        )}
        {after}
      </main>
      <Footer />
    </>
  );
}
