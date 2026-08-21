import Image from "next/image";
import Link from "next/link";
import RevealSection from "./motion/RevealSection";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function StoryPanel() {
  return (
    <RevealSection>
      <section className="relative overflow-hidden border-y border-white/[.06] bg-[#070706]">
        <div className="mx-auto grid max-w-[1500px] lg:min-h-[680px] lg:grid-cols-[.95fr_1.05fr]">
          <div className="relative min-h-[390px] overflow-hidden border-b border-white/[.06] lg:min-h-full lg:border-b-0 lg:border-r">
            <Image
              src={`${basePath}/media/ppa-studio-scene.webp`}
              alt="Dark premium creative studio interior with warm gold lighting and black furnishings"
              fill
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(2,2,2,.72),transparent_50%),linear-gradient(90deg,transparent_55%,rgba(4,4,3,.35))]" />
            <div className="absolute bottom-8 left-8 border-l border-[#c99b43]/55 pl-4 text-[9px] font-semibold uppercase tracking-[.32em] text-white/55 sm:left-12">
              Founder-led · Durban · Worldwide
            </div>
          </div>

          <div className="relative flex items-center px-6 py-16 sm:px-10 sm:py-20 lg:px-16 xl:px-24">
            <div aria-hidden="true" className="absolute inset-0 opacity-25 [background-image:radial-gradient(circle_at_80%_30%,rgba(211,166,71,.09),transparent_26%)]" />
            <div className="relative max-w-3xl">
              <p className="text-[10px] font-semibold uppercase tracking-[.34em] text-[#d0a64d]">About the atelier</p>
              <h2 className="mt-6 font-[family-name:var(--font-cormorant)] text-[clamp(2.9rem,5vw,5.5rem)] leading-[.94] tracking-[-.03em] text-[#f2eee5]">
                A studio with
                <span className="block bg-gradient-to-r from-[#f0d482] via-[#bc8325] to-[#e5bd5e] bg-clip-text italic text-transparent">intent & identity.</span>
              </h2>
              <div className="mt-7 h-px w-20 bg-[#c99b43]" />
              <p className="mt-7 max-w-2xl text-base leading-8 text-[#c6c0b5]">We are not here to make a business look busy. We build the first impression around what it needs to communicate: credibility, clarity and a sense that every detail belongs.</p>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/48">Prime Presence Atelier stays founder-led by design. AI accelerates research, variation and quality control; human judgement approves every client-facing result.</p>

              <div className="mt-10 grid gap-5 border-t border-white/[.08] pt-8 sm:grid-cols-3">
                {[["01", "Strategic by design"], ["02", "Details that define"], ["03", "Impact that lasts"]].map(([number, label]) => (
                  <div key={number} className="border-l border-[#c99b43]/35 pl-4">
                    <p className="text-[10px] font-semibold tracking-[.22em] text-[#c99b43]">{number}</p>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-[.14em] text-[#eee9df]">{label}</p>
                  </div>
                ))}
              </div>

              <Link href="/about" className="mt-10 inline-flex min-h-11 items-center gap-6 border border-[#c99b43]/55 px-6 text-[10px] font-semibold uppercase tracking-[.18em] text-[#e1bc65] transition-colors hover:bg-[#c99b43] hover:text-black">Our Story <span aria-hidden="true">→</span></Link>
            </div>
          </div>
        </div>
      </section>
    </RevealSection>
  );
}
