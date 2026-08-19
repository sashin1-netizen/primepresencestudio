import Link from "next/link";
import RevealSection from "./motion/RevealSection";

export default function StoryPanel() {
  return (
    <RevealSection>
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-8 sm:py-24 lg:px-12">
        <div className="rounded-[2rem] border border-[#C8A348]/20 bg-gradient-to-br from-[#111111] to-[#050505] p-8 shadow-[0_0_80px_rgba(200,163,72,0.10)] sm:p-14">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#C8A348]">Why presence matters</p>
              <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-white sm:text-5xl">
                Looking established is not vanity. It is part of earning the first yes.
              </h2>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-black/30 p-7 text-sm leading-8 text-gray-300 sm:p-8">
              <p>
                A customer often meets your logo, WhatsApp profile, social post or website before they meet you. Prime Presence Atelier brings those moments into one deliberate system so the business feels clear, credible and consistent wherever the introduction happens.
              </p>
              <p className="mt-4 text-gray-400">
                The studio stays founder-led by design: direct communication, controlled scope and human approval on every client-facing output.
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
