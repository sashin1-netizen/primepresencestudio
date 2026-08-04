"use client";

import { useState } from "react";

export default function DiscoveryForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="rounded-[2rem] border border-[#C8A348]/20 bg-[#0a0a0a] p-8 shadow-[0_0_80px_rgba(200,163,72,0.12)]">
      <div className="mb-8 max-w-2xl">
        <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#C8A348]">
          AI Discovery Flow
        </p>
        <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-white sm:text-4xl">
          Capture the right brief instantly and route every enquiry to the right next step.
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="grid gap-5 lg:grid-cols-2">
        <label className="text-sm text-gray-300">
          <span className="mb-2 block font-semibold text-white">Business name</span>
          <input className="w-full rounded-xl border border-white/10 bg-[#111111] px-4 py-3 outline-none ring-0" placeholder="Your brand" />
        </label>
        <label className="text-sm text-gray-300">
          <span className="mb-2 block font-semibold text-white">Email</span>
          <input type="email" className="w-full rounded-xl border border-white/10 bg-[#111111] px-4 py-3 outline-none ring-0" placeholder="hello@company.com" />
        </label>
        <label className="text-sm text-gray-300 lg:col-span-2">
          <span className="mb-2 block font-semibold text-white">What are you building?</span>
          <textarea className="min-h-[140px] w-full rounded-xl border border-white/10 bg-[#111111] px-4 py-3 outline-none ring-0" placeholder="Describe your brand, goals, launch, or challenge." />
        </label>
        <label className="text-sm text-gray-300 lg:col-span-2">
          <span className="mb-2 block font-semibold text-white">Primary objective</span>
          <select className="w-full rounded-xl border border-white/10 bg-[#111111] px-4 py-3 outline-none ring-0">
            <option>Brand strategy</option>
            <option>Identity design</option>
            <option>Website design</option>
            <option>Launch campaign</option>
          </select>
        </label>

        <div className="lg:col-span-2">
          <button type="submit" className="rounded-lg bg-[#C8A348] px-6 py-3 font-semibold text-black transition hover:scale-105">
            Submit discovery request
          </button>
        </div>
      </form>

      {submitted && (
        <p className="mt-6 rounded-2xl border border-[#C8A348]/20 bg-[#111111] p-4 text-sm text-[#F6E7A3]">
          Your brief has been captured. The AI assistant will route this enquiry to the right service recommendation and follow-up sequence.
        </p>
      )}
    </section>
  );
}
