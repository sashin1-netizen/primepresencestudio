import Link from "next/link";
import RevealSection from "./motion/RevealSection";

export default function StoryPanel() {
  return (
    <RevealSection>
      <section className="relative overflow-hidden border-y border-white/[.06] bg-[#070706]">
        <div aria-hidden="true" className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_20%_20%,rgba(211,166,71,.09),transparent_28%),linear-gradient(125deg,transparent_0_48%,rgba(255,255,255,.018)_48%_49%,transparent_49%_100%)]" />
        <div className="mx-auto grid max-w-[1500px] lg:min-h-[680px] lg:grid-cols-[.9fr_1.1fr]">
          <div className="relative min-h-[360px] overflow-hidden border-b border-white/[.06] bg-[radial-gradient(circle_at_52%_34%,rgba(217,174,83,.12),transparent_22%),linear-gradient(145deg,#17130d_0%,#0a0907_48%,#030303_100%)] lg:min-h-full lg:border-b-0 lg:border-r">
            <div className="absolute inset-0 opacity-50 [background-image:linear-gradient(110deg,transparent_0_46%,rgba(211,164,67,.055)_46%_47%,transparent_47%_100%)]" />
            <div className="absolute left-[12%] top-[14%] h-[68%] w-[68%] border border-[#c99b43]/12" />
            <div className="absolute bottom-[14%] left-[18%] right-[12%] h-[44%] border border-white/[.05] bg-black/25 shadow-[0_35px_90px_rgba(0,0,0,.6)]">
              <div className="absolute left-[12%] top-[20%] h-[56%] w-[42%] bg-[linear-gradient(150deg,#2b2418,#0b0a08)] shadow-[0_20px_45px_rgba(0,0,0,.55)]" />
              <div className="absolute bottom-[12%] right-[8%] h-[6%] w-[38%] rounded-full bg-[#b68937]/12 blur-sm" />
              <div className="absolute bottom-[12%] left-[10%] h-16 w-12 rounded-b-xl border border-[#c99b43]/30 bg-[#0a0907]">
                <span className="absolute inset-x-0 top-4 text-center font-[family-name:var(--font-cormorant)] text-xs text-[#d2a84c]">P</span>
              </div>
            </div>
            <div className="absolute bottom-8 left-8 text-[9px] font-semibold uppercase tracking-[.32em] text-white/30 sm:left-12">
              Founder-led · Durban · Worldwide
            </div>
          </div>

          <div className="relative flex items-center px-6 py-16 sm:px-10 sm:py-20 lg:px-16 xl:px-24">
            <div className="max-w-3xl">
              <p className="text-[10px] font-semibold uppercase tracking-[.34em] text-[#d0a64d]">About the atelier</p>
              <h2 className="mt-6 font-[family-name:var(--font-cormorant)] text-[clamp(2.7rem,5vw,5.4rem)] leading-[.95] tracking-[-.03em] text-[#f2eee5]">
                A studio with
                <span className="block bg-gradient-to-r from-[#f0d482] via-[#bc8325] to-[#e5bd5e] bg-clip-text italic text-transparent">
                  intent & identity.
                </span>
              </h2>
              <div className="mt-7 h-px w-20 bg-[#c99b43]" />
              <p className="mt-7 max-w-2xl text-base leading-8 text-[#c6c0b5]">
                We are not here to make a business look busy. We build the first impression around what it needs to communicate: credibility, clarity and a sense that every detail belongs.
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/48">
                Prime Presence Atelier stays founder-led by design. AI accelerates research, variation and quality control; human judgement approves every client-facing result.
              </p>

              <div className="mt-10 grid gap-5 border-t border-white/[.08] pt-8 sm:grid-cols-3">
                {[
                  ["01", "Strategic by design"],
                  ["02", "Details that define"],
                  ["03", "Impact that lasts"],
                ].map(([number, label]) => (
                  <div key={number} className="border-l border-[#c99b43]/35 pl-4">
                    <p className="text-[10px] font-semibold tracking-[.22em] text-[#c99b43]">{number}</p>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-[.14em] text-[#eee9df]">{label}</p>
                  </div>
                ))}
              </div>

              <Link href="/about" className="mt-10 inline-flex min-h-11 items-center gap-6 border border-[#c99b43]/55 px-6 text-[10px] font-semibold uppercase tracking-[.18em] text-[#e1bc65] transition-colors hover:bg-[#c99b43] hover:text-black">
                Our Story <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </RevealSection>
  );
}
