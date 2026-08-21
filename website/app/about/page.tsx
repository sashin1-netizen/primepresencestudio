import Link from "next/link";
import PageShell from "@/components/PageShell";
import ProofSection from "@/components/ProofSection";

const principles = [
  ["01", "Taste before tools", "Technology can accelerate production. It cannot decide what deserves to represent a business."],
  ["02", "Restraint over noise", "Every element has to earn its place. Premium work is often defined by what was deliberately left out."],
  ["03", "Proof over theatre", "No invented clients, outcomes, awards or capabilities. Credibility is protected by being precise about what is real."],
] as const;

export const metadata = { title: "About", description: "Prime Presence Atelier is a founder-led creative atelier in Durban helping small businesses build trust through brand identity, digital presence and disciplined creative production.", alternates: { canonical: "/about" } };

export default function Page() {
  return <PageShell eyebrow="About · The Atelier" title="Not built like an agency." intro="Prime Presence Atelier is deliberately small, founder-led and exacting. The work is designed to feel considered before it feels impressive.">
    <section className="relative -mx-5 overflow-hidden border-y border-white/[.07] bg-[#050504] px-5 py-20 sm:-mx-8 sm:px-8 sm:py-28 lg:-mx-12 lg:px-12 lg:py-36">
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(201,154,60,.11),transparent_28%)]"/><div aria-hidden="true" className="luxury-grain absolute inset-0 opacity-40"/>
      <div className="relative mx-auto grid max-w-[1180px] gap-14 lg:grid-cols-[.72fr_1.28fr] lg:gap-24">
        <div><p className="eyebrow">The belief</p><p className="mt-7 max-w-xs text-sm leading-7 text-white/42">A business does not need to look larger than it is. It needs to look as serious as it intends to become.</p></div>
        <div><h2 className="max-w-[12ch] font-[family-name:var(--font-cormorant)] text-[clamp(3.3rem,7vw,6.5rem)] font-medium leading-[.86] tracking-[-.04em] text-[#f4ede2]">Presence is what remains <span className="italic text-[#d6aa50]">after attention moves on.</span></h2><div className="mt-9 grid gap-6 border-t border-white/[.08] pt-7 md:grid-cols-2"><p className="text-[15px] leading-8 text-white/60">We shape brand identity, focused digital experiences and launch creative around one question: what should someone understand and feel when they encounter this business?</p><p className="text-[15px] leading-8 text-white/42">AI supports research, exploration, production and QA behind the scenes. Direction, claims, approval and the final visual judgement remain human.</p></div></div>
      </div>
    </section>

    <section className="mt-20 sm:mt-28"><div className="grid gap-10 lg:grid-cols-[.52fr_1.48fr] lg:gap-20"><div><p className="eyebrow">Atelier code</p><h2 className="section-title mt-4">Three things we refuse to compromise.</h2></div><div className="divide-y divide-white/[.08] border-y border-white/[.08]">{principles.map(([n,t,b])=><article key={n} className="grid gap-4 py-8 sm:grid-cols-[60px_.7fr_1.3fr] sm:items-center sm:py-10"><p className="text-[9px] font-bold tracking-[.2em] text-[#c99a3c]">{n}</p><h3 className="font-[family-name:var(--font-cormorant)] text-3xl text-[#f0e8dc] sm:text-4xl">{t}</h3><p className="text-sm leading-7 text-white/48 sm:text-[15px]">{b}</p></article>)}</div></div></section>

    <section className="relative mt-20 overflow-hidden border border-[#c99a3c]/16 bg-[#070604] px-6 py-14 sm:mt-28 sm:px-10 sm:py-20"><div aria-hidden="true" className="absolute right-[-8rem] top-[-10rem] h-80 w-80 rounded-full border border-[#c99a3c]/10"/><div className="relative grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:items-end"><div><p className="eyebrow">Founder-led by design</p><h2 className="mt-5 max-w-[11ch] font-[family-name:var(--font-cormorant)] text-[clamp(2.8rem,6vw,5.5rem)] leading-[.9] tracking-[-.035em]">Fewer layers.<br/><span className="italic text-[#d5a94e]">More accountability.</span></h2></div><div><p className="text-[15px] leading-8 text-white/52">The person responsible for the standard stays close to the work. Scope is controlled, communication is direct and reusable systems stay behind the scenes so the visible result can remain specific to the business.</p><Link href="/process" className="mt-7 inline-flex min-h-11 items-center gap-5 border-b border-[#c99a3c]/55 text-[9px] font-bold uppercase tracking-[.17em] text-[#e0b75f]">Enter the Process <span>→</span></Link></div></div></section>
    <ProofSection />
  </PageShell>;
}
