"use client";

import Link from "next/link";
import { useReducedMotion } from "framer-motion";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const offers = [
  ["01", "Brand Identity", "Distinct visual systems built to make a business feel established, coherent and recognisable."],
  ["02", "Digital Presence", "Premium websites and digital touchpoints shaped around trust, clarity and conversion."],
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
    <main id="main-content" className="bg-[#050504] text-[#f3eee5]">
      <section className="relative min-h-[100svh] overflow-hidden border-b border-white/[.07]">
        <video className="absolute inset-0 h-full w-full object-cover object-[62%_center] sm:object-center" autoPlay={!reducedMotion} muted loop playsInline preload="auto" aria-hidden="true">
          <source src={`${basePath}/media/ppa-hero-film.mp4`} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,3,2,.08)_0%,rgba(3,3,2,.10)_28%,rgba(3,3,2,.42)_56%,rgba(3,3,2,.90)_83%,#050504_100%)] md:bg-[linear-gradient(90deg,rgba(3,3,2,.94)_0%,rgba(3,3,2,.72)_42%,rgba(3,3,2,.18)_78%,rgba(3,3,2,.05)_100%),linear-gradient(0deg,rgba(3,3,2,.64)_0%,transparent_55%)]" />
        <div className="relative mx-auto flex min-h-[100svh] max-w-[1540px] items-end px-6 pb-8 pt-24 sm:px-10 sm:pb-12 md:items-center md:px-12 md:pb-16 md:pt-28 lg:px-16">
          <div className="max-w-[720px]">
            <div className="mb-4 flex items-center gap-3 text-[8px] font-semibold uppercase tracking-[.28em] text-[#d8ad55] sm:text-[10px]">
              <span className="h-px w-10 bg-[#c99a3c]/70" /> Prime Presence Atelier™
            </div>
            <h1 className="font-[family-name:var(--font-cormorant)] text-[clamp(3.6rem,15vw,5.5rem)] font-medium leading-[.82] tracking-[-.055em] text-[#f6f0e6] md:text-[clamp(5.8rem,7.7vw,8.6rem)]">
              We craft<span className="block bg-gradient-to-r from-[#f2d27c] via-[#c98d2d] to-[#e2b75d] bg-clip-text italic text-transparent">presence.</span>
            </h1>
            <p className="mt-4 text-[8px] font-semibold uppercase tracking-[.23em] text-white/55 sm:text-[10px]">Designed to Be Remembered.™</p>
            <p className="mt-4 max-w-[34rem] text-[13px] leading-6 text-[#ddd6cb] sm:text-base sm:leading-8">Identity, digital presence and launch experiences for businesses that refuse to blend in.</p>
            <div className="mt-6 flex gap-3">
              <Link href="/contact" className="inline-flex min-h-12 flex-1 items-center justify-between border border-[#c99a3c]/90 bg-black/35 px-5 text-[9px] font-semibold uppercase tracking-[.16em] text-[#e9c56e] backdrop-blur-sm sm:flex-none sm:min-w-56">Start a Project <span>→</span></Link>
              <Link href="/work" className="inline-flex min-h-12 flex-1 items-center justify-center border border-white/18 bg-black/20 px-4 text-[9px] font-semibold uppercase tracking-[.14em] text-white/72 backdrop-blur-sm sm:flex-none">Explore Work</Link>
            </div>
            <p className="mt-5 text-[7px] font-semibold uppercase tracking-[.18em] text-white/35 sm:text-[9px]">{location} · Worldwide remote delivery</p>
          </div>
        </div>
      </section>

      <section className="border-b border-white/[.07] px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36">
        <div className="mx-auto grid max-w-[1380px] gap-12 lg:grid-cols-[.62fr_1.38fr] lg:gap-24">
          <div><p className="text-[9px] font-semibold uppercase tracking-[.30em] text-[#d2a54b]">The Atelier</p><div className="mt-8 h-px w-full bg-gradient-to-r from-[#c99a3c]/55 to-transparent"/><p className="mt-6 max-w-sm text-sm leading-7 text-white/42">Founder-led by design. Technology accelerates the work; human judgement controls what reaches the client.</p></div>
          <div><h2 className="font-[family-name:var(--font-cormorant)] text-[clamp(3rem,6vw,5.6rem)] leading-[.90] tracking-[-.04em]">A first impression should feel <span className="italic text-[#d6aa51]">intentional.</span></h2><p className="mt-7 max-w-3xl text-base leading-8 text-[#bbb4a8]">Prime Presence Atelier shapes the visible layer of a business around credibility, distinction and confidence. The goal is not decoration. It is a presence people recognise, understand and remember.</p><Link href="/about" className="mt-9 inline-flex items-center gap-6 border-b border-[#c99a3c]/55 pb-2 text-[9px] font-semibold uppercase tracking-[.20em] text-[#dbb45f]">About the Atelier <span>→</span></Link></div>
        </div>
      </section>

      <section className="border-b border-white/[.07] px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-32"><div className="mx-auto max-w-[1380px]"><div className="grid gap-6 border-b border-white/[.10] pb-10 lg:grid-cols-[.62fr_1.38fr]"><p className="text-[9px] font-semibold uppercase tracking-[.30em] text-[#d2a54b]">What we create</p><h2 className="font-[family-name:var(--font-cormorant)] text-[clamp(2.8rem,5vw,4.9rem)] leading-[.92]">Focused services. One visual standard.</h2></div><div>{offers.map(([number,title,body]) => <article key={number} className="grid gap-4 border-b border-white/[.08] py-8 sm:grid-cols-[72px_1fr] lg:grid-cols-[100px_.8fr_1.2fr] lg:items-start lg:py-10"><p className="text-[9px] font-semibold tracking-[.22em] text-[#c99a3c]">{number}</p><h3 className="font-[family-name:var(--font-cormorant)] text-3xl text-[#f3eee5] sm:text-4xl">{title}</h3><p className="max-w-2xl text-sm leading-7 text-white/48 lg:pt-2">{body}</p></article>)}</div><Link href="/services" className="mt-10 inline-flex items-center gap-6 border border-[#c99a3c]/55 px-6 py-4 text-[9px] font-semibold uppercase tracking-[.19em] text-[#dbb45f]">Explore Services <span>→</span></Link></div></section>

      <section className="border-b border-white/[.07] bg-[#080706] px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36"><div className="mx-auto grid max-w-[1380px] items-center gap-14 lg:grid-cols-[1.05fr_.95fr] lg:gap-24"><div><p className="text-[9px] font-semibold uppercase tracking-[.30em] text-[#d2a54b]">Prime Presence Connect™</p><h2 className="mt-5 font-[family-name:var(--font-cormorant)] text-[clamp(3rem,6vw,5.8rem)] leading-[.88]">Your presence,<span className="block italic text-[#d7ac54]">carried digitally.</span></h2><p className="mt-7 max-w-2xl text-base leading-8 text-[#bbb4a8]">A polished digital business card and mini-profile built around fast contact actions, QR access and a professional mobile-first experience.</p><Link href="/connect" className="mt-9 inline-flex items-center gap-6 border-b border-[#c99a3c]/55 pb-2 text-[9px] font-semibold uppercase tracking-[.20em] text-[#dbb45f]">Explore Connect <span>→</span></Link></div><div className="mx-auto w-full max-w-[390px]"><div className="rounded-[42px] border border-[#c99a3c]/30 bg-[radial-gradient(circle_at_50%_0%,rgba(201,154,60,.17),transparent_34%),#090807] p-4 shadow-[0_45px_120px_rgba(0,0,0,.58)]"><div className="aspect-[9/16] rounded-[32px] border border-white/[.08] bg-[#060605] p-6"><p className="text-center text-[8px] font-semibold uppercase tracking-[.25em] text-[#d8ad55]">Prime Presence</p><p className="mt-4 text-center font-[family-name:var(--font-cormorant)] text-3xl">Connect™</p><div className="mt-10 space-y-3"><div className="h-12 border border-white/10 bg-white/[.025]"/><div className="h-12 border border-white/10 bg-white/[.025]"/><div className="h-12 border border-white/10 bg-white/[.025]"/></div><div className="mt-auto"/></div></div></div></div></section>

      <section className="border-b border-white/[.07] px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-32"><div className="mx-auto max-w-[1380px]"><div className="grid gap-6 lg:grid-cols-[.62fr_1.38fr]"><p className="text-[9px] font-semibold uppercase tracking-[.30em] text-[#d2a54b]">Process</p><h2 className="font-[family-name:var(--font-cormorant)] text-[clamp(2.8rem,5vw,4.9rem)] leading-[.92]">Clear enough to move quickly. Disciplined enough to protect the result.</h2></div><div className="mt-12 grid gap-px bg-white/[.08] sm:grid-cols-2 lg:grid-cols-4">{steps.map(([number,title,body]) => <article key={number} className="min-h-[220px] bg-[#050504] p-7"><p className="text-[9px] font-semibold tracking-[.22em] text-[#c99a3c]">{number}</p><h3 className="mt-8 font-[family-name:var(--font-cormorant)] text-3xl">{title}</h3><p className="mt-4 text-sm leading-7 text-white/42">{body}</p></article>)}</div></div></section>

      <section className="px-6 py-24 text-center sm:px-10 sm:py-32 lg:px-16 lg:py-40"><div className="mx-auto max-w-4xl"><p className="text-[9px] font-semibold uppercase tracking-[.30em] text-[#d2a54b]">Start something worth remembering</p><h2 className="mt-6 font-[family-name:var(--font-cormorant)] text-[clamp(3rem,7vw,6.3rem)] leading-[.88]">Your presence should arrive <span className="italic text-[#d6aa51]">before you do.</span></h2><p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-white/45">Tell us what you are building, changing or preparing to launch. We will tell you whether the Atelier is the right fit.</p><Link href="/contact" className="mt-10 inline-flex min-h-14 items-center border border-[#c99a3c]/70 px-8 text-[9px] font-semibold uppercase tracking-[.20em] text-[#dfb861]">Start a Project →</Link></div></section>
    </main>
  );
}
