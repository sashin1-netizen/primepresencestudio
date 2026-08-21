import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Prime Presence Connect — Coming Soon",
  description: "Prime Presence Connect is an upcoming premium mobile-first digital presence product by Prime Presence Atelier.",
  alternates: { canonical: "/connect" },
};

const principles = [
  ["01", "A considered introduction", "A focused digital handoff designed to make a strong first impression without sending someone through a full website."],
  ["02", "Built for real moments", "Being shaped around meetings, networking, referrals, WhatsApp introductions and in-person sharing."],
  ["03", "Designed as a system", "Connect is being developed as a reusable Prime Presence product rather than a one-off profile page."],
] as const;

export default function Page() {
  return (
    <PageShell
      eyebrow="Prime Presence product"
      title="Prime Presence Connect™"
      intro="A new digital introduction experience is in development. Connect is not available yet — we are refining it before release."
    >
      <section className="relative overflow-hidden border-y border-white/[.08] bg-[#070605] px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(201,154,60,.12),transparent_32%),radial-gradient(circle_at_20%_80%,rgba(255,255,255,.035),transparent_28%)]" />
        <div className="relative mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:gap-20">
          <div>
            <div className="inline-flex items-center gap-3 border border-[#c99a3c]/35 bg-[#c99a3c]/[.06] px-4 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#d9b35e] shadow-[0_0_14px_rgba(217,179,94,.7)]" />
              <span className="text-[9px] font-bold uppercase tracking-[.22em] text-[#e1bd68]">Coming Soon</span>
            </div>
            <h2 className="mt-6 max-w-[9ch] font-[family-name:var(--font-cormorant)] text-[clamp(3.2rem,7vw,6.2rem)] font-medium leading-[.86] tracking-[-.04em] text-[#f5eee3]">
              Your presence, <span className="italic text-[#d5aa52]">carried digitally.</span>
            </h2>
            <p className="mt-6 max-w-xl text-[15px] leading-7 text-white/58 sm:text-lg sm:leading-8">
              We are developing Connect as a polished mobile-first companion for introductions, networking and direct contact. The product remains in development until the experience meets the Atelier standard.
            </p>
          </div>

          <div className="relative min-h-[300px] overflow-hidden border border-[#c99a3c]/18 bg-[#050504] p-7 sm:min-h-[360px] sm:p-10">
            <div aria-hidden="true" className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-[#c99a3c]/12" />
            <div aria-hidden="true" className="absolute -bottom-24 -left-14 h-72 w-72 rounded-full border border-white/[.05]" />
            <div className="relative flex h-full min-h-[240px] flex-col justify-between">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[.24em] text-[#c99a3c]">Prime Presence</p>
                <p className="mt-3 font-[family-name:var(--font-cormorant)] text-4xl text-[#f3ece1] sm:text-5xl">Connect™</p>
              </div>
              <div className="my-10 h-px w-full bg-[linear-gradient(90deg,#c99a3c,rgba(201,154,60,.15),transparent)]" />
              <div className="flex items-end justify-between gap-6">
                <p className="max-w-xs text-sm leading-7 text-white/46">Currently being crafted, tested and refined before public release.</p>
                <span className="font-[family-name:var(--font-cormorant)] text-6xl italic text-[#c99a3c]/24 sm:text-7xl">Soon.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16 sm:mt-20">
        <div className="grid gap-6 lg:grid-cols-[.55fr_1.45fr] lg:gap-16">
          <div>
            <p className="eyebrow">In development</p>
            <h2 className="section-title mt-4">What we are building towards.</h2>
          </div>
          <div className="divide-y divide-white/[.08] border-y border-white/[.08]">
            {principles.map(([number, title, body]) => (
              <article key={number} className="grid gap-3 py-6 sm:grid-cols-[54px_.7fr_1.3fr] sm:items-start sm:py-8">
                <p className="text-[9px] font-bold tracking-[.2em] text-[#c99a3c]">{number}</p>
                <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-[#f0e9df] sm:text-3xl">{title}</h3>
                <p className="text-sm leading-7 text-white/50 sm:text-[15px]">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-16 border border-white/[.08] bg-white/[.015] px-6 py-9 sm:mt-20 sm:px-10 sm:py-11">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="eyebrow">For now</p>
            <h2 className="mt-3 font-[family-name:var(--font-cormorant)] text-3xl text-[#f3ece2] sm:text-4xl">Need something ready today?</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/50">Explore our current brand identity and digital presence services while Connect remains in development.</p>
          </div>
          <Link href="/services" className="button-primary shrink-0">Explore Services</Link>
        </div>
      </section>
    </PageShell>
  );
}
