import Image from "next/image";
import PageShell from "@/components/PageShell";
import AtelierVisual from "@/components/AtelierVisual";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const steps = [
  ["01", "Discover", "We get beneath the requested deliverable: the business, audience, ambition, timing and impression the work needs to create."],
  ["02", "Define", "Scope, outcome, assets, responsibilities, exclusions and approval path are made explicit before production begins."],
  ["03", "Direct", "A focused message and visual territory establish the standard. We choose a direction rather than presenting noise as choice."],
  ["04", "Craft", "The agreed identity, digital experience or launch assets are built as one coherent system, not disconnected pieces."],
  ["05", "Interrogate", "Spelling, links, dimensions, responsiveness, accessibility basics, claims, licences and visual consistency are challenged before review."],
  ["06", "Refine", "Feedback is consolidated through one controlled path. Included revisions improve the chosen direction rather than restarting it."],
  ["07", "Release", "Final approval is recorded and organised assets, links, guidance and support boundaries are handed over deliberately."],
] as const;

export const metadata = { title: "Process", description: "The Prime Presence Atelier client journey from discovery and direction through production, QA, approval and handover.", alternates: { canonical: "/process" } };

export default function Page(){return <PageShell eyebrow="Process · Behind the work" title="Nothing accidental reaches the client." intro="The visible result may feel effortless. The process behind it should not be. Every stage exists to protect clarity, momentum and the final standard.">
  <section className="relative -mx-5 overflow-hidden border-y border-white/[.07] bg-[#050504] px-5 py-16 sm:-mx-8 sm:px-8 sm:py-24 lg:-mx-12 lg:px-12 lg:py-28">
    <div className="relative mx-auto grid max-w-[1180px] gap-12 lg:grid-cols-[.82fr_1.18fr] lg:items-center lg:gap-20">
      <div><p className="eyebrow">The principle</p><h2 className="mt-6 font-[family-name:var(--font-cormorant)] text-[clamp(3.3rem,7vw,6.5rem)] leading-[.85] tracking-[-.04em] text-[#f4ede2]">Slow down the <span className="italic text-[#d5a84d]">right decisions.</span><br/>Speed up everything else.</h2><p className="mt-7 max-w-xl text-[15px] leading-8 text-white/48">Technology removes friction where it should. Human judgement remains where it matters: direction, taste, truth, approval and whether the work is ready to carry the client’s name.</p></div>
      <AtelierVisual variant="process" label="Visual map of the Prime Presence Atelier project process" />
    </div>
  </section>

  <section className="mt-20 sm:mt-28">
    <div className="grid gap-5 lg:grid-cols-2">
      {steps.map(([n,t,b],i)=><article key={n} className={`relative overflow-hidden border border-white/[.08] bg-[#080706] p-7 sm:p-9 ${i===2 || i===6 ? 'lg:col-span-2' : ''}`}>
        <div className="grid gap-8 sm:grid-cols-[64px_1fr] sm:items-start">
          <div className="flex h-14 w-14 items-center justify-center border border-[#c99a3c]/35 text-[9px] font-bold tracking-[.16em] text-[#d6ad57]">{n}</div>
          <div><h2 className="font-[family-name:var(--font-cormorant)] text-4xl leading-none text-[#f1e9dd] sm:text-5xl">{t}<span className="text-[#c99a3c]">.</span></h2><p className="mt-5 max-w-2xl text-[15px] leading-8 text-white/48">{b}</p>{i===2&&<p className="mt-5 inline-block border-l border-[#c99a3c]/55 pl-4 text-[8px] font-bold uppercase tracking-[.2em] text-[#c99a3c]">The point where the work starts to become visible</p>}</div>
        </div>
        {i===2 && <div className="mt-8"><AtelierVisual variant="identity" label="Identity artefact created during the direction stage"/></div>}
        {i===6 && <div className="mt-8 grid gap-5 lg:grid-cols-2"><AtelierVisual variant="digital" label="Digital delivery composition"/><div className="relative min-h-[320px] overflow-hidden border border-white/[.08]"><Image src={`${basePath}/media/ppa-brand-identity-1.webp`} alt="Final Prime Presence Atelier identity reference" fill sizes="(max-width:1024px) 100vw,50vw" className="object-cover object-center"/></div></div>}
      </article>)}
    </div>
  </section>

  <section className="relative mt-20 overflow-hidden border border-[#c99a3c]/15 bg-[#070604] sm:mt-28">
    <div className="grid lg:grid-cols-[.9fr_1.1fr]">
      <div className="relative min-h-[340px] overflow-hidden lg:min-h-[480px]"><Image src={`${basePath}/media/ppa-hero-collateral.webp`} alt="Prime Presence Atelier collateral arranged as a final quality reference" fill sizes="(max-width:1024px) 100vw,45vw" className="object-cover object-center"/><div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_45%,rgba(7,6,4,.75))]"/></div>
      <div className="flex items-center p-7 text-left sm:p-10 lg:p-12"><div><p className="eyebrow">The standard</p><h2 className="mt-5 font-[family-name:var(--font-cormorant)] text-[clamp(3rem,6vw,5.5rem)] leading-[.88] tracking-[-.035em]">Finished is not when we stop.<br/><span className="italic text-[#d7aa4f]">It is when nothing important is unresolved.</span></h2></div></div>
    </div>
  </section>
</PageShell>}
