"use client";

import Link from "next/link";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const offers = [
  ["01", "Brand Identity", "Positioning, identity systems and visual direction that make the business feel established before a word is spoken."],
  ["02", "Digital Presence", "High-trust websites and digital touchpoints shaped around clarity, credibility and the next meaningful action."],
  ["03", "Prime Presence Connect™", "A refined mobile-first digital business card for introductions, meetings and immediate contact."],
] as const;

const steps = [
  ["01", "Discover", "Business, audience, ambition and the impression the brand needs to create."],
  ["02", "Direct", "One focused visual direction establishes tone, hierarchy and distinction."],
  ["03", "Craft", "Identity, interface and launch assets are built as one considered system."],
  ["04", "Refine", "Every important touchpoint is checked before release."],
] as const;

export default function AtelierHomePages({ location }: { location: string }) {
  return (
    <main id="main-content" className="overflow-hidden bg-[#040403] text-[#f4efe6]">
      <section className="relative isolate min-h-[100svh] overflow-hidden border-b border-white/[.07]">
        <video className="absolute inset-0 -z-30 h-full w-full object-cover object-[64%_center] sm:object-center" autoPlay muted loop playsInline preload="metadata" poster={`${basePath}/media/ppa-studio-scene.webp`} aria-hidden="true">
          <source src={`${basePath}/media/ppa-hero-film.mp4`} type="video/mp4" />
        </video>
        <div aria-hidden="true" className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,rgba(3,3,3,.16)_0%,rgba(3,3,3,.22)_32%,rgba(3,3,3,.68)_68%,#040403_100%)] sm:bg-[linear-gradient(90deg,rgba(3,3,3,.92)_0%,rgba(3,3,3,.62)_45%,rgba(3,3,3,.18)_80%),linear-gradient(0deg,rgba(3,3,3,.55),transparent_55%)]" />
        <div aria-hidden="true" className="luxury-grain absolute inset-0 -z-10" />

        <div className="mx-auto flex min-h-[100svh] max-w-[1500px] items-end px-5 pb-8 pt-24 sm:px-10 sm:pb-14 md:px-12 lg:items-center lg:px-16 lg:pb-16">
          <div className="w-full max-w-[760px]">
            <p className="eyebrow flex items-center gap-3"><span className="h-px w-8 bg-[#c99a3c]/75 sm:w-12" /> Prime Presence Atelier™</p>
            <h1 className="mt-5 max-w-[9ch] font-[family-name:var(--font-cormorant)] text-[clamp(3.2rem,14vw,4.9rem)] font-medium leading-[.82] tracking-[-.045em] text-[#f9f3e9] sm:mt-7 md:max-w-none md:text-[clamp(5.2rem,8vw,8.7rem)] md:leading-[.8]">
              We craft <span className="block bg-gradient-to-r from-[#f7df99] via-[#d09b38] to-[#f2cd76] bg-clip-text italic text-transparent">presence.</span>
            </h1>
            <p className="mt-5 max-w-[34rem] text-[15px] leading-7 text-[#d7cfc3] sm:text-lg sm:leading-8">Premium identity, digital presence and launch experiences for businesses that refuse to look interchangeable.</p>
            <div className="mt-6 grid gap-3 sm:mt-8 sm:flex">
              <Link href="/contact" className="luxury-cta inline-flex min-h-12 items-center justify-between px-5 text-[10px] font-bold uppercase tracking-[.15em] text-[#f2d17c] sm:min-h-14 sm:min-w-60 sm:px-7">Start a Project <span>→</span></Link>
              <Link href="/work" className="inline-flex min-h-12 items-center justify-center border border-white/14 bg-black/20 px-5 text-[10px] font-bold uppercase tracking-[.14em] text-white/72 backdrop-blur-sm transition hover:text-[#e5bd67] sm:min-h-14">Explore the Work</Link>
            </div>
            <p className="mt-5 text-[9px] font-semibold uppercase tracking-[.16em] text-white/42">{location} · Worldwide remote delivery</p>
          </div>
        </div>
      </section>

      <section className="editorial-section relative px-5 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36">
        <div className="mx-auto grid max-w-[1380px] gap-10 lg:grid-cols-[.52fr_1.48fr] lg:gap-24">
          <div><p className="eyebrow">The Atelier</p><p className="mt-6 max-w-sm text-base leading-8 text-white/52">Founder-led by design. Technology accelerates the work; human judgement decides what is worthy of the client.</p></div>
          <div>
            <h2 className="premium-title">A first impression should feel <span className="italic text-[#d7ac53]">inevitable.</span></h2>
            <div className="mt-8 grid gap-6 border-t border-white/[.08] pt-7 md:grid-cols-2"><p className="text-base leading-8 text-[#c7beb2] sm:text-lg">Prime Presence Atelier shapes the visible layer of a business around credibility, distinction and confidence.</p><p className="text-base leading-8 text-[#9f978d] sm:text-lg">The objective is not decoration. It is a presence people understand quickly, trust instinctively and remember afterwards.</p></div>
            <Link href="/about" className="mt-8 inline-flex min-h-12 items-center gap-5 border-b border-[#c99a3c]/55 text-[10px] font-bold uppercase tracking-[.17em] text-[#e2b95f]">About the Atelier <span>→</span></Link>
          </div>
        </div>
      </section>

      <section className="relative border-y border-white/[.07] bg-[#070605] px-5 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-32">
        <div className="relative mx-auto max-w-[1380px]">
          <div className="grid gap-6 lg:grid-cols-[.52fr_1.48fr] lg:items-end"><p className="eyebrow">What we create</p><h2 className="premium-title">Three focused offers.<br/><span className="italic text-[#d3a54b]">One uncompromising standard.</span></h2></div>
          <div className="mt-10 divide-y divide-white/[.08] border-y border-white/[.08] sm:mt-14">
            {offers.map(([number,title,body]) => <Link href="/services" key={number} className="group grid gap-3 py-7 sm:grid-cols-[70px_.8fr_1.2fr_auto] sm:items-center lg:py-10"><p className="text-[10px] font-bold tracking-[.2em] text-[#c99a3c]">{number}</p><h3 className="font-[family-name:var(--font-cormorant)] text-[2.25rem] leading-[.95] text-[#f4eee3] sm:text-[3rem]">{title}</h3><p className="max-w-2xl text-[15px] leading-7 text-white/58 sm:text-base sm:leading-8">{body}</p><span className="text-xl text-[#c99a3c] transition-transform duration-500 group-hover:translate-x-2">→</span></Link>)}
          </div>
        </div>
      </section>

      <section className="relative px-5 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36">
        <div className="mx-auto grid max-w-[1380px] items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-24">
          <div><p className="eyebrow">Prime Presence Connect™</p><h2 className="premium-title mt-5">Your presence,<span className="block italic text-[#d8ad55]">carried digitally.</span></h2><p className="mt-6 max-w-2xl text-base leading-8 text-[#c4bbaf] sm:text-lg">A polished digital business card and mini-profile built for introductions, meetings, networking and the moment immediately after.</p><Link href="/connect" className="mt-8 inline-flex min-h-12 items-center gap-5 border-b border-[#c99a3c]/55 text-[10px] font-bold uppercase tracking-[.17em] text-[#e0b75f]">Explore Connect <span>→</span></Link></div>
          <div className="relative mx-auto w-full max-w-[330px] sm:max-w-[390px]"><div className="luxury-device rounded-[40px] p-3"><div className="aspect-[9/16] rounded-[32px] border border-white/[.07] bg-[radial-gradient(circle_at_50%_8%,rgba(201,154,60,.16),transparent_25%),#050504] p-6"><p className="text-center text-[9px] font-bold uppercase tracking-[.22em] text-[#d8ad55]">Prime Presence</p><p className="mt-4 text-center font-[family-name:var(--font-cormorant)] text-4xl">Connect™</p><div className="mx-auto mt-8 h-20 w-20 rounded-full border border-[#c99a3c]/35 bg-[#0b0906]"/><div className="mt-9 space-y-3"><div className="h-12 rounded-xl border border-white/[.08] bg-white/[.02]"/><div className="h-12 rounded-xl border border-white/[.08] bg-white/[.02]"/><div className="h-12 rounded-xl border border-white/[.08] bg-white/[.02]"/></div></div></div></div>
        </div>
      </section>

      <section className="border-y border-white/[.07] bg-[#070605] px-5 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-32"><div className="mx-auto max-w-[1380px]"><div className="grid gap-6 lg:grid-cols-[.52fr_1.48fr]"><p className="eyebrow">Process</p><h2 className="premium-title">Clear enough to move quickly.<br/><span className="italic text-[#d3a750]">Disciplined enough to protect the result.</span></h2></div><div className="mt-10 grid gap-8 border-t border-white/[.08] pt-8 sm:grid-cols-2 lg:grid-cols-4">{steps.map(([number,title,body]) => <article key={number}><p className="text-[10px] font-bold tracking-[.2em] text-[#c99a3c]">{number}</p><h3 className="mt-6 font-[family-name:var(--font-cormorant)] text-3xl">{title}</h3><p className="mt-4 text-[15px] leading-7 text-white/58">{body}</p></article>)}</div></div></section>

      <section className="relative px-5 py-24 text-center sm:px-10 sm:py-32 lg:px-16 lg:py-40"><div className="relative mx-auto max-w-4xl"><p className="eyebrow">Start something worth remembering</p><h2 className="premium-title mt-6">Your presence should arrive <span className="italic text-[#d6aa51]">before you do.</span></h2><p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/52 sm:text-lg">Tell us what you are building, changing or preparing to launch. We will tell you whether the Atelier is the right fit.</p><Link href="/contact" className="luxury-cta mt-9 inline-flex min-h-12 items-center px-7 text-[10px] font-bold uppercase tracking-[.17em] text-[#f0ca72] sm:min-h-14">Start a Project →</Link></div></section>
    </main>
  );
}
