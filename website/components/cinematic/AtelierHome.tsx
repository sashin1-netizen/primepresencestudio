"use client";

import Link from "next/link";
import { useReducedMotion } from "framer-motion";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const services = [
  ["01", "Brand Identity", "Distinct visual systems built to make the business recognisable before a word is read."],
  ["02", "Digital Presence", "Premium websites and digital touchpoints shaped around trust, clarity and conversion."],
  ["03", "Prime Presence Connect™", "A refined digital business card designed to carry a professional presence anywhere."],
  ["04", "Launch Creative", "Focused launch assets that give a new offer, product or business a coherent first impression."],
  ["05", "Custom Creative", "Selected adjacent work scoped around a clear outcome and the right standard of finish."],
] as const;

const process = [
  ["01", "Discover", "We define the business, audience, objective and what the first impression needs to achieve."],
  ["02", "Direct", "A focused creative direction establishes hierarchy, tone, visual language and proof."],
  ["03", "Craft", "Identity, interface and launch assets are produced as one considered system."],
  ["04", "Refine", "Details are tested across desktop, mobile and real client touchpoints before release."],
] as const;

export default function AtelierHome({ location }: { location: string }) {
  const reducedMotion = useReducedMotion();
  return (
    <main id="main-content" className="bg-[#050504] text-[#f1ede4]">
      <section className="relative min-h-[100svh] overflow-hidden border-b border-white/[.07]">
        <video
          className="absolute inset-0 h-full w-full object-cover object-[62%_center] md:object-center"
          autoPlay={!reducedMotion}
          muted
          loop
          playsInline
          preload="auto"
          poster={`${basePath}/media/ppa-studio-scene.webp`}
          aria-hidden="true"
        >
          <source src={`${basePath}/media/ppa-hero-film.mp4`} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,3,2,.14)_0%,rgba(3,3,2,.08)_28%,rgba(3,3,2,.38)_56%,rgba(3,3,2,.92)_86%,#050504_100%)] md:bg-[linear-gradient(90deg,rgba(3,3,2,.92)_0%,rgba(3,3,2,.72)_42%,rgba(3,3,2,.20)_75%,rgba(3,3,2,.08)_100%),linear-gradient(0deg,rgba(3,3,2,.72)_0%,transparent_48%)]" />
        <div className="relative mx-auto flex min-h-[100svh] max-w-[1540px] items-end px-6 pb-9 pt-24 sm:px-10 sm:pb-14 lg:items-center lg:px-16 lg:pb-16 lg:pt-28">
          <div className="max-w-[760px]">
            <div className="mb-4 flex items-center gap-3 text-[8px] font-semibold uppercase tracking-[.28em] text-[#d7ae55] sm:text-[10px]">
              <span className="h-px w-8 bg-[#c99a3c]" /> Prime Presence Atelier™
            </div>
            <h1 className="font-[family-name:var(--font-cormorant)] text-[clamp(3.7rem,16vw,6rem)] font-medium leading-[.80] tracking-[-.05em] text-[#f6f0e6] lg:text-[clamp(5.7rem,7.8vw,8.7rem)]">
              We craft
              <span className="block bg-gradient-to-r from-[#f1d27a] via-[#c68b2b] to-[#e1b45a] bg-clip-text italic text-transparent">presence.</span>
            </h1>
            <p className="mt-4 text-[8px] font-semibold uppercase tracking-[.23em] text-white/54 sm:text-[10px]">Designed to Be Remembered.™</p>
            <p className="mt-5 max-w-[34rem] text-[13px] leading-6 text-[#ded7ca] sm:text-base sm:leading-8">Identity, digital presence and launch experiences for businesses that refuse to blend in.</p>
            <div className="mt-6 flex gap-2.5 sm:mt-8 sm:gap-3">
              <Link href="/contact" className="inline-flex min-h-12 flex-1 items-center justify-between border border-[#c99a3c]/85 bg-black/35 px-4 text-[8px] font-semibold uppercase tracking-[.16em] text-[#e9c56e] backdrop-blur-sm sm:flex-none sm:min-w-56 sm:px-6 sm:text-[10px]">Start a Project <span>→</span></Link>
              <Link href="/work" className="inline-flex min-h-12 flex-1 items-center justify-center border border-white/18 bg-black/20 px-4 text-center text-[8px] font-semibold uppercase tracking-[.14em] text-white/72 backdrop-blur-sm sm:flex-none sm:px-6 sm:text-[10px]">Explore Work</Link>
            </div>
            <p className="mt-5 text-[7px] font-semibold uppercase tracking-[.18em] text-white/30 sm:text-[9px]">{location} · Worldwide remote delivery</p>
          </div>
        </div>
      </section>

      <section className="border-b border-white/[.07] px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36">
        <div className="mx-auto grid max-w-[1380px] gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[.30em] text-[#d2a54b]">The Atelier</p>
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/42">Founder-led by design. AI accelerates research and production; human judgement controls what reaches the client.</p>
          </div>
          <div>
            <h2 className="font-[family-name:var(--font-cormorant)] text-[clamp(2.8rem,6vw,5.5rem)] leading-[.92] tracking-[-.04em]">A first impression should feel <span className="italic text-[#d6aa51]">intentional.</span></h2>
            <p className="mt-7 max-w-3xl text-base leading-8 text-[#bbb4a8]">Prime Presence Atelier builds the visible layer of a business around what it needs to communicate: credibility, distinction and confidence. The goal is not decoration. It is a presence people recognise, understand and remember.</p>
            <Link href="/about" className="mt-9 inline-flex items-center gap-6 border-b border-[#c99a3c]/55 pb-2 text-[9px] font-semibold uppercase tracking-[.20em] text-[#dbb45f]">About the Atelier <span>→</span></Link>
          </div>
        </div>
      </section>

      <section className="border-b border-white/[.07] px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1380px]">
          <div className="grid gap-8 border-b border-white/[.10] pb-10 lg:grid-cols-[.8fr_1.2fr]">
            <p className="text-[9px] font-semibold uppercase tracking-[.30em] text-[#d2a54b]">What we create</p>
            <h2 className="font-[family-name:var(--font-cormorant)] text-[clamp(2.7rem,5vw,4.8rem)] leading-[.94]">Focused services. One visual standard.</h2>
          </div>
          <div>
            {services.map(([number,title,body]) => (
              <article key={number} className="grid gap-4 border-b border-white/[.08] py-8 sm:grid-cols-[70px_1fr] lg:grid-cols-[100px_.8fr_1.2fr] lg:items-start lg:py-10">
                <p className="text-[9px] font-semibold tracking-[.22em] text-[#c99a3c]">{number}</p>
                <h3 className="font-[family-name:var(--font-cormorant)] text-3xl text-[#f3eee5] sm:text-4xl">{title}</h3>
                <p className="max-w-2xl text-sm leading-7 text-white/48 lg:pt-2">{body}</p>
              </article>
            ))}
          </div>
          <Link href="/services" className="mt-10 inline-flex items-center gap-6 border border-[#c99a3c]/55 px-6 py-4 text-[9px] font-semibold uppercase tracking-[.19em] text-[#dbb45f]">Explore Services <span>→</span></Link>
        </div>
      </section>

      <section className="overflow-hidden border-b border-white/[.07] bg-[#080706] px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36">
        <div className="mx-auto grid max-w-[1380px] items-center gap-14 lg:grid-cols-[1.05fr_.95fr] lg:gap-24">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[.30em] text-[#d2a54b]">Prime Presence Connect™</p>
            <h2 className="mt-5 font-[family-name:var(--font-cormorant)] text-[clamp(3rem,6vw,5.8rem)] leading-[.88] tracking-[-.04em]">Your presence,<span className="block italic text-[#d7ac54]">carried digitally.</span></h2>
            <p className="mt-7 max-w-2xl text-base leading-8 text-[#bbb4a8]">A polished digital business-card and mini-profile system built around fast contact actions, QR access and a professional mobile-first experience.</p>
            <Link href="/connect" className="mt-9 inline-flex items-center gap-6 border-b border-[#c99a3c]/55 pb-2 text-[9px] font-semibold uppercase tracking-[.20em] text-[#dbb45f]">Explore Connect <span>→</span></Link>
          </div>
          <div className="relative mx-auto w-full max-w-[430px] border border-[#c99a3c]/30 bg-[#050504] p-5 shadow-[0_40px_100px_rgba(0,0,0,.55)] sm:p-8">
            <div className="mx-auto aspect-[9/16] max-w-[300px] rounded-[38px] border border-white/15 bg-[radial-gradient(circle_at_50%_10%,rgba(201,154,60,.16),transparent_35%),#090807] p-3 shadow-[0_30px_90px_rgba(0,0,0,.7)]">
              <div className="flex h-full flex-col rounded-[28px] border border-white/[.08] bg-[#070706] p-6">
                <div className="mx-auto h-12 w-12 border border-[#c99a3c]/65 text-center text-[10px] font-bold leading-[48px] tracking-[.14em] text-[#dcb45e]">PP</div>
                <p className="mt-6 text-center font-[family-name:var(--font-cormorant)] text-2xl">Prime Presence</p>
                <p className="mt-1 text-center text-[7px] uppercase tracking-[.28em] text-[#c99a3c]">Connect™</p>
                <div className="mt-8 space-y-3"><div className="h-11 border border-white/10 bg-white/[.025]"/><div className="h-11 border border-white/10 bg-white/[.025]"/><div className="h-11 border border-white/10 bg-white/[.025]"/></div>
                <div className="mt-auto flex justify-between border-t border-white/[.08] pt-5 text-[7px] uppercase tracking-[.18em] text-white/35"><span>Contact</span><span>Share</span><span>Save</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/[.07] px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1380px]">
          <p className="text-[9px] font-semibold uppercase tracking-[.30em] text-[#d2a54b]">Selected work</p>
          <div className="mt-7 grid gap-px border border-white/[.09] bg-white/[.09] lg:grid-cols-2">
            <article className="bg-[#060605] p-8 sm:p-12"><p className="text-[8px] uppercase tracking-[.25em] text-white/35">Owned brand system</p><h3 className="mt-5 font-[family-name:var(--font-cormorant)] text-4xl sm:text-5xl">Prime Presence Atelier™</h3><p className="mt-5 max-w-xl text-sm leading-7 text-white/48">The identity, positioning and digital system behind the studio itself—built around premium first impressions and disciplined consistency.</p><Link href="/about" className="mt-8 inline-flex text-[9px] font-semibold uppercase tracking-[.19em] text-[#d7ad56]">View the thinking →</Link></article>
            <article className="bg-[#060605] p-8 sm:p-12"><p className="text-[8px] uppercase tracking-[.25em] text-white/35">Owned digital product</p><h3 className="mt-5 font-[family-name:var(--font-cormorant)] text-4xl sm:text-5xl">Prime Presence Connect™</h3><p className="mt-5 max-w-xl text-sm leading-7 text-white/48">A reusable mobile identity product designed around contact, sharing and a polished professional handoff.</p><Link href="/connect" className="mt-8 inline-flex text-[9px] font-semibold uppercase tracking-[.19em] text-[#d7ad56]">View the product →</Link></article>
          </div>
          <p className="mt-6 max-w-2xl text-xs leading-6 text-white/30">Client case studies are published only with approval. No invented work, borrowed logos or fabricated outcomes.</p>
        </div>
      </section>

      <section className="border-b border-white/[.07] px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1380px]">
          <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr]"><p className="text-[9px] font-semibold uppercase tracking-[.30em] text-[#d2a54b]">Process</p><h2 className="font-[family-name:var(--font-cormorant)] text-[clamp(2.7rem,5vw,4.8rem)] leading-[.94]">Clear enough to move quickly. Disciplined enough to protect the result.</h2></div>
          <div className="mt-12 grid gap-px bg-white/[.08] sm:grid-cols-2 lg:grid-cols-4">{process.map(([number,title,body]) => <article key={number} className="min-h-[250px] bg-[#050504] p-7"><p className="text-[9px] font-semibold tracking-[.22em] text-[#c99a3c]">{number}</p><h3 className="mt-10 font-[family-name:var(--font-cormorant)] text-3xl">{title}</h3><p className="mt-4 text-sm leading-7 text-white/42">{body}</p></article>)}</div>
          <Link href="/process" className="mt-9 inline-flex items-center gap-6 border-b border-[#c99a3c]/55 pb-2 text-[9px] font-semibold uppercase tracking-[.20em] text-[#dbb45f]">See the Process <span>→</span></Link>
        </div>
      </section>

      <section className="px-6 py-24 text-center sm:px-10 sm:py-32 lg:px-16 lg:py-40">
        <div className="mx-auto max-w-4xl"><p className="text-[9px] font-semibold uppercase tracking-[.30em] text-[#d2a54b]">Start something worth remembering</p><h2 className="mt-6 font-[family-name:var(--font-cormorant)] text-[clamp(3rem,7vw,6.3rem)] leading-[.88]">Your presence should arrive <span className="italic text-[#d6aa51]">before you do.</span></h2><p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-white/45">Tell us what you are building, changing or preparing to launch. We will tell you whether the Atelier is the right fit.</p><Link href="/contact" className="mt-10 inline-flex min-h-14 items-center border border-[#c99a3c]/70 px-8 text-[9px] font-semibold uppercase tracking-[.20em] text-[#dfb861]">Start a Project →</Link></div>
      </section>
    </main>
  );
}
