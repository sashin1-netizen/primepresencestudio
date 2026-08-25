"use client";

import RevealSection from "./motion/RevealSection";

const steps = [
  {
    title: "Qualify",
    text: "Confirm the goal, decision-maker, timing, budget readiness and whether the atelier is genuinely the right fit.",
  },
  {
    title: "Define",
    text: "Capture the brief, required assets, scope, exclusions, price, revisions and approval path before production begins.",
  },
  {
    title: "Create",
    text: "Build the agreed identity, digital product or launch assets with AI-assisted production behind the scenes and human judgement in front.",
  },
  {
    title: "Approve & hand over",
    text: "Run internal QA, collect controlled feedback, record final approval and deliver organised files, links and usage guidance after final payment.",
  },
];

export default function Process() {
  return (
    <section id="process" className="mx-auto max-w-7xl px-4 py-20 sm:px-8 sm:py-24 lg:px-12">
      <RevealSection>
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#C8A348]">Process</p>
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-white sm:text-5xl">
            Premium work needs more control, not more theatre.
          </h2>
          <p className="mt-5 max-w-2xl leading-8 text-gray-400">
            Clear scope, one approval path and versioned work protect the quality of the result and the time on both sides.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div aria-hidden="true" className="relative min-h-80 overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_25%_25%,rgba(200,163,72,.2),transparent_28%),linear-gradient(145deg,#12100b,#060606)] p-8">
            <div className="absolute inset-10 rounded-full border border-[#c8a348]/20" />
            <div className="absolute inset-20 rounded-full border border-white/10" />
            <div className="absolute inset-[35%] rotate-45 border border-[#c8a348]/40 bg-[#c8a348]/10" />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {steps.map((step, index) => (
              <div key={step.title} className="rounded-3xl border border-white/10 bg-white/5 p-7">
                <div className="mb-5 text-4xl font-semibold text-[#C8A348]">0{index + 1}</div>
                <h3 className="mb-3 font-[family-name:var(--font-cormorant)] text-2xl text-white">{step.title}</h3>
                <p className="text-sm leading-7 text-gray-300">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>
    </section>
  );
}
