"use client";

import Link from "next/link";

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
      <section className="luxury-hero relative isolate min-h-[100svh] overflow-hidden">
        <div aria-hidden="true" className="luxury-grain absolute inset-0 -z-10" />
        <div aria-hidden="true" className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_77%_20%,rgba(221,174,78,.19),transparent_20rem),radial-gradient(circle_at_62%_62%,rgba(100,69,27,.12),transparent_32rem),linear-gradient(125deg,#030303_0%,#090806_46%,#020202_100%)]" />
        <div aria-hidden="true" className="luxury-orbit absolute right-[-12rem] top-[5%] -z-10 h-[44rem] w-[44rem] rounded-full border border-[#d4aa50]/12 sm:h-[58rem] sm:w-[58rem]" />
        <div className="mx-auto grid min-h-[100svh] max-w-[1500px] items-end gap-16 px-6 pb-12 pt-28 sm:px-10 sm:pb-16 md:px-12 lg:grid-cols-[1.18fr_.82fr] lg:px-16 lg:pb-20">
          <div className="max-w-[900px] self-center">
            <p className="eyebrow flex items-center gap-3"><span className="h-px w-12 bg-[#c99a3c]/75" /> Prime Presence Atelier™</p>
            <h1 className="mt-8 font-[family-name:var(--font-cormorant)] text-[clamp(4.8rem,17vw,7.6rem)] font-medium leading-[.74] tracking-[-.065em] text-[#f9f3e9] md:text-[clamp(7rem,9vw,10.5rem)]">
              We craft
              <span className="block bg-gradient-to-r from-[#f7df99] via-[#d09b38] to-[#f2cd76] bg-clip-text italic text-transparent">presence.</span>
            </h1>
            <p className="mt-8 max-w-[38rem] text-[1.05rem] leading-8 text-[#d7cfc3] sm:text-lg">Premium identity, digital presence and launch experiences for businesses that refuse to look interchangeable.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="luxury-cta inline-flex min-h-14 items-center justify-between px-7 text-[10px] font-bold uppercase tracking-[.18em] text-[#f2d17c] sm:min-w-64">Start a Project <span>→</span></Link>
              <Link href="/work" className="inline-flex min-h-14 items-center justify-center px-7 text-[10px] font-bold uppercase tracking-[.16em] text-white/70 transition hover:text-[#e5bd67]">Explore the Work</Link>
            </div>
          </div>

          <div className="hidden self-end lg:block">
            <div className="ml-auto max-w-[360px] border-t border-[#d3a84f]/38 pt-6">
              <p className="text-[10px] font-bold uppercase tracking-[.24em] text-[#d7ad59]">Designed to Be Remembered.™</p>
              <p className="mt-6 font-[family-name:var(--font-cormorant)] text-[2.25rem] leading-[1.02] text-white/78">A premium business should feel considered before the conversation even begins.</p>
              <p className="mt-7 text-sm leading-7 text-white/38">{location}<br/>Worldwide remote delivery</p>
            </div>
          </div>
        </div>
      </section>

      <section className="editorial-section relative px-6 py-28 sm:px-10 sm:py-36 lg:px-16 lg:py-44">
        <div className="mx-auto grid max-w-[1380px] gap-14 lg:grid-cols-[.52fr_1.48fr] lg:gap-28">
          <div className="lg:pt-3">
            <p className="eyebrow">The Atelier</p>
            <p className="mt-8 max-w-sm text-base leading-8 text-white/44">Founder-led by design. Technology accelerates the work; human judgement decides what is worthy of the client.</p>
          </div>
          <div>
            <h2 className="font-[family-name:var(--font-cormorant)] text-[clamp(4rem,8vw,7.4rem)] leading-[.82] tracking-[-.05em] text-[#f5efe5]">A first impression should feel <span className="italic text-[#d7ac53]">inevitable.</span></h2>
            <div className="mt-12 grid gap-8 border-t border-white/[.08] pt-8 md:grid-cols-2">
              <p className="text-lg leading-9 text-[#c7beb2]">Prime Presence Atelier shapes the visible layer of a business around credibility, distinction and confidence.</p>
              <p className="text-lg leading-9 text-[#9f978d]">The objective is not decoration. It is a presence people understand quickly, trust instinctively and remember afterwards.</p>
            </div>
            <Link href="/about" className="mt-10 inline-flex min-h-12 items-center gap-8 border-b border-[#c99a3c]/55 text-[10px] font-bold uppercase tracking-[.20em] text-[#e2b95f]">About the Atelier <span>→</span></Link>
          </div>
        </div>
      </section>

      <section className="relative border-y border-white/[.07] bg-[#070605] px-6 py-28 sm:px-10 sm:py-36 lg:px-16 lg:py-40">
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_18%_25%,rgba(201,154,60,.07),transparent_22rem)]" />
        <div className="relative mx-auto max-w-[1380px]">
          <div className="grid gap-8 lg:grid-cols-[.52fr_1.48fr] lg:items-end">
            <p className="eyebrow">What we create</p>
            <h2 className="font-[family-name:var(--font-cormorant)] text-[clamp(3.7rem,7vw,6.6rem)] leading-[.84] tracking-[-.045em]">Three focused offers.<br/><span className="italic text-[#d3a54b]">One uncompromising standard.</span></h2>
          </div>
          <div className="mt-16 divide-y divide-white/[.08] border-y border-white/[.08]">
            {offers.map(([number,title,body]) => (
              <Link href="/services" key={number} className="group grid gap-5 py-9 sm:grid-cols-[80px_.8fr_1.2fr_auto] sm:items-center lg:py-12">
                <p className="text-[10px] font-bold tracking-[.24em] text-[#c99a3c]">{number}</p>
                <h3 className="font-[family-name:var(--font-cormorant)] text-[2.8rem] leading-[.92] text-[#f4eee3] sm:text-[3.4rem]">{title}</h3>
                <p className="max-w-2xl text-base leading-8 text-white/48">{body}</p>
                <span className="text-2xl text-[#c99a3c] transition-transform duration-500 group-hover:translate-x-2">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-6 py-28 sm:px-10 sm:py-36 lg:px-16 lg:py-44">
        <div className="mx-auto grid max-w-[1380px] items-center gap-16 lg:grid-cols-[1fr_1fr] lg:gap-28">
          <div>
            <p className="eyebrow">Prime Presence Connect™</p>
            <h2 className="mt-7 font-[family-name:var(--font-cormorant)] text-[clamp(4rem,7.5vw,7rem)] leading-[.8] tracking-[-.05em]">Your presence,<span className="block italic text-[#d8ad55]">carried digitally.</span></h2>
            <p className="mt-8 max-w-2xl text-lg leading-9 text-[#c4bbaf]">A polished digital business card and mini-profile built for introductions, meetings, networking and the moment immediately after.</p>
            <Link href="/connect" className="mt-10 inline-flex min-h-12 items-center gap-8 border-b border-[#c99a3c]/55 text-[10px] font-bold uppercase tracking-[.20em] text-[#e0b75f]">Explore Connect <span>→</span></Link>
          </div>

          <div className="relative mx-auto w-full max-w-[420px]">
            <div aria-hidden="true" className="absolute -inset-16 -z-10 bg-[radial-gradient(circle,rgba(201,154,60,.13),transparent_58%)] blur-2xl" />
            <div className="luxury-device rounded-[50px] p-3">
              <div className="aspect-[9/16] rounded-[40px] border border-white/[.07] bg-[radial-gradient(circle_at_50%_8%,rgba(201,154,60,.16),transparent_25%),#050504] p-8">
                <p className="text-center text-[9px] font-bold uppercase tracking-[.27em] text-[#d8ad55]">Prime Presence</p>
                <p className="mt-5 text-center font-[family-name:var(--font-cormorant)] text-5xl">Connect™</p>
                <div className="mx-auto mt-10 h-24 w-24 rounded-full border border-[#c99a3c]/35 bg-[#0b0906] shadow-[0_0_60px_rgba(201,154,60,.10)]" />
                <div className="mt-12 space-y-3"><div className="h-14 rounded-2xl border border-white/[.08] bg-white/[.02]"/><div className="h-14 rounded-2xl border border-white/[.08] bg-white/[.02]"/><div className="h-14 rounded-2xl border border-white/[.08] bg-white/[.02]"/></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/[.07] bg-[#070605] px-6 py-28 sm:px-10 sm:py-36 lg:px-16 lg:py-40">
        <div className="mx-auto max-w-[1380px]">
          <div className="grid gap-8 lg:grid-cols-[.52fr_1.48fr]"><p className="eyebrow">Process</p><h2 className="font-[family-name:var(--font-cormorant)] text-[clamp(3.7rem,6.8vw,6.4rem)] leading-[.84] tracking-[-.045em]">Clear enough to move quickly.<br/><span className="italic text-[#d3a750]">Disciplined enough to protect the result.</span></h2></div>
          <div className="mt-16 grid gap-10 border-t border-white/[.08] pt-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(([number,title,body]) => <article key={number}><p className="text-[10px] font-bold tracking-[.22em] text-[#c99a3c]">{number}</p><h3 className="mt-8 font-[family-name:var(--font-cormorant)] text-4xl">{title}</h3><p className="mt-5 text-[15px] leading-8 text-white/48">{body}</p></article>)}
          </div>
        </div>
      </section>

      <section className="relative px-6 py-32 text-center sm:px-10 sm:py-40 lg:px-16 lg:py-48">
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(201,154,60,.10),transparent_30rem)]" />
        <div className="relative mx-auto max-w-5xl">
          <p className="eyebrow">Start something worth remembering</p>
          <h2 className="mt-8 font-[family-name:var(--font-cormorant)] text-[clamp(4.1rem,9vw,8.2rem)] leading-[.78] tracking-[-.055em]">Your presence should arrive <span className="italic text-[#d6aa51]">before you do.</span></h2>
          <p className="mx-auto mt-9 max-w-2xl text-lg leading-9 text-white/48">Tell us what you are building, changing or preparing to launch. We will tell you whether the Atelier is the right fit.</p>
          <Link href="/contact" className="luxury-cta mt-12 inline-flex min-h-14 items-center px-9 text-[10px] font-bold uppercase tracking-[.20em] text-[#f0ca72]">Start a Project →</Link>
        </div>
      </section>
    </main>
  );
}
