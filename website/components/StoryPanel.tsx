import Link from "next/link";
import RevealSection from "./motion/RevealSection";

export default function StoryPanel() {
  return (
    <RevealSection>
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-8 sm:py-24 lg:px-12">
        <div className="rounded-[2rem] border border-[#C8A348]/20 bg-gradient-to-br from-[#111111] to-[#050505] p-10 shadow-[0_0_80px_rgba(200,163,72,0.12)] sm:p-14">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#C8A348]">Luxury Experience</p>
              <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-white sm:text-4xl">
                A premium digital studio designed to feel as refined as the brands it elevates.
              </h2>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-black/30 p-8 text-sm leading-8 text-gray-300">
              <p>
                From first impression to final delivery, every interaction is shaped to feel deliberate, editorial and memorable.
              </p>
              <Link href="/process" className="mt-6 inline-flex text-sm font-semibold uppercase tracking-[0.25em] text-[#C8A348] hover:text-[#F6E7A3]">
                See the process →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </RevealSection>
  );
}
