"use client";

import Image from "next/image";
import RevealSection from "./motion/RevealSection";

const steps = [
  {
    title: "Discover",
    text: "We align on your vision, audience and market opportunity to create a foundation of intent.",
  },
  {
    title: "Design",
    text: "We translate strategy into a visual language with elegance, clarity and emotional pull.",
  },
  {
    title: "Develop",
    text: "We bring the experience to life through refined digital execution and polished storytelling.",
  },
  {
    title: "Launch",
    text: "We deliver your brand with confidence, ready to make a lasting first impression.",
  },
];

export default function Process() {
  return (
    <section id="process" className="mx-auto max-w-7xl px-4 py-20 sm:px-8 sm:py-24 lg:px-12">
      <RevealSection>
      <div className="mb-12 max-w-3xl">
        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#C8A348]">
          Process
        </p>
        <h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-white sm:text-5xl">
          A luxury process built for clarity, momentum and lasting impact.
        </h2>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b0b0b] p-2">
          <Image
            src="/images/media/process-visual.svg"
            alt="Luxury creative process visual"
            width={1200}
            height={800}
            className="h-full w-full rounded-[1.5rem] object-cover"
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {steps.map((step, index) => (
            <div key={step.title} className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <div className="mb-6 text-5xl font-semibold text-[#C8A348]">0{index + 1}</div>
              <h3 className="mb-3 font-[family-name:var(--font-cormorant)] text-2xl text-white">
                {step.title}
              </h3>
              <p className="text-sm leading-7 text-gray-300">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
      </RevealSection>
    </section>
  );
}
