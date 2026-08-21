import Image from "next/image";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import Contact from "@/components/Contact";
import AtelierVisual from "@/components/AtelierVisual";
import { services } from "@/content/services";
import { contactDetails } from "@/content/site";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata = {
  title: "Branding, Digital Presence & Launch Services",
  description: "Focused brand identity, Prime Presence Connect, launch creative and small-business website services from Prime Presence Atelier in Durban, South Africa.",
  alternates: { canonical: "/services" },
};

const variants = ["identity","digital","connect","archive","contact"] as const;

export default function Page() {
  return (
    <PageShell after={<Contact contact={contactDetails} />} eyebrow="Services" title="Five focused ways to strengthen the first impression." intro="The public offer is intentionally narrow: complete outcomes the atelier can deliver with care, clear scope and direct founder oversight. Suitable adjacent work can be quoted as a custom project.">
      <section className="relative mb-16 overflow-hidden border border-[#C8A348]/20 bg-[#080706] shadow-[0_35px_100px_rgba(0,0,0,.45)]">
        <div className="grid lg:grid-cols-[1.18fr_.82fr]">
          <div className="relative min-h-[420px] sm:min-h-[520px]"><Image src={`${basePath}/media/ppa-brand-identity-1.webp`} alt="Prime Presence Atelier black and gold brand collateral" fill priority sizes="(max-width:1024px) 100vw,60vw" className="object-cover object-center"/><div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_40%,rgba(5,4,3,.64)),linear-gradient(0deg,rgba(0,0,0,.55),transparent_52%)]"/></div>
          <div className="flex items-center p-7 sm:p-10 lg:p-12"><div><p className="eyebrow">Creative direction in context</p><h2 className="mt-5 font-[family-name:var(--font-cormorant)] text-4xl leading-[.95] text-white sm:text-5xl">One visual language. Multiple touchpoints.</h2><p className="mt-5 text-[15px] leading-8 text-white/58">Identity, digital presence, launch assets and brand touchpoints should feel like parts of the same world—not separate purchases.</p><div className="mt-8"><AtelierVisual variant="identity" label="Prime Presence identity composition"/></div></div></div>
        </div>
      </section>

      <div className="space-y-8">
        {services.map((service, index) => (
          <article key={service.slug} className="overflow-hidden border border-white/[.08] bg-[#070706]">
            <div className={`grid lg:grid-cols-[1.1fr_.9fr] ${index % 2 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
              <div className="p-5 sm:p-7 lg:p-9"><AtelierVisual variant={variants[index] || "archive"} label={`${service.title} visual composition`} /></div>
              <div className="flex min-h-[430px] items-center p-7 sm:p-10 lg:p-12">
                <div className="max-w-xl">
                  <p className="eyebrow">0{index + 1}</p>
                  <h2 className="mt-5 font-[family-name:var(--font-cormorant)] text-4xl leading-[.95] text-[#f3ece1] sm:text-5xl">{service.title}</h2>
                  {service.slug === "connect" && <span className="mt-4 inline-block border border-[#c99a3c]/28 px-3 py-1.5 text-[8px] font-bold uppercase tracking-[.18em] text-[#d8ae55]">Coming Soon</span>}
                  <p className="mt-5 text-[15px] leading-8 text-white/58">{service.summary}</p>
                  <div className="mt-7 border-t border-white/[.08] pt-5"><p className="text-[9px] font-bold uppercase tracking-[.18em] text-[#c99a3c]">Typical output</p><p className="mt-3 text-sm leading-7 text-white/42">{service.deliverables}</p></div>
                  <Link href={service.slug === "connect" ? "/connect" : "/contact"} className="mt-7 inline-flex min-h-11 items-center gap-5 border-b border-[#c99a3c]/55 text-[9px] font-bold uppercase tracking-[.17em] text-[#e0b75f]">{service.slug === "connect" ? "Enter the Preview" : "Discuss this offer"} <span>→</span></Link>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <section className="mt-16 grid gap-5 lg:grid-cols-[.9fr_1.1fr]"><AtelierVisual variant="process" label="Scope and delivery system"/><div className="flex items-center border border-[#c99a3c]/16 bg-[#070604] p-7 sm:p-10 lg:p-12"><div><p className="eyebrow">Scope discipline</p><h2 className="mt-4 font-[family-name:var(--font-cormorant)] text-4xl leading-[.95] text-white sm:text-5xl">Premium does not mean unlimited.</h2><p className="mt-6 max-w-3xl text-[15px] leading-8 text-white/52">Every project starts with a defined outcome, required assets, written inclusions and an approval path. Large e-commerce platforms, enterprise applications, legal trademark clearance, professional filming and unsupported automation are outside the launch offer unless separately scoped with the right specialist support.</p></div></div></section>
    </PageShell>
  );
}
