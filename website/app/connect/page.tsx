import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Prime Presence Connect — Coming Soon",
  description: "Prime Presence Connect is an upcoming premium mobile-first digital introduction product by Prime Presence Atelier.",
  alternates: { canonical: "/connect" },
};

const clues = [
  ["01", "Share", "One deliberate handoff. No searching, explaining or sending someone through a maze."],
  ["02", "Connect", "The details that matter, presented for the moment someone is ready to act."],
  ["03", "Remember", "A digital introduction designed to leave more than a saved contact behind."],
] as const;

export default function Page() {
  return (
    <PageShell eyebrow="Prime Presence product · In development" title="Something is coming." intro="We are building a different kind of digital introduction. We are not ready to show you all of it yet.">
      <section className="relative -mx-5 overflow-hidden border-y border-white/[.07] bg-[#030302] px-5 py-20 sm:-mx-8 sm:px-8 sm:py-28 lg:-mx-12 lg:px-12 lg:py-36">
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_72%_26%,rgba(204,158,65,.13),transparent_25%),radial-gradient(circle_at_15%_85%,rgba(255,255,255,.025),transparent_24%)]" />
        <div aria-hidden="true" className="luxury-grain absolute inset-0 opacity-45" />
        <div className="relative mx-auto max-w-[1180px]">
          <div className="grid gap-14 lg:grid-cols-[.88fr_1.12fr] lg:items-center lg:gap-24">
            <div>
              <div className="inline-flex items-center gap-3 border border-[#c99a3c]/28 bg-[#c99a3c]/[.045] px-3.5 py-2"><span className="h-1.5 w-1.5 rounded-full bg-[#dfb75d] shadow-[0_0_16px_rgba(223,183,93,.72)]"/><span className="text-[8px] font-bold uppercase tracking-[.22em] text-[#dfb75d]">Private preview · Coming soon</span></div>
              <p className="mt-8 text-[9px] font-bold uppercase tracking-[.25em] text-white/34">Prime Presence Connect™</p>
              <h2 className="mt-5 max-w-[9ch] font-[family-name:var(--font-cormorant)] text-[clamp(3.4rem,8vw,7rem)] font-medium leading-[.82] tracking-[-.045em] text-[#f7f0e5]">The moment after <span className="italic text-[#d7aa4f]">hello.</span></h2>
              <p className="mt-7 max-w-lg text-[15px] leading-7 text-white/54 sm:text-lg sm:leading-8">Someone asks who you are. What you do. How to reach you. What happens next should feel as considered as the introduction itself.</p>
            </div>

            <div className="relative mx-auto w-full max-w-[560px] overflow-hidden border border-[#c99a3c]/20 bg-[#080704] shadow-[0_35px_100px_rgba(0,0,0,.55)]">
              <div aria-hidden="true" className="absolute inset-x-0 top-[32%] h-px bg-[linear-gradient(90deg,transparent,rgba(223,183,93,.7),transparent)] shadow-[0_0_30px_rgba(223,183,93,.22)]" />
              <div aria-hidden="true" className="absolute -right-24 -top-24 h-64 w-64 rounded-full border border-[#c99a3c]/10" />
              <div className="relative aspect-[4/5] min-h-[390px] p-7 sm:aspect-[5/4] sm:min-h-0 sm:p-10">
                <div className="flex items-start justify-between"><div><p className="text-[8px] font-bold uppercase tracking-[.25em] text-[#c99a3c]">Project C</p><p className="mt-2 text-[9px] uppercase tracking-[.17em] text-white/26">Restricted preview</p></div><span className="text-[8px] font-bold uppercase tracking-[.18em] text-[#d8ae55]">01 / 03</span></div>
                <div className="absolute left-7 right-7 top-[38%] sm:left-10 sm:right-10"><p className="font-[family-name:var(--font-cormorant)] text-[2.6rem] leading-[.92] text-[#f2eadf] sm:text-6xl">Not a card.<br/><span className="text-white/30">Not a website.</span></p></div>
                <div className="absolute bottom-7 left-7 right-7 sm:bottom-10 sm:left-10 sm:right-10"><div className="mb-5 h-px bg-white/[.08]"/><div className="flex items-end justify-between gap-5"><p className="max-w-[15rem] text-xs leading-6 text-white/42 sm:text-sm">A new layer between meeting someone and being remembered.</p><span className="font-[family-name:var(--font-cormorant)] text-3xl italic text-[#d4a64a] sm:text-4xl">Soon.</span></div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative mt-20 sm:mt-28">
        <div className="grid gap-10 lg:grid-cols-[.55fr_1.45fr] lg:gap-20">
          <div><p className="eyebrow">Three clues</p><h2 className="section-title mt-4">We can tell you this much.</h2><p className="mt-5 max-w-sm text-sm leading-7 text-white/42">The finished experience stays under wraps. The intention does not.</p></div>
          <div className="divide-y divide-white/[.08] border-y border-white/[.08]">{clues.map(([number,title,body]) => <article key={number} className="group grid gap-4 py-8 sm:grid-cols-[60px_.65fr_1.35fr] sm:items-center sm:py-10"><p className="text-[9px] font-bold tracking-[.2em] text-[#c99a3c]">{number}</p><h3 className="font-[family-name:var(--font-cormorant)] text-4xl italic text-[#f1e9dd] transition-colors group-hover:text-[#d8ad55]">{title}.</h3><p className="max-w-xl text-sm leading-7 text-white/48 sm:text-[15px]">{body}</p></article>)}</div>
        </div>
      </section>

      <section className="relative mt-20 overflow-hidden border border-[#c99a3c]/16 bg-[#070604] px-6 py-16 text-center sm:mt-28 sm:px-10 sm:py-24">
        <div aria-hidden="true" className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#c99a3c]/[.07]" />
        <div aria-hidden="true" className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[.035]" />
        <div className="relative mx-auto max-w-3xl"><p className="text-[8px] font-bold uppercase tracking-[.25em] text-[#d5a94f]">Prime Presence Connect™</p><h2 className="mt-6 font-[family-name:var(--font-cormorant)] text-[clamp(3rem,7vw,6rem)] font-medium leading-[.88] tracking-[-.04em] text-[#f4ede2]">The introduction is <span className="italic text-[#d8ac52]">changing.</span></h2><p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/45 sm:text-base">No launch date. No unfinished demo. We will reveal Connect when it is ready to carry the Prime Presence name.</p><div className="mx-auto mt-9 inline-flex items-center gap-3 border border-[#c99a3c]/30 px-4 py-2.5"><span className="h-1.5 w-1.5 rounded-full bg-[#d9ae55] shadow-[0_0_14px_rgba(217,174,85,.65)]"/><span className="text-[8px] font-bold uppercase tracking-[.22em] text-[#ddb45b]">Coming Soon</span></div></div>
      </section>

      <section className="mt-16 sm:mt-20"><div className="flex flex-col gap-6 border-t border-white/[.08] pt-8 sm:flex-row sm:items-center sm:justify-between"><div><p className="eyebrow">While we build</p><h2 className="mt-3 font-[family-name:var(--font-cormorant)] text-3xl text-[#f3ece2] sm:text-4xl">The Atelier is open.</h2></div><Link href="/services" className="button-primary shrink-0">Explore Current Services</Link></div></section>
    </PageShell>
  );
}
