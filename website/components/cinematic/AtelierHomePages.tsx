"use client";

import Link from "next/link";
import { useReducedMotion } from "framer-motion";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const offers = [
  ["01", "Brand Identity", "Distinct visual systems for businesses that need to look established, coherent and recognisable."],
  ["02", "Digital Presence", "Premium websites and digital touchpoints designed around trust, clarity and conversion."],
  ["03", "Prime Presence Connect™", "A refined digital business card and mini-profile for a stronger professional handoff."],
] as const;

const steps = [
  ["01", "Discover", "Business, audience, objective and the impression the brand needs to create."],
  ["02", "Direct", "A focused visual direction establishes tone, hierarchy, proof and consistency."],
  ["03", "Craft", "Identity, interface and launch assets are produced as one considered system."],
  ["04", "Refine", "Desktop, mobile and real touchpoints are checked before release."],
] as const;

export default function AtelierHomePages({ location }: { location: string }) {
  const reducedMotion = useReducedMotion();

  return (
    <main id="main-content" className="bg-[#050504] text-[#f1ede4]">
      <section className="relative overflow-hidden border-b border-white/[.07] md:min-h-[100svh]">
        <div className="relative h-[46svh] min-h-[340px] md:absolute md:inset-0 md:h-auto md:min-h-0">
          <video className="absolute inset-0 h-full w-full object-cover object-[61%_center] md:object-center" autoPlay={!reducedMotion} muted loop playsInline preload="metadata" poster={`${basePath}/media/ppa-studio-scene.webp`} aria-hidden="true">
            <source src={`${basePath}/media/ppa-hero-film.mp4`} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,3,2,.02),rgba(3,3,2,.08)_68%,#050504)] md:bg-[linear-gradient(90deg,rgba(3,3,2,.92),rgba(3,3,2,.68)_43%,rgba(3,3,2,.12)_78%),linear-gradient(0deg,rgba(3,3,2,.62),transparent_55%)]" />
        </div>
        <div className="relative mx-auto max-w-[1540px] px-6 pb-10 pt-8 sm:px-10 md:flex md:min-h-[100svh] md:items-center md:px-12 md:pb-16 md:pt-28 lg:px-16">
          <div className="max-w-[760px]">
            <p className="mb-3 text-[8px] font-semibold uppercase tracking-[.28em] text-[#d7ac54] md:hidden">Prime Presence Atelier™</p>
            <img src={`${basePath}/media/prime-presence-logo.jpg`} alt="Prime Presence Atelier" className="mb-5 hidden h-auto w-[260px] object-contain md:block" />
            <h1 className="font-[family-name:var(--font-cormorant)] text-[clamp(3.35rem,15vw,5.4rem)] font-medium leading-[.82] tracking-[-.05em] text-[#f6f0e6] md:text-[clamp(5.7rem,7.8vw,8.7rem)]">We craft<span className="block bg-gradient-to-r from-[#f1d27a] via-[#c68b2b] to-[#e1b45a] bg-clip-text italic text-transparent">presence.</span></h1>
            <p className="mt-4 text-[8px] font-semibold uppercase tracking-[.23em] text-white/50 md:text-[10px]">Designed to Be Remembered.™</p>
            <p className="mt-4 max-w-[34rem] text-[13px] leading-6 text-[#ded7ca] md:mt-6 md:text-base md:leading-8">Identity, digital presence and launch experiences for businesses that refuse to blend in.</p>
            <div className="mt-6 grid gap-3 sm:flex"><Link href="/contact" className="inline-flex min-h-12 items-center justify-between border border-[#c99a3c]/85 bg-black/30 px-5 text-[9px] font-semibold uppercase tracking-[.16em] text-[#e9c56e] sm:min-w-56">Start a Project <span>→</span></Link><Link href="/work" className="inline-flex min-h-12 items-center justify-center border border-white/18 bg-black/15 px-5 text-[9px] font-semibold uppercase tracking-[.14em] text-white/72">Explore Work</Link></div>
            <p className="mt-5 text-[7px] font-semibold uppercase tracking-[.18em] text-white/30 md:text-[9px]">{location} · Worldwide remote delivery</p>
          </div>
        </div>
      </section>

      <section className="border-b border-white/[.07] px-6 py-16 sm:px-10 sm:py-24 lg:px-16 lg:py-32">
        <div className="mx-auto grid max-w-[1380px] gap-10 lg:grid-cols-[.78fr_1.22fr] lg:gap-20">
          <div className="relative min-h-[300px] overflow-hidden border border-white/[.08] sm:min-h-[420px]"><img src={`${basePath}/media/ppa-studio-scene.webp`} alt="Prime Presence Atelier studio" className="absolute inset-0 h-full w-full object-cover"/><div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/10"/></div>
          <div className="self-center"><p className="text-[9px] font-semibold uppercase tracking-[.30em] text-[#d2a54b]">The Atelier</p><h2 className="mt-5 font-[family-name:var(--font-cormorant)] text-[clamp(2.8rem,6vw,5.4rem)] leading-[.92] tracking-[-.04em]">A first impression should feel <span className="italic text-[#d6aa51]">intentional.</span></h2><p className="mt-7 max-w-3xl text-base leading-8 text-[#bbb4a8]">Prime Presence Atelier shapes the visible layer of a business around credibility, distinction and confidence. The goal is not decoration. It is a presence people recognise, understand and remember.</p><Link href="/about" className="mt-9 inline-flex items-center gap-6 border-b border-[#c99a3c]/55 pb-2 text-[9px] font-semibold uppercase tracking-[.20em] text-[#dbb45f]">About the Atelier <span>→</span></Link></div>
        </div>
      </section>

      <section className="border-b border-white/[.07] px-6 py-16 sm:px-10 sm:py-24 lg:px-16 lg:py-28"><div className="mx-auto max-w-[1380px]"><div className="grid gap-5 border-b border-white/[.10] pb-8 lg:grid-cols-[.72fr_1.28fr]"><p className="text-[9px] font-semibold uppercase tracking-[.30em] text-[#d2a54b]">What we create</p><h2 className="font-[family-name:var(--font-cormorant)] text-[clamp(2.7rem,5vw,4.8rem)] leading-[.94]">Focused services. One visual standard.</h2></div><div>{offers.map(([number,title,body]) => <article key={number} className="grid gap-3 border-b border-white/[.08] py-7 sm:grid-cols-[70px_1fr] lg:grid-cols-[100px_.8fr_1.2fr] lg:items-start"><p className="text-[9px] font-semibold tracking-[.22em] text-[#c99a3c]">{number}</p><h3 className="font-[family-name:var(--font-cormorant)] text-3xl text-[#f3eee5] sm:text-4xl">{title}</h3><p className="max-w-2xl text-sm leading-7 text-white/48">{body}</p></article>)}</div><Link href="/services" className="mt-9 inline-flex items-center gap-6 border border-[#c99a3c]/55 px-6 py-4 text-[9px] font-semibold uppercase tracking-[.19em] text-[#dbb45f]">Explore Services <span>→</span></Link></div></section>

      <section className="overflow-hidden border-b border-white/[.07] bg-[#080706] px-6 py-16 sm:px-10 sm:py-24 lg:px-16 lg:py-32"><div className="mx-auto grid max-w-[1380px] items-center gap-12 lg:grid-cols-2"><div><p className="text-[9px] font-semibold uppercase tracking-[.30em] text-[#d2a54b]">Prime Presence Connect™</p><h2 className="mt-5 font-[family-name:var(--font-cormorant)] text-[clamp(3rem,6vw,5.8rem)] leading-[.88]">Your presence,<span className="block italic text-[#d7ac54]">carried digitally.</span></h2><p className="mt-7 max-w-2xl text-base leading-8 text-[#bbb4a8]">A polished digital business-card and mini-profile system built around fast contact actions, QR access and a professional mobile-first experience.</p><Link href="/connect" className="mt-9 inline-flex items-center gap-6 border-b border-[#c99a3c]/55 pb-2 text-[9px] font-semibold uppercase tracking-[.20em] text-[#dbb45f]">Explore Connect <span>→</span></Link></div><div className="mx-auto w-full max-w-[360px] border border-[#c99a3c]/25 bg-[#050504] p-6"><div className="aspect-[9/16] rounded-[34px] border border-white/15 bg-[radial-gradient(circle_at_50%_10%,rgba(201,154,60,.16),transparent_35%),#090807] p-6"><img src={`${basePath}/media/prime-presence-logo.jpg`} alt="Prime Presence Atelier" className="mx-auto h-auto w-[130px] object-contain"/><p className="mt-8 text-center font-[family-name:var(--font-cormorant)] text-2xl">Prime Presence Connect™</p></div></div></div></section>

      <section className="border-b border-white/[.07] px-6 py-16 sm:px-10 sm:py-24 lg:px-16 lg:py-28"><div className="mx-auto max-w-[1380px]"><div className="grid gap-5 lg:grid-cols-[.72fr_1.28fr]"><p className="text-[9px] font-semibold uppercase tracking-[.30em] text-[#d2a54b]">Process</p><h2 className="font-[family-name:var(--font-cormorant)] text-[clamp(2.7rem,5vw,4.8rem)] leading-[.94]">Clear enough to move quickly. Disciplined enough to protect the result.</h2></div><div className="mt-10 grid gap-px bg-white/[.08] sm:grid-cols-2 lg:grid-cols-4">{steps.map(([number,title,body]) => <article key={number} className="min-h-[210px] bg-[#050504] p-6"><p className="text-[9px] font-semibold tracking-[.22em] text-[#c99a3c]">{number}</p><h3 className="mt-7 font-[family-name:var(--font-cormorant)] text-3xl">{title}</h3><p className="mt-4 text-sm leading-7 text-white/42">{body}</p></article>)}</div></div></section>

      <section className="px-6 py-20 text-center sm:px-10 sm:py-28 lg:px-16 lg:py-36"><div className="mx-auto max-w-4xl"><p className="text-[9px] font-semibold uppercase tracking-[.30em] text-[#d2a54b]">Start something worth remembering</p><h2 className="mt-6 font-[family-name:var(--font-cormorant)] text-[clamp(3rem,7vw,6.3rem)] leading-[.88]">Your presence should arrive <span className="italic text-[#d6aa51]">before you do.</span></h2><Link href="/contact" className="mt-10 inline-flex min-h-14 items-center border border-[#c99a3c]/70 px-8 text-[9px] font-semibold uppercase tracking-[.20em] text-[#dfb861]">Start a Project →</Link></div></section>
    </main>
  );
}
