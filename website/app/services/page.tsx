import Image from "next/image";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import Contact from "@/components/Contact";
import { services } from "@/content/services";
import { contactDetails } from "@/content/site";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata = {
  title: "Branding, Digital Presence & Launch Services",
  description: "Focused brand identity, Prime Presence Connect, launch creative and small-business website services from Prime Presence Atelier in Durban, South Africa.",
  alternates: { canonical: "/services" },
};

export default function Page() {
  return (
    <PageShell
      after={<Contact contact={contactDetails} />}
      eyebrow="Services"
      title="Five focused ways to strengthen the first impression."
      intro="The public offer is intentionally narrow: complete outcomes the atelier can deliver with care, clear scope and direct founder oversight. Suitable adjacent work can be quoted as a custom project."
    >
      <section className="relative mb-16 overflow-hidden border border-[#C8A348]/20 bg-[#080706] shadow-[0_35px_100px_rgba(0,0,0,.45)]">
        <div className="relative min-h-[360px] sm:min-h-[480px] lg:min-h-[560px]">
          <Image src={`${basePath}/media/ppa-hero-collateral.webp`} alt="Prime Presence Atelier black and gold brand collateral" fill priority sizes="100vw" className="object-cover object-center" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,2,2,.82)_0%,rgba(2,2,2,.38)_50%,transparent_82%),linear-gradient(0deg,rgba(0,0,0,.55),transparent_46%)]" />
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 lg:max-w-2xl lg:p-12">
            <p className="eyebrow">Creative direction in context</p>
            <h2 className="mt-4 font-[family-name:var(--font-cormorant)] text-3xl leading-tight text-white sm:text-5xl">Every service should feel like part of the same presence.</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/70 sm:text-base">Identity, digital presence, launch assets and brand touchpoints are designed as one visual system rather than disconnected deliverables.</p>
          </div>
        </div>
      </section>

      <div className="space-y-6">
        {services.map((service, index) => (
          <article key={service.slug} className="overflow-hidden border border-white/[.08] bg-[#070706]">
            <div className={`grid lg:grid-cols-2 ${index % 2 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
              <ServiceVisual index={index} title={service.title} />
              <div className="flex min-h-[420px] items-center p-7 sm:p-10 lg:p-12">
                <div className="max-w-xl">
                  <p className="eyebrow">0{index + 1}</p>
                  <h2 className="mt-5 font-[family-name:var(--font-cormorant)] text-4xl leading-[.95] text-[#f3ece1] sm:text-5xl">{service.title}</h2>
                  <p className="mt-5 text-[15px] leading-8 text-white/58">{service.summary}</p>
                  <div className="mt-7 border-t border-white/[.08] pt-5"><p className="text-[9px] font-bold uppercase tracking-[.18em] text-[#c99a3c]">Typical output</p><p className="mt-3 text-sm leading-7 text-white/42">{service.deliverables}</p></div>
                  <Link href={service.slug === "connect" ? "/connect" : "/contact"} className="mt-7 inline-flex min-h-11 items-center gap-5 border-b border-[#c99a3c]/55 text-[9px] font-bold uppercase tracking-[.17em] text-[#e0b75f]">{service.slug === "connect" ? "Enter the Preview" : "Discuss this offer"} <span>→</span></Link>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <section className="mt-16 overflow-hidden border border-[#c99a3c]/16 bg-[#070604] p-7 sm:p-10 lg:p-12">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div><p className="eyebrow">Scope discipline</p><h2 className="mt-4 font-[family-name:var(--font-cormorant)] text-4xl leading-[.95] text-white sm:text-5xl">Premium does not mean unlimited.</h2></div>
          <p className="max-w-3xl text-[15px] leading-8 text-white/52">Every project starts with a defined outcome, required assets, written inclusions and an approval path. Large e-commerce platforms, enterprise applications, legal trademark clearance, professional filming and unsupported automation are outside the launch offer unless separately scoped with the right specialist support.</p>
        </div>
      </section>
    </PageShell>
  );
}

function ServiceVisual({ index, title }: { index: number; title: string }) {
  if (index === 0) return <div className="relative min-h-[380px] overflow-hidden bg-[#050504] lg:min-h-[520px]"><Image src={`${basePath}/media/ppa-brand-identity-1.webp`} alt="Prime Presence Atelier identity system detail" fill sizes="(max-width:1024px) 100vw,50vw" className="object-cover object-center"/><div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,.42),transparent_55%)]"/><span className="absolute bottom-6 left-6 text-[8px] font-bold uppercase tracking-[.2em] text-[#ddb967]">Identity · Material · Detail</span></div>;
  if (index === 1) return <div className="relative min-h-[380px] overflow-hidden bg-[#050504] p-6 lg:min-h-[520px] lg:p-10"><div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(201,154,60,.10),transparent_28%)]"/><div className="relative mx-auto mt-4 max-w-[520px] rounded-[26px] border border-white/[.10] bg-[#0b0a08] p-3 shadow-[0_30px_90px_rgba(0,0,0,.55)]"><div className="rounded-[20px] border border-white/[.07] bg-[#050504] p-5"><div className="flex items-center justify-between"><span className="text-[8px] uppercase tracking-[.2em] text-[#c99a3c]">Digital presence</span><div className="flex gap-1"><span className="h-1.5 w-1.5 rounded-full bg-white/15"/><span className="h-1.5 w-1.5 rounded-full bg-white/15"/><span className="h-1.5 w-1.5 rounded-full bg-white/15"/></div></div><div className="mt-10 grid gap-4 sm:grid-cols-[1.15fr_.85fr]"><div><div className="h-3 w-24 bg-[#c99a3c]/45"/><div className="mt-4 h-10 w-[85%] bg-white/[.08]"/><div className="mt-3 h-10 w-[68%] bg-white/[.05]"/><div className="mt-7 h-10 w-32 border border-[#c99a3c]/35"/></div><div className="aspect-[4/5] border border-white/[.07] bg-[linear-gradient(145deg,#15110a,#050504)]"/></div></div></div><p className="relative mt-7 text-center text-[8px] font-bold uppercase tracking-[.2em] text-white/30">Structure · hierarchy · next action</p></div>;
  if (index === 2) return <div className="relative min-h-[380px] overflow-hidden bg-[#080706] p-7 lg:min-h-[520px] lg:p-10"><div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-[#c99a3c]/10"/><div className="relative flex h-full flex-col justify-between"><div><span className="inline-block border border-[#c99a3c]/25 px-3 py-2 text-[8px] font-bold uppercase tracking-[.2em] text-[#d8ae55]">Coming Soon</span><p className="mt-10 font-[family-name:var(--font-cormorant)] text-5xl leading-[.9] text-[#f3ece1] sm:text-6xl">Not a card.<br/><span className="italic text-[#d5a94f]">Not a website.</span></p></div><div className="border-t border-white/[.08] pt-5"><p className="text-sm leading-7 text-white/42">Prime Presence Connect™ is being developed as a distinct digital introduction product. The finished experience stays under wraps until launch.</p></div></div></div>;
  if (index === 3) return <div className="relative min-h-[380px] overflow-hidden bg-[#050504] p-7 lg:min-h-[520px] lg:p-10"><div className="grid h-full grid-cols-2 gap-3"><div className="border border-white/[.07] bg-[linear-gradient(145deg,#17120a,#080706)] p-5"><p className="text-[8px] uppercase tracking-[.2em] text-[#c99a3c]">Launch 01</p><div className="mt-10 h-28 border border-white/[.07] bg-black/30"/><div className="mt-6 h-2 w-24 bg-white/10"/><div className="mt-3 h-2 w-16 bg-white/[.06]"/></div><div className="mt-12 border border-white/[.07] bg-[#0b0906] p-5"><p className="text-[8px] uppercase tracking-[.2em] text-[#c99a3c]">Reveal 02</p><div className="mt-8 aspect-square border border-[#c99a3c]/20 bg-[radial-gradient(circle,rgba(201,154,60,.15),transparent_55%)]"/></div></div></div>;
  return <div className="relative min-h-[380px] overflow-hidden bg-[#050504] p-7 lg:min-h-[520px] lg:p-10"><div className="grid h-full place-items-center"><div className="w-full max-w-md"><p className="text-[8px] font-bold uppercase tracking-[.22em] text-[#c99a3c]">Custom direction</p><p className="mt-5 font-[family-name:var(--font-cormorant)] text-5xl leading-[.92] text-[#efe7dc] sm:text-6xl">Built around the <span className="italic text-[#d6aa50]">business.</span></p><div className="mt-10 grid grid-cols-3 gap-3"><div className="aspect-square border border-white/[.08] bg-[#0c0a07]"/><div className="aspect-square border border-[#c99a3c]/18 bg-[linear-gradient(145deg,#18130b,#070604)]"/><div className="aspect-square border border-white/[.08] bg-[#090806]"/></div><p className="mt-6 text-sm leading-7 text-white/38">{title}</p></div></div></div>;
}
