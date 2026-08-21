import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import AtelierVisual from "@/components/AtelierVisual";

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
      <section className="relative -mx-5 overflow-hidden border-y border-white/[.07] bg-[#030302] px-5 py-16 sm:-mx-8 sm:px-8 sm:py-24 lg:-mx-12 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1180px] gap-12 lg:grid-cols-[.78fr_1.22fr] lg:items-center lg:gap-20">
          <div>
            <div className="inline-flex items-center gap-3 border border-[#c99a3c]/28 bg-[#c99a3c]/[.045] px-3.5 py-2"><span className="h-1.5 w-1.5 rounded-full bg-[#dfb75d] shadow-[0_0_16px_rgba(223,183,93,.72)]"/><span className="text-[8px] font-bold uppercase tracking-[.22em] text-[#dfb75d]">Private preview · Coming soon</span></div>
            <p className="mt-8 text-[9px] font-bold uppercase tracking-[.25em] text-white/34">Prime Presence Connect™</p>
            <h2 className="mt-5 max-w-[9ch] font-[family-name:var(--font-cormorant)] text-[clamp(3.4rem,8vw,7rem)] font-medium leading-[.82] tracking-[-.045em] text-[#f7f0e5]">The moment after <span className="italic text-[#d7aa4f]">hello.</span></h2>
            <p className="mt-7 max-w-lg text-[15px] leading-7 text-white/54 sm:text-lg sm:leading-8">Someone asks who you are. What you do. How to reach you. What happens next should feel as considered as the introduction itself.</p>
          </div>
          <AtelierVisual variant="connect" label="Abstract preview of the upcoming Prime Presence Connect mobile experience" />
        </div>
      </section>

      <section className="mt-20 sm:mt-28">
        <div className="grid gap-10 lg:grid-cols-[.48fr_1.52fr] lg:gap-20">
          <div><p className="eyebrow">Three clues</p><h2 className="section-title mt-4">We can tell you this much.</h2><p className="mt-5 max-w-sm text-sm leading-7 text-white/42">The finished experience stays under wraps. The intention does not.</p></div>
          <div className="grid gap-4 md:grid-cols-3">{clues.map(([number,title,body]) => <article key={number} className="relative min-h-[310px] overflow-hidden border border-white/[.08] bg-[#080706] p-6"><p className="text-[9px] font-bold tracking-[.2em] text-[#c99a3c]">{number}</p><div className="absolute right-5 top-5 h-20 w-20 rounded-full border border-[#c99a3c]/10"/><h3 className="mt-24 font-[family-name:var(--font-cormorant)] text-4xl italic text-[#f1e9dd]">{title}.</h3><p className="mt-5 text-sm leading-7 text-white/48">{body}</p></article>)}</div>
        </div>
      </section>

      <section className="relative mt-20 overflow-hidden border border-[#c99a3c]/16 bg-[#070604] sm:mt-28">
        <div className="grid lg:grid-cols-[1.12fr_.88fr] lg:items-stretch">
          <AtelierVisual variant="digital" label="Abstract digital interface showing the type of experience behind Connect" />
          <div className="flex items-center p-7 sm:p-10 lg:p-12"><div><p className="text-[8px] font-bold uppercase tracking-[.25em] text-[#d5a94f]">Prime Presence Connect™</p><h2 className="mt-6 font-[family-name:var(--font-cormorant)] text-[clamp(3rem,7vw,5.8rem)] font-medium leading-[.88] tracking-[-.04em] text-[#f4ede2]">The introduction is <span className="italic text-[#d8ac52]">changing.</span></h2><p className="mt-6 max-w-xl text-sm leading-7 text-white/45 sm:text-base">No launch date. No unfinished demo. We will reveal Connect when it is ready to carry the Prime Presence name.</p><div className="mt-8 inline-flex items-center gap-3 border border-[#c99a3c]/30 px-4 py-2.5"><span className="h-1.5 w-1.5 rounded-full bg-[#d9ae55]"/><span className="text-[8px] font-bold uppercase tracking-[.22em] text-[#ddb45b]">Coming Soon</span></div></div></div>
        </div>
      </section>

      <section className="mt-16 sm:mt-20"><div className="flex flex-col gap-6 border-t border-white/[.08] pt-8 sm:flex-row sm:items-center sm:justify-between"><div><p className="eyebrow">While we build</p><h2 className="mt-3 font-[family-name:var(--font-cormorant)] text-3xl text-[#f3ece2] sm:text-4xl">The Atelier is open.</h2></div><Link href="/services" className="button-primary shrink-0">Explore Current Services</Link></div></section>
    </PageShell>
  );
}
