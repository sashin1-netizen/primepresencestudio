"use client";

import { useState } from "react";

const quickActions = [
  "Recommend a service",
  "Generate a brand brief",
  "Plan a website",
  "Book a discovery call",
];

export default function AssistantPanel() {
  const [selected, setSelected] = useState("Recommend a service");

  return (
    <section className="rounded-[2rem] border border-[#C8A348]/20 bg-[#0b0b0b] p-8 shadow-[0_0_80px_rgba(200,163,72,0.12)]">
      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#C8A348]">
            AI Assistant
          </p>
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-white sm:text-4xl">
            Ask Prime Presence AI for guidance, scope, or your next move.
          </h2>
        </div>
        <div className="rounded-full border border-[#C8A348]/30 bg-[#C8A348]/10 px-4 py-2 text-sm text-[#F6E7A3]">
          24/7 intelligent support
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[1.5rem] border border-white/10 bg-black/40 p-6">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[#C8A348]">
            Suggested prompts
          </p>
          <div className="flex flex-wrap gap-3">
            {quickActions.map((action) => (
              <button
                key={action}
                onClick={() => setSelected(action)}
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  selected === action
                    ? "border-[#C8A348] bg-[#C8A348] text-black"
                    : "border-white/10 text-gray-300 hover:border-[#C8A348]/40 hover:text-[#F6E7A3]"
                }`}
              >
                {action}
              </button>
            ))}
          </div>

          <div className="mt-8 rounded-[1.25rem] border border-[#C8A348]/20 bg-[#111111] p-5 text-sm leading-7 text-gray-300">
            <p className="mb-2 font-semibold text-white">Recommended next step</p>
            <p>
              {selected === "Recommend a service"
                ? "We recommend a Brand Strategy sprint paired with a premium identity system for elevated positioning."
                : selected === "Generate a brand brief"
                  ? "We can generate a concise creative brief covering positioning, voice, audience, and launch goals."
                  : selected === "Plan a website"
                    ? "We can map a conversion-focused website architecture with premium storytelling and clear CTAs."
                    : "A discovery call will help us understand your goals, timeline, and launch priorities."}
            </p>
          </div>
        </div>

        <div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-[#111111] to-[#050505] p-6">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-[#C8A348]">
            Live AI experience
          </p>
          <div className="space-y-4">
            <div className="rounded-2xl border border-[#C8A348]/20 bg-[#151515] p-4 text-sm text-gray-300">
              <p className="mb-2 font-semibold text-white">AI Brand Consultant</p>
              <p>Personalized recommendations based on your business stage, audience, and ambition.</p>
            </div>
            <div className="rounded-2xl border border-[#C8A348]/20 bg-[#151515] p-4 text-sm text-gray-300">
              <p className="mb-2 font-semibold text-white">AI Discovery Assistant</p>
              <p>Captures project context, objectives, and desired outcomes before a consultation.</p>
            </div>
            <div className="rounded-2xl border border-[#C8A348]/20 bg-[#151515] p-4 text-sm text-gray-300">
              <p className="mb-2 font-semibold text-white">AI Quote Generator</p>
              <p>Instantly estimates scope, timing, and investment for high-intent enquiries.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
