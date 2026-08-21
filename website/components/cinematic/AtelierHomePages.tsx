"use client";

import Link from "next/link";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const offers = [
  ["01", "Brand Identity", "Positioning, identity systems and visual direction that make the business feel established before a word is spoken."],
  ["02", "Digital Presence", "High-trust websites and digital touchpoints shaped around clarity, credibility and the next meaningful action."],
  ["03", "Prime Presence Connect™", "An upcoming mobile-first digital introduction product currently being developed and refined by the Atelier."],
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
      <section className="relative isolate min-h-[calc(100svh-64px)] overflow-hidden border-b border-white/[.07] sm:min-h-[calc(100svh-76px)]">
        <video className="absolute inset-0 -z-30 h-full w-full object-cover object-[68%_center] sm:object-center" autoPlay muted loop playsInline preload="metadata" poster={`${basePath}/media/ppa-studio-scene.webp`} aria-hidden="true">
          <source src={`${basePath}/media/ppa-hero-film.mp4`} type="video/mp4" />
        </video>
        <div aria-hidden="true" className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,rgba(3,3,3,.08)_0%,rgba(3,3,3,.16)_34%,rgba(3,3,3,.60)_68%,#040403_100%)] sm:bg-[linear-gradient(90deg,rgba(3,3,3,.88)_0%,rgba(3,3,3,.58)_44%,rgba(3,3,3,.12)_82%),linear-gradient(0deg,rgba(3,3,3,.48),transparent_58%)]" />
        <div aria-hidden="true" className="luxury-grain absolute inset-0 -z-10 opacity-60" />
        <div className="mx-auto flex min-h-[calc(100svh-64px)] max-w-[1500px] items-end px-5 pb-8 sm:min-h-[calc(100svh-76px)] sm:px-10 sm:pb-12 md:px-12 lg:items-center lg:px-16 lg:pb-14">
          <div className="w-full max-w-[680px]">
            <p className="eyebrow flex items-center gap-3 text-[8px] tracking-[.18em] sm:text-[9px]"><span className="h-px w-7 bg-[#c99a3c]/70 sm:w-10" /> Prime Presence Atelier™</p>
            <h1 className="mt-4 max-w-[8.5ch] font-[family-name:var(--font-cormorant)] text-[clamp(2.9rem,12.5vw,4.25rem)] font-medium leading-[.86] tracking-[-.04em] text-[#f9f3e9] sm:mt-6 md:max-w-none md:text-[clamp(5rem,7.6vw,8rem)] md:leading-[.82]">We craft <span className="block bg-gradient-to-r from-[#f5dc93] via-[#cd9736] to-[#efca72] bg-clip-text italic text-transparent">presence.</span></h1>
            <p className="mt-5 max-w-[29rem] text-[14px] leading-6 text-[#d3cbc0] sm:text-[17px] sm:leading-8">Premium identity and digital experiences for businesses that intend to be remembered.</p>
            <div className="mt-6 flex flex-col items-start gap-4 sm:mt-8 sm:flex-row sm:items-center sm:gap-7">
              <Link href="/contact" className="luxury-cta inline-flex min-h-12 min-w-[190px] items-center justify-between px-5 text-[9px] font-bold uppercase tracking-[.14em] text-[#f2d17c] sm:min-h-14 sm:min-w-56 sm:px-7">Start a Project <span>→</span></Link>
              <Link href="/work" className="inline-flex min-h-10 items-center gap-3 border-b border-white/20 text-[9px] font-bold uppercase tracking-[.14em] text-white/66 transition-colors hover:border-[#d5ad55]/65 hover:text-[#e5bd67]">Explore the Work <span>→</span></Link>
            </div>
            <p className="mt-6 max-w-[29rem] text-[8px] font-semibold uppercase tracking-[.14em] text-white/34 sm:text-[9px]">{location} · Worldwide remote delivery</p>
          </div>
        </div>
      </section>

      <section className="editorial-section relative px-5 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36">
        <div className="mx-auto grid max-w-[1380px] gap-10 lg:grid-cols-[.52fr_1.48fr] lg:gap-24">
          <div><p className="eyebrow">The Atelier</p><p className="mt-6 max-w-sm text-base leading-8 text-white/52">Founder-led by design. Technology accelerates the work; human judgement decides what is worthy of the client.</p></div>
          <div><h2 className="premium-title">A first impression should feel <span className="italic text-[#d7ac53]">inevitable.</span></h2><div className="mt-8 grid gap-6 border-t border-white/[.08] pt-7 md:grid-cols-2"><p className="text-base leading-8 text-[#c7beb2] sm:text-lg">Prime Presence Atelier shapes the visible layer of a business around credibility, distinction and confidence.</p><p className="text-base leading-8 text-[#9f978d] sm:text-lg">The objective is not decoration. It is a presence people understand quickly, trust instinctively and remember afterwards.</p></div><Link href="/about" className="mt-8 inline-flex min-h-12 items-center gap-5 border-b border-[#c99a3c]/55 text-[10px] font-bold uppercase tracking-[.17em] text-[#e2b95f]">About the Atelier <span>→</span></Link></div>
        </div>
      </section>

      <section className="relative px-5 pb-20 sm:px-10 sm:pb-28 lg:px-16 lg:pb-36" aria-labelledby="brand-identity-title">
        <div className="mx-auto max-w-[1380px]">
          <div className="grid items-center gap-9 lg:grid-cols-[1.35fr_.65fr] lg:gap-16">
            <figure className="group relative overflow-hidden border border-white/[.08] bg-[#080705] shadow-[0_30px_90px_rgba(0,0,0,.42)]">
              <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(135deg,rgba(213,173,85,.08),transparent_34%,rgba(0,0,0,.12)_72%)]" />
              <img src={`${basePath}/media/ppa-brand-identity-1.webp`} alt="Prime Presence Atelier brand identity presented on premium black collateral" className="aspect-[4/3] w-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.015] sm:aspect-[16/10] lg:aspect-[6/5]" loading="lazy" decoding="async" />
              <figcaption className="absolute bottom-0 left-0 z-20 m-4 border-l border-[#c99a3c]/65 bg-black/55 px-4 py-3 backdrop-blur-md sm:m-6"><span className="block text-[8px] font-bold uppercase tracking-[.22em] text-[#d7ad55]">Identity system</span><span className="mt-1 block text-[9px] uppercase tracking-[.16em] text-white/55">Prime Presence Atelier™</span></figcaption>
            </figure>
            <div className="lg:pl-4"><p className="eyebrow">Brand Identity</p><h2 id="brand-identity-title" className="mt-5 font-[family-name:var(--font-cormorant)] text-[clamp(2.8rem,5vw,5rem)] font-medium leading-[.9] tracking-[-.035em] text-[#f4eee3]">Made to feel <span className="block italic text-[#d5aa52]">established.</span></h2><p className="mt-6 max-w-xl text-[15px] leading-7 text-white/56 sm:text-base sm:leading-8">Identity is more than a mark. We build visual systems with enough restraint, detail and consistency to make every important touchpoint feel intentional.</p><Link href="/services" className="mt-7 inline-flex min-h-11 items-center gap-5 border-b border-[#c99a3c]/55 text-[9px] font-bold uppercase tracking-[.17em] text-[#e0b75f]">Explore Brand Identity <span>→</span></Link></div>
          </div>
        </div>
      </section>

      <section className="relative border-y border-white/[.07] bg-[#070605] px-5 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-32">
        <div className="relative mx-auto max-w-[1380px]">
          <div className="grid gap-6 lg:grid-cols-[.52fr_1.48fr] lg:items-end"><p className="eyebrow">What we create</p><h2 className="premium-title">Three focused offers.<br/><span className="italic text-[#d3a54b]">One uncompromising standard.</span></h2></div>
          <div className="mt-10 divide-y divide-white/[.08] border-y border-white/[.08] sm:mt-14">
            {offers.map(([number,title,body]) => <Link href={number === "03" ? "/connect" : "/services"} key={number} className="group grid gap-3 py-7 sm:grid-cols-[70px_.8fr_1.2fr_auto] sm:items-center lg:py-10"><p className="text-[10px] font-bold tracking-[.2em] text-[#c99a3c]">{number}</p><div><h3 className="font-[family-name:var(--font-cormorant)] text-[2.25rem] leading-[.95] text-[#f4eee3] sm:text-[3rem]">{title}</h3>{number === "03" && <span className="mt-3 inline-block border border-[#c99a3c]/30 px-2.5 py-1 text-[8px] font-bold uppercase tracking-[.18em] text-[#d8ae55]">Coming Soon</span>}</div><p className="max-w-2xl text-[15px] leading-7 text-white/58 sm:text-base sm:leading-8">{body}</p><span className="text-xl text-[#c99a3c] transition-transform duration-500 group-hover:translate-x-2">→</span></Link>)}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-white/[.07] px-5 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-32">
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_84%_24%,rgba(201,154,60,.13),transparent_24%),linear-gradient(180deg,#050504,#080603_46%,#040403)]" />
        <div className="relative mx-auto max-w-[1380px]">
          <div className="grid gap-10 lg:grid-cols-[.78fr_1.22fr] lg:items-center lg:gap-20">
            <div>
              <div className="inline-flex items-center gap-3 border border-[#c99a3c]/30 bg-[#c99a3c]/[.05] px-3.5 py-2"><span className="h-1.5 w-1.5 rounded-full bg-[#d8ad55] shadow-[0_0_12px_rgba(216,173,85,.65)]"/><span className="text-[8px] font-bold uppercase tracking-[.2em] text-[#d8ad55]">In Development</span></div>
              <p className="eyebrow mt-6">Prime Presence Connect™</p>
              <h2 className="mt-5 max-w-[8ch] font-[family-name:var(--font-cormorant)] text-[clamp(3rem,7vw,6rem)] font-medium leading-[.88] tracking-[-.045em] text-[#f4eee3]">Something more <span className="italic text-[#d8ad55]">immediate.</span></h2>
              <p className="mt-6 max-w-xl text-[15px] leading-7 text-[#bdb3a7] sm:text-lg sm:leading-8">A new way to carry your presence beyond the website is taking shape. We’re keeping the details deliberately close until it is ready.</p>
              <Link href="/connect" className="mt-8 inline-flex min-h-11 items-center gap-5 border-b border-[#c99a3c]/55 text-[9px] font-bold uppercase tracking-[.17em] text-[#e0b75f]">Enter the Preview <span>→</span></Link>
            </div>

            <Link href="/connect" aria-label="Preview Prime Presence Connect coming soon" className="group relative block overflow-hidden border border-[#c99a3c]/20 bg-[#080705] shadow-[0_32px_90px_rgba(0,0,0,.42)]">
              <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(135deg,rgba(201,154,60,.12),transparent_30%,rgba(0,0,0,.34)_72%)]" />
              <div aria-hidden="true" className="absolute -right-20 -top-20 h-56 w-56 rounded-full border border-[#c99a3c]/12 transition-transform duration-1000 group-hover:scale-110" />
              <div aria-hidden="true" className="absolute -bottom-28 left-8 h-72 w-72 rounded-full border border-white/[.04]" />
              <div className="relative min-h-[300px] p-7 sm:min-h-[360px] sm:p-10 lg:min-h-[420px] lg:p-12">
                <div className="flex items-start justify-between gap-4">
                  <div><p className="text-[8px] font-bold uppercase tracking-[.25em] text-[#c99a3c]">Project 03</p><p className="mt-3 font-[family-name:var(--font-cormorant)] text-3xl text-[#f3ece1] sm:text-4xl">Connect™</p></div>
                  <span className="shrink-0 border border-[#c99a3c]/25 px-2.5 py-1.5 text-[7px] font-bold uppercase tracking-[.18em] text-[#d8ad55]">Coming Soon</span>
                </div>

                <div className="mt-12 max-w-md sm:mt-16">
                  <p className="font-[family-name:var(--font-cormorant)] text-[clamp(2.25rem,6vw,4.7rem)] leading-[.9] tracking-[-.035em] text-[#f0e9de]">Not a card.<br/><span className="italic text-[#d3a54b]">Not a website.</span></p>
                  <p className="mt-5 max-w-sm text-sm leading-6 text-white/48 sm:text-base sm:leading-7">Designed for the moment after someone asks, “How do I reach you?”</p>
                </div>

                <div className="mt-10 flex items-end justify-between gap-5 border-t border-white/[.08] pt-5 sm:mt-12">
                  <p className="max-w-[15rem] text-[8px] font-bold uppercase tracking-[.2em] text-white/34">A Prime Presence product · Release date to be announced</p>
                  <span className="shrink-0 text-xl text-[#d8ad55] transition-transform duration-500 group-hover:translate-x-1">↗</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-white/[.07] bg-[#070605] px-5 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1380px]"><div className="grid gap-6 lg:grid-cols-[.52fr_1.48fr]"><p className="eyebrow">Process</p><h2 className="premium-title">Clear enough to move quickly.<br/><span className="italic text-[#d3a750]">Disciplined enough to protect the result.</span></h2></div><div className="mt-10 grid gap-8 border-t border-white/[.08] pt-8 sm:grid-cols-2 lg:grid-cols-4">{steps.map(([number,title,body]) => <article key={number}><p className="text-[10px] font-bold tracking-[.2em] text-[#c99a3c]">{number}</p><h3 className="mt-6 font-[family-name:var(--font-cormorant)] text-3xl">{title}</h3><p className="mt-4 text-[15px] leading-7 text-white/58">{body}</p></article>)}</div></div>
      </section>

      <section className="relative px-5 py-24 text-center sm:px-10 sm:py-32 lg:px-16 lg:py-40">
        <div className="relative mx-auto max-w-4xl"><p className="eyebrow">Start something worth remembering</p><h2 className="premium-title mt-6">Your presence should arrive <span className="italic text-[#d6aa51]">before you do.</span></h2><p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/52 sm:text-lg">Tell us what you are building, changing or preparing to launch. We will tell you whether the Atelier is the right fit.</p><Link href="/contact" className="luxury-cta mt-9 inline-flex min-h-12 items-center px-7 text-[10px] font-bold uppercase tracking-[.17em] text-[#f0ca72] sm:min-h-14">Start a Project →</Link></div>
      </section>
    </main>
  );
}
