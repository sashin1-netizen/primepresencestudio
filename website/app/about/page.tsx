import Image from "next/image";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ProofSection from "@/components/ProofSection";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const principles = [
  ["01", "Taste before tools", "Technology can accelerate production. It cannot decide what deserves to represent a business."],
  ["02", "Restraint over noise", "Every element has to earn its place. Premium work is often defined by what was deliberately left out."],
  ["03", "Proof over theatre", "No invented clients, outcomes, awards or capabilities. Credibility is protected by being precise about what is real."],
] as const;

export const metadata = { title: "About", description: "Prime Presence Atelier is a founder-led creative atelier in Durban helping small businesses build trust through brand identity, digital presence and disciplined creative production.", alternates: { canonical: "/about" } };

export default function Page() {
  return <PageShell eyebrow="About · The Atelier" title="Not built like an agency." intro="Prime Presence Atelier is deliberately small, founder-led and exacting. The work is designed to feel considered before it feels impressive.">
    <section className="relative -mx-5 overflow-hidden border-y border-white/[.07] bg-[#050504] px-5 py-16 sm:-mx-8 sm:px-8 sm:py-24 lg:-mx-12 lg:px-12 lg:py-28">
      <div className="relative mx-auto grid max-w-[1180px] gap-12 lg:grid-cols-[.82fr_1.18fr] lg:items-center lg:gap-20">
        <div>
          <p className="eyebrow">The belief</p>
          <h2 className="mt-6 max-w-[10ch] font-[family-name:var(--font-cormorant)] text-[clamp(3.2rem,7vw,6.4rem)] font-medium leading-[.86] tracking-[-.04em] text-[#f4ede2]">Presence is what remains <span className="italic text-[#d6aa50]">after attention moves on.</span></h2>
          <p className="mt-7 max-w-xl text-[15px] leading-8 text-white/52">We shape brand identity, focused digital experiences and launch creative around one question: what should someone understand and feel when they encounter this business?</p>
        </div>

        <div className="relative min-h-[520px] sm:min-h-[620px]">
          <figure className="absolute inset-x-0 top-0 overflow-hidden border border-white/[.08] bg-[#090806] shadow-[0_35px_100px_rgba(0,0,0,.5)] sm:left-10">
            <Image src={`${basePath}/media/ppa-brand-identity-1.webp`} alt="Prime Presence Atelier black and gold identity collateral" width={1536} height={1024} className="aspect-[4/3] w-full object-cover object-center" priority />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_58%,rgba(0,0,0,.55))]" />
            <figcaption className="absolute bottom-5 left-5 border-l border-[#c99a3c]/60 pl-4 text-[8px] font-bold uppercase tracking-[.2em] text-[#ddba68]">Owned identity system · Detail study</figcaption>
          </figure>
          <div className="absolute bottom-0 left-0 w-[72%] border border-[#c99a3c]/20 bg-[#080706]/95 p-6 shadow-[0_25px_70px_rgba(0,0,0,.55)] backdrop-blur sm:w-[58%] sm:p-7">
            <p className="text-[8px] font-bold uppercase tracking-[.22em] text-[#c99a3c]">Atelier note 01</p>
            <p className="mt-4 font-[family-name:var(--font-cormorant)] text-3xl leading-[.95] text-[#f0e8dc] sm:text-4xl">A business does not need to look larger than it is.</p>
            <p className="mt-4 text-sm leading-7 text-white/45">It needs to look as serious as it intends to become.</p>
          </div>
        </div>
      </div>
    </section>

    <section className="mt-20 sm:mt-28">
      <div className="grid gap-10 lg:grid-cols-[.5fr_1.5fr] lg:gap-20">
        <div><p className="eyebrow">Atelier code</p><h2 className="section-title mt-4">Three things we refuse to compromise.</h2></div>
        <div className="grid gap-4 md:grid-cols-3">
          {principles.map(([n,t,b])=><article key={n} className="group relative min-h-[300px] overflow-hidden border border-white/[.08] bg-[#080706] p-6 sm:p-7">
            <div aria-hidden="true" className="absolute -right-20 -top-20 h-48 w-48 rounded-full border border-[#c99a3c]/10 transition-transform duration-700 group-hover:scale-110" />
            <p className="text-[9px] font-bold tracking-[.2em] text-[#c99a3c]">{n}</p>
            <h3 className="mt-16 font-[family-name:var(--font-cormorant)] text-3xl leading-[.95] text-[#f0e8dc] sm:text-4xl">{t}</h3>
            <p className="mt-5 text-sm leading-7 text-white/48">{b}</p>
          </article>)}
        </div>
      </div>
    </section>

    <section className="relative mt-20 overflow-hidden border border-[#c99a3c]/16 bg-[#070604] sm:mt-28">
      <div className="grid lg:grid-cols-[1.05fr_.95fr]">
        <div className="relative min-h-[360px] overflow-hidden lg:min-h-[500px]">
          <Image src={`${basePath}/media/ppa-hero-collateral.webp`} alt="Prime Presence Atelier collateral and visual identity details" fill sizes="(max-width:1024px) 100vw,55vw" className="object-cover object-center" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_40%,rgba(7,6,4,.72)_100%),linear-gradient(0deg,rgba(0,0,0,.35),transparent_55%)]" />
        </div>
        <div className="flex items-center p-7 sm:p-10 lg:p-12">
          <div><p className="eyebrow">Founder-led by design</p><h2 className="mt-5 max-w-[11ch] font-[family-name:var(--font-cormorant)] text-[clamp(2.8rem,6vw,5.2rem)] leading-[.9] tracking-[-.035em]">Fewer layers.<br/><span className="italic text-[#d5a94e]">More accountability.</span></h2><p className="mt-6 text-[15px] leading-8 text-white/52">The person responsible for the standard stays close to the work. Scope is controlled, communication is direct and reusable systems stay behind the scenes so the visible result can remain specific to the business.</p><Link href="/process" className="mt-7 inline-flex min-h-11 items-center gap-5 border-b border-[#c99a3c]/55 text-[9px] font-bold uppercase tracking-[.17em] text-[#e0b75f]">Enter the Process <span>→</span></Link></div>
        </div>
      </div>
    </section>
    <ProofSection />
  </PageShell>;
}
