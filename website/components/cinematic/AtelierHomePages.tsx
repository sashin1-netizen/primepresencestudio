"use client";

import Link from "next/link";

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
  return (
    <main id="main-content" className="bg-[#050504] text-[#f3eee5]">
      <section className="relative min-h-[100svh] overflow-hidden border-b border-white/[.07] bg-[#050504]">
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_78%_20%,rgba(201,154,60,.16),transparent_24%),radial-gradient(ellipse_at_55%_52%,rgba(114,83,39,.11),transparent_32%),linear-gradient(135deg,#050504_0%,#090806_48%,#030303_100%)]" />
        <div aria-hidden="true" className="absolute right-[-16%] top-[7%] h-[58vw] max-h-[620px] min-h-[310px] w-[58vw] min-w-[310px] rotate-[16deg] border border-[#c99a3c]/10 bg-[linear-gradient(135deg,rgba(201,154,60,.04),transparent_45%)] shadow-[0_0_120px_rgba(201,154,60,.06)]" />
        <div aria-hidden="true" className="absolute left-0 top-[28%] h-px w-[42%] bg-gradient-to-r from-transparent via-[#c99a3c]/25 to-transparent" />
        <div className="relative mx-auto flex min-h-[100svh] max-w-[1540px] items-center px-6 pb-14 pt-28 sm:px-10 md:px-12 lg:px-16">
          <div className="max-w-[760px]">
            <div className="mb-5 flex items-center gap-3 text-[8px] font-semibold uppercase tracking-[.28em] text-[#d8ad55] sm:text-[10px]"><span className="h-px w-10 bg-[#c99a3c]/70" /> Prime Presence Atelier™</div>
            <h1 className="font-[family-name:var(--font-cormorant)] text-[clamp(4rem,16vw,6rem)] font-medium leading-[.80] tracking-[-.055em] text-[#f6f0e6] md:text-[clamp(6rem,8vw,9rem)]">We craft<span className="block bg-gradient-to-r from-[#f2d27c] via-[#c98d2d] to-[#e2b75d] bg-clip-text italic text-transparent">presence.</span></h1>
            <p className="mt-5 text-[8px] font-semibold uppercase tracking-[.23em] text-white/55 sm:text-[10px]">Designed to Be Remembered.™</p>
            <p className="mt-5 max-w-[34rem] text-[14px] leading-7 text-[#ddd6cb] sm:text-base sm:leading-8">Identity, digital presence and launch experiences for businesses that refuse to blend in.</p>
            <div className="mt-7 grid gap-3 sm:flex"><Link href="/contact" className="inline-flex min-h-14 items-center justify-between border border-[#c99a3c]/90 bg-[#c99a3c]/[.06] px-6 text-[9px] font-semibold uppercase tracking-[.16em] text-[#edca76] sm:min-w-56">Start a Project <span>→</span></Link><Link href="/work" className="inline-flex min-h-14 items-center justify-center border border-white/15 px-6 text-[9px] font-semibold uppercase tracking-[.14em] text-white/70">Explore Work</Link></div>
            <p className="mt-6 text-[7px] font-semibold uppercase tracking-[.18em] text-white/35 sm:text-[9px]">{location} · Worldwide remote delivery</p>
          </div>
        </div>
        <div aria-hidden="true" className="absolute bottom-0 left-1/2 h-20 w-px bg-gradient-to-b from-[#c99a3c]/45 to-transparent" />
      </section>

      <section className="border-b border-white/[.07] px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36"><div className="mx-auto grid max-w-[1380px] gap-12 lg:grid-cols-[.62fr_1.38fr] lg:gap-24"><div><p className="text-[9px] font-semibold uppercase tracking-[.30em] text-[#d2a54b]">The Atelier</p><div className="mt-8 h-px w-full bg-gradient-to-r from-[#c99a3c]/55 to-transparent"/><p className="mt-6 max-w-sm text-sm leading-7 text-white/42">Founder-led by design. Technology accelerates the work; human judgement controls what reaches the client.</p></div><div><h2 className="font-[family-name:var(--font-cormorant)] text-[clamp(3rem,6vw,5.6rem)] leading-[.90] tracking-[-.04em]">A first impression should feel <span className="italic text-[#d6aa51]">intentional.</span></h2><p className="mt-7 max-w-3xl text-base leading-8 text-[#bbb4a8]">Prime Presence Atelier shapes the visible layer of a business around credibility, distinction and confidence. The goal is not decoration. It is a presence people recognise, understand and remember.</p><Link href="/about" className="mt-9 inline-flex items-center gap-6 border-b border-[#c99a3c]/55 pb-2 text-[9px] font-semibold uppercase tracking-[.20em] text-[#dbb45f]">About the Atelier <span>→</span></Link></div></div></section>

      <section className="border-b border-white/[.07] px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-32"><div className="mx-auto max-w-[1380px]"><div className="grid gap-6 border-b border-white/[.10] pb-10 lg:grid-cols-[.62fr_1.38fr]"><p className="text-[9px] font-semibold uppercase tracking-[.30em] text-[#d2a54b]">What we create</p><h2 className="font-[family-name:var(--font-cormorant)] text-[clamp(2.8rem,5vw,4.9rem)] leading-[.92]">Focused services. One visual standard.</h2></div><div>{offers.map(([number,title,body]) => <article key={number} className="grid gap-4 border-b border-white/[.08] py-8 sm:grid-cols-[72px_1fr] lg:grid-cols-[100px_.8fr_1.2fr] lg:items-start lg:py-10"><p className="text-[9px] font-semibold tracking-[.22em] text-[#c99a3c]">{number}</p><h3 className="font-[family-name:var(--font-cormorant)] text-3xl text-[#f3eee5] sm:text-4xl">{title}</h3><p className="max-w-2xl text-sm leading-7 text-white/48 lg:pt-2">{body}</p></article>)}</div><Link href="/services" className="mt-10 inline-flex items-center gap-6 border border-[#c99a3c]/55 px-6 py-4 text-[9px] font-semibold uppercase tracking-[.19em] text-[#dbb45f]">Explore Services <span>→</span></Link></div></section>

      <section className="border-b border-white/[.07] bg-[#080706] px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36"><div className="mx-auto grid max-w-[1380px] items-center gap-14 lg:grid-cols-[1.05fr_.95fr] lg:gap-24"><div><p className="text-[9px] font-semibold uppercase tracking-[.30em] text-[#d2a54b]">Prime Presence Connect™</p><h2 className="mt-5 font-[family-name:var(--font-cormorant)] text-[clamp(3rem,6vw,5.8rem)] leading-[.88]">Your presence,<span className="block italic text-[#d7ac54]">carried digitally.</span></h2><p className="mt-7 max-w-2xl text-base leading-8 text-[#bbb4a8]">A polished digital business card and mini-profile built around fast contact actions, QR access and a professional mobile-first experience.</p><Link href="/connect" className="mt-9 inline-flex items-center gap-6 border-b border-[#c99a3c]/55 pb-2 text-[9px] font-semibold uppercase tracking-[.20em] text-[#dbb45f]">Explore Connect <span>→</span></Link></div><div className="mx-auto w-full max-w-[390px]"><div className="rounded-[42px] border border-[#c99a3c]/30 bg-[radial-gradient(circle_at_50%_0%,rgba(201,154,60,.17),transparent_34%),#090807] p-4 shadow-[0_45px_120px_rgba(0,0,0,.58)]"><div className="aspect-[9/16] rounded-[32px] border border-white/[.08] bg-[#060605] p-6"><p className="text-center text-[8px] font-semibold uppercase tracking-[.25em] text-[#d8ad55]">Prime Presence</p><p className="mt-4 text-center font-[family-name:var(--font-cormorant)] text-3xl">Connect™</p><div className="mt-10 space-y-3"><div className="h-12 border border-white/10 bg-white/[.025]"/><div className="h-12 border border-white/10 bg-white/[.025]"/><div className="h-12 border border-white/10 bg-white/[.025]"/></div></div></div></div></div></section>

      <section className="border-b border-white/[.07] px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-32"><div className="mx-auto max-w-[1380px]"><div className="grid gap-6 lg:grid-cols-[.62fr_1.38fr]"><p className="text-[9px] font-semibold uppercase tracking-[.30em] text-[#d2a54b]">Process</p><h2 className="font-[family-name:var(--font-cormorant)] text-[clamp(2.8rem,5vw,4.9rem)] leading-[.92]">Clear enough to move quickly. Disciplined enough to protect the result.</h2></div><div className="mt-12 grid gap-px bg-white/[.08] sm:grid-cols-2 lg:grid-cols-4">{steps.map(([number,title,body]) => <article key={number} className="min-h-[220px] bg-[#050504] p-7"><p className="text-[9px] font-semibold tracking-[.22em] text-[#c99a3c]">{number}</p><h3 className="mt-8 font-[family-name:var(--font-cormorant)] text-3xl">{title}</h3><p className="mt-4 text-sm leading-7 text-white/42">{body}</p></article>)}</div></div></section>

      <section className="px-6 py-24 text-center sm:px-10 sm:py-32 lg:px-16 lg:py-40"><div className="mx-auto max-w-4xl"><p className="text-[9px] font-semibold uppercase tracking-[.30em] text-[#d2a54b]">Start something worth remembering</p><h2 className="mt-6 font-[family-name:var(--font-cormorant)] text-[clamp(3rem,7vw,6.3rem)] leading-[.88]">Your presence should arrive <span className="italic text-[#d6aa51]">before you do.</span></h2><p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-white/45">Tell us what you are building, changing or preparing to launch. We will tell you whether the Atelier is the right fit.</p><Link href="/contact" className="mt-10 inline-flex min-h-14 items-center border border-[#c99a3c]/70 px-8 text-[9px] font-semibold uppercase tracking-[.20em] text-[#dfb861]">Start a Project →</Link></div></section>
    </main>
  );
}
