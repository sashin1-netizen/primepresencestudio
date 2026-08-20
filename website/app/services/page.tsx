import Image from "next/image";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import Contact from "@/components/Contact";
import { services } from "@/content/services";
import { contactDetails } from "@/content/site";

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
      <section className="relative mb-14 overflow-hidden border border-[#C8A348]/20 bg-[#080706] shadow-[0_35px_100px_rgba(0,0,0,.45)]">
        <div className="relative min-h-[320px] sm:min-h-[430px] lg:min-h-[520px]">
          <Image
            src="/media/ppa-hero-collateral.webp"
            alt="Prime Presence Atelier black and gold brand collateral staged on a dark marble surface"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,2,2,.78)_0%,rgba(2,2,2,.28)_48%,transparent_78%),linear-gradient(0deg,rgba(0,0,0,.55),transparent_46%)]" />
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 lg:max-w-2xl lg:p-12">
            <p className="eyebrow">Creative direction in context</p>
            <h2 className="mt-4 font-[family-name:var(--font-cormorant)] text-3xl leading-tight text-white sm:text-5xl">
              Every service should feel like part of the same presence.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
              Identity, digital presence, launch assets and brand touchpoints are designed as one visual system rather than disconnected deliverables.
            </p>
          </div>
        </div>
      </section>

      <div className="grid gap-px overflow-hidden rounded-[var(--radius-md)] bg-white/10 md:grid-cols-2">
        {services.map((service, index) => {
          const completesOddRow = index === services.length - 1 && services.length % 2 === 1;
          return (
            <article
              key={service.slug}
              className={`group flex flex-col bg-[#080808] p-8 transition-colors hover:bg-[#0c0b09] sm:p-10 ${completesOddRow ? "md:col-span-2" : ""}`}
            >
              <div className={completesOddRow ? "max-w-3xl" : undefined}>
                <p className="eyebrow">0{index + 1}</p>
                <h2 className="mt-5 font-[family-name:var(--font-cormorant)] text-3xl">{service.title}</h2>
                <p className="mt-4 leading-7 text-gray-300">{service.summary}</p>
                <p className="eyebrow mt-7">Typical output</p>
                <p className="mt-3 text-sm leading-7 text-gray-400">{service.deliverables}</p>
                <Link href={service.slug === "connect" ? "/connect" : "/contact"} className="link-arrow mt-7 inline-flex self-start">
                  {service.slug === "connect" ? "Explore Connect" : "Discuss this offer"} <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          );
        })}
      </div>

      <section className="mt-14 grid overflow-hidden border border-white/10 bg-[#070706] lg:grid-cols-[1.05fr_.95fr]">
        <div className="relative min-h-[300px] lg:min-h-[430px]">
          <Image
            src="/media/ppa-studio-scene.webp"
            alt="Dark premium creative studio interior with warm gold lighting"
            fill
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#070706]/60" />
        </div>
        <div className="flex items-center p-8 sm:p-10 lg:p-12">
          <div>
            <p className="eyebrow">Scope discipline</p>
            <h2 className="mt-4 font-[family-name:var(--font-cormorant)] text-3xl text-white sm:text-4xl">Premium does not mean unlimited.</h2>
            <p className="mt-4 max-w-3xl leading-8 text-gray-300">
              Every project starts with a defined outcome, required assets, written inclusions and an approval path. Large e-commerce platforms, enterprise applications, legal trademark clearance, professional filming and unsupported automation are outside the launch offer unless separately scoped with the right specialist support.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
