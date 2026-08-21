"use client";

import Link from "next/link";

const offers = [
  ["01", "Brand Identity", "Strategy, logo systems and visual direction designed to make the business feel established before a word is spoken."],
  ["02", "Digital Presence", "High-trust websites and digital touchpoints built around clarity, credibility and the next meaningful action."],
  ["03", "Prime Presence Connect™", "A refined mobile-first digital business card for introductions, meetings, networking and immediate contact."],
] as const;

const steps = [
  ["01", "Discover", "We establish the business, audience, objective and the impression the brand needs to create."],
  ["02", "Direct", "One focused visual direction sets the tone, hierarchy, proof and experience."],
  ["03", "Craft", "Identity, interface and launch assets are built as one considered system."],
  ["04", "Refine", "Desktop, mobile and real touchpoints are checked before anything reaches the public."],
] as const;

export default function AtelierHomePages({ location }: { location: string }) {
  return (
    <main id="main-content" className="overflow-hidden bg-[#050504] text-[#f4efe6]">
      <section className="relative isolate min-h-[100svh] overflow-hidden border-b border-white/[.07]">
        <div aria-hidden="true" className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_76%_20%,rgba(221,174,78,.19),transparent_18rem),radial-gradient(circle_at_62%_58%,rgba(110,79,32,.15),transparent_28rem),linear-gradient(125deg,#030303_0%,#0a0907_48%,#030303_100%)]" />
        <div aria-hidden="true" className="absolute -right-28 top-[8%] -z-10 h-[34rem] w-[34rem] rotate-[17deg] border border-[#d1a64d]/16 bg-[linear-gradient(145deg,rgba(215,171,77,.08),transparent_42%)] shadow-[0_0_160px_rgba(201,154,60,.08)] sm:h-[46rem] sm:w-[46rem]" />
        <div aria-hidden="true" className="absolute right-[9%] top-[20%] -z-10 hidden h-64 w-64 rotate-45 border border-[#d1a64d]/15 lg:block" />
        <div className="mx-auto flex min-h-[100svh] max-w-[1500px] items-center px-6 pb-14 pt-28 sm:px-10 md:px-12 lg:px-16">
          <div className="grid w-full items-end gap-14 lg:grid-cols-[1.15fr_.85fr] lg:gap-20">
            <div className="max-w-[800px]">
              <p className="eyebrow flex items-center gap-3"><span className="h-px w-10 bg-[#c99a3c]/75" /> Prime Presence Atelier™</p>
              <h1 className="mt-7 font-[family-name:var(--font-cormorant)] text-[clamp(4.25rem,16vw,6.8rem)] font-medium leading-[.78] tracking-[-.06em] text-[#f8f2e8] md:text-[clamp(6.4rem,8vw,9.6rem)]">
                We craft<span className="block bg-gradient-to-r from-[#f5dd95] via-[#d19d3d] to-[#f1cb72] bg-clip-text italic text-transparent">presence.</span>
              </h1>
              <p className="mt-7 max-w-[36rem] text-[1.05rem] leading-8 text-[#d8d0c3] sm:text-lg">Premium identity, digital presence and launch experiences for businesses that refuse to look interchangeable.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className="inline-flex min-h-14 items-center justify-between border border-[#d5aa51]/90 bg-[linear-gradient(135deg,rgba(213,170,81,.14),rgba(213,170,81,.035))] px-6 text-[11px] font-bold uppercase tracking-[.18em] text-[#f2d17c] transition hover:bg-[#d0a44c] hover:text-[#060606] sm:min-w-60">Start a Project <span>→</span></Link>
                <Link href="/work" className="inline-flex min-h-14 items-center justify-center border border-white/16 bg-white/[.015] px-6 text-[11px] font-bold uppercase tracking-[.16em] text-white/76 transition hover:border-[#d1a64d]/45 hover:text-[#f0cb72]">Explore the Work</Link>
              </div>
              <p className="mt-7 text-[10px] font-semibold uppercase tracking-[.2em] text-white/38">{location} · Worldwide remote delivery</p>
            </div>

            <div className="relative hidden lg:block">
              <div className="ml-auto max-w-[420px] border border-[#d0a44c]/22 bg-[linear-gradient(145deg,rgba(255,255,255,.045),rgba(255,255,255,.008))] p-8 shadow-[0_38px_120px_rgba(0,0,0,.34)] backdrop-blur-sm">
                <p className="text-[10px] font-bold uppercase tracking-[.24em] text-[#d7ad59]">Designed to Be Remembered.™</p>
                <p className="mt-8 font-[family-name:var(--font-cormorant)] text-4xl leading-[.96] text-[#f1eadf]">A premium business should look considered at every point of contact.</p>
                <div className="mt-10 grid grid-cols-2 gap-px bg-white/10">
                  <div className="bg-[#090806] p-5"><p className="text-3xl font-[family-name:var(--font-cormorant)] text-[#e5bd66]">01</p><p className="mt-2 text-xs uppercase tracking-[.14em] text-white/44">Identity</p></div>
                  <div className="bg-[#090806] p-5"><p className="text-3xl font-[family-name:var(--font-cormorant)] text-[#e5bd66]">02</p><p className="mt-2 text-xs uppercase tracking-[.14em] text-white/44">Digital</p></div>
                  <div className="bg-[#090806] p-5"><p className="text-3xl font-[family-name:var(--font-cormorant)] text-[#e5bd66]">03</p><p className="mt-2 text-xs uppercase tracking-[.14em] text-white/44">Launch</p></div>
                  <div className="bg-[#090806] p-5"><p className="text-3xl font-[family-name:var(--font-cormorant)] text-[#e5bd66]">04</p><p className="mt-2 text-xs uppercase tracking-[.14em] text-white/44">Connect</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#c99a3c]/45 to-transparent" />
      </section>

      <section className="relative border-b border-white/[.07] px-6 py-24 sm:px-10 sm:py-32 lg:px-16 lg:py-40">
        <div aria-hidden="true" className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_80%_45%,rgba(201,154,60,.06),transparent_35%)]" />
        <div className="relative mx-auto grid max-w-[1380px] gap-12 lg:grid-cols-[.58fr_1.42fr] lg:gap-28">
          <div>
            <p className="eyebrow">The Atelier</p>
            <div className="mt-8 h-px w-full bg-gradient-to-r from-[#c99a3c]/55 to-transparent" />
            <p className="mt-7 max-w-sm text-base leading-8 text-white/52">Founder-led by design. Technology accelerates the work; human judgement decides what is worthy of the client.</p>
          </div>
          <div>
            <h2 className="font-[family-name:var(--font-cormorant)] text-[clamp(3.6rem,7vw,6.5rem)] leading-[.87] tracking-[-.045em]">A first impression should feel <span className="italic text-[#d6aa51]">inevitable.</span></h2>
            <p className="mt-8 max-w-3xl text-lg leading-9 text-[#c8c0b4]">Prime Presence Atelier shapes the visible layer of a business around credibility, distinction and confidence. The objective is not decoration. It is a presence people understand quickly and remember afterwards.</p>
            <Link href="/about" className="mt-10 inline-flex min-h-12 items-center gap-6 border-b border-[#c99a3c]/55 text-[10px] font-bold uppercase tracking-[.20em] text-[#e1b95f]">About the Atelier <span>→</span></Link>
          </div>
        </div>
      </section>

      <section className="border-b border-white/[.07] px-6 py-24 sm:px-10 sm:py-32 lg:px-16 lg:py-36">
        <div className="mx-auto max-w-[1380px]">
          <div className="grid gap-7 lg:grid-cols-[.58fr_1.42fr] lg:items-end">
            <p className="eyebrow">What we create</p>
            <h2 className="font-[family-name:var(--font-cormorant)] text-[clamp(3.3rem,6vw,5.7rem)] leading-[.9] tracking-[-.035em]">Focused services.<br/><span className="italic text-[#d4a850]">One visual standard.</span></h2>
          </div>
          <div className="mt-14 grid gap-4 lg:grid-cols-3">
            {offers.map(([number,title,body]) => (
              <article key={number} className="group min-h-[360px] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,.035),rgba(255,255,255,.009))] p-7 transition duration-500 hover:border-[#c99a3c]/42 hover:bg-[#0c0a07] sm:p-9">
                <div className="flex items-center justify-between"><p className="text-xs font-bold tracking-[.22em] text-[#c99a3c]">{number}</p><span className="h-px w-14 bg-[#c99a3c]/30 transition-all group-hover:w-24" /></div>
                <h3 className="mt-16 font-[family-name:var(--font-cormorant)] text-[2.65rem] leading-[.92] text-[#f4eee3]">{title}</h3>
                <p className="mt-6 text-base leading-8 text-white/55">{body}</p>
                <p className="mt-10 text-[10px] font-bold uppercase tracking-[.18em] text-[#e0b75f]">Discover the offer →</p>
              </article>
            ))}
          </div>
          <Link href="/services" className="mt-10 inline-flex min-h-14 items-center border border-[#c99a3c]/55 px-7 text-[10px] font-bold uppercase tracking-[.19em] text-[#e0b85f] transition hover:bg-[#c99a3c] hover:text-black">Explore All Services →</Link>
        </div>
      </section>

      <section className="relative border-b border-white/[.07] bg-[#080706] px-6 py-24 sm:px-10 sm:py-32 lg:px-16 lg:py-40">
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_77%_45%,rgba(201,154,60,.10),transparent_24rem)]" />
        <div className="relative mx-auto grid max-w-[1380px] items-center gap-16 lg:grid-cols-[1.08fr_.92fr] lg:gap-28">
          <div>
            <p className="eyebrow">Prime Presence Connect™</p>
            <h2 className="mt-6 font-[family-name:var(--font-cormorant)] text-[clamp(3.7rem,7vw,6.8rem)] leading-[.84] tracking-[-.045em]">Your presence,<span className="block italic text-[#d7ac54]">carried digitally.</span></h2>
            <p className="mt-8 max-w-2xl text-lg leading-9 text-[#c4bcaf]">A polished digital business card and mini-profile built for fast contact, QR access and the moment after a strong introduction.</p>
            <Link href="/connect" className="mt-10 inline-flex min-h-12 items-center gap-6 border-b border-[#c99a3c]/55 text-[10px] font-bold uppercase tracking-[.20em] text-[#dfb65c]">Explore Connect <span>→</span></Link>
          </div>
          <div className="mx-auto w-full max-w-[400px]">
            <div className="rounded-[46px] border border-[#c99a3c]/35 bg-[linear-gradient(155deg,#12100b,#070706)] p-3 shadow-[0_50px_140px_rgba(0,0,0,.62)]">
              <div className="aspect-[9/16] rounded-[38px] border border-white/[.08] bg-[radial-gradient(circle_at_50%_7%,rgba(201,154,60,.16),transparent_28%),#050504] p-7">
                <p className="text-center text-[10px] font-bold uppercase tracking-[.25em] text-[#d8ad55]">Prime Presence</p>
                <p className="mt-4 text-center font-[family-name:var(--font-cormorant)] text-4xl">Connect™</p>
                <div className="mx-auto mt-9 h-20 w-20 rounded-full border border-[#c99a3c]/35 bg-[#0c0a07] shadow-[0_0_45px_rgba(201,154,60,.09)]" />
                <div className="mt-10 space-y-3"><div className="h-14 rounded-xl border border-white/10 bg-white/[.025]"/><div className="h-14 rounded-xl border border-white/10 bg-white/[.025]"/><div className="h-14 rounded-xl border border-white/10 bg-white/[.025]"/></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/[.07] px-6 py-24 sm:px-10 sm:py-32 lg:px-16 lg:py-36">
        <div className="mx-auto max-w-[1380px]">
          <div className="grid gap-7 lg:grid-cols-[.58fr_1.42fr]"><p className="eyebrow">Process</p><h2 className="font-[family-name:var(--font-cormorant)] text-[clamp(3.2rem,6vw,5.6rem)] leading-[.9] tracking-[-.035em]">Clear enough to move quickly.<br/><span className="italic text-[#d3a750]">Disciplined enough to protect the result.</span></h2></div>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(([number,title,body]) => <article key={number} className="min-h-[280px] border border-white/[.09] bg-[#080807] p-7"><p className="text-xs font-bold tracking-[.22em] text-[#c99a3c]">{number}</p><h3 className="mt-12 font-[family-name:var(--font-cormorant)] text-4xl">{title}</h3><p className="mt-5 text-[15px] leading-8 text-white/52">{body}</p></article>)}
          </div>
        </div>
      </section>

      <section className="relative px-6 py-28 text-center sm:px-10 sm:py-36 lg:px-16 lg:py-44">
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(201,154,60,.08),transparent_28rem)]" />
        <div className="relative mx-auto max-w-5xl">
          <p className="eyebrow">Start something worth remembering</p>
          <h2 className="mt-8 font-[family-name:var(--font-cormorant)] text-[clamp(3.8rem,8vw,7.4rem)] leading-[.82] tracking-[-.05em]">Your presence should arrive <span className="italic text-[#d6aa51]">before you do.</span></h2>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-9 text-white/55">Tell us what you are building, changing or preparing to launch. We will tell you where the Atelier can create the strongest commercial impression.</p>
          <Link href="/contact" className="mt-11 inline-flex min-h-16 items-center border border-[#c99a3c]/75 bg-[#c99a3c]/[.045] px-9 text-[11px] font-bold uppercase tracking-[.2em] text-[#e4ba62] transition hover:bg-[#c99a3c] hover:text-black">Start a Project →</Link>
        </div>
      </section>
    </main>
  );
}
