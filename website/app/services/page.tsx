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
      <div className="grid gap-px overflow-hidden rounded-[var(--radius-md)] bg-white/10 md:grid-cols-2">
        {services.map((service, index) => (
          <article key={service.slug} className="group flex flex-col bg-[#080808] p-8 transition-colors hover:bg-[#0c0b09] sm:p-10">
            <p className="eyebrow">0{index + 1}</p>
            <h2 className="mt-5 font-[family-name:var(--font-cormorant)] text-3xl">{service.title}</h2>
            <p className="mt-4 leading-7 text-gray-300">{service.summary}</p>
            <p className="eyebrow mt-7">Typical output</p>
            <p className="mt-3 text-sm leading-7 text-gray-400">{service.deliverables}</p>
            <Link href={service.slug === "connect" ? "/connect" : "/contact"} className="link-arrow mt-7 inline-flex self-start">
              {service.slug === "connect" ? "Explore Connect" : "Discuss this offer"} <span aria-hidden="true">→</span>
            </Link>
          </article>
        ))}
      </div>

      <div className="mt-12 rounded-[var(--radius-md)] border border-white/10 bg-[#080808] p-7 sm:p-9">
        <p className="eyebrow">Scope discipline</p>
        <h2 className="mt-4 font-[family-name:var(--font-cormorant)] text-3xl">Premium does not mean unlimited.</h2>
        <p className="mt-4 max-w-3xl leading-8 text-gray-300">
          Every project starts with a defined outcome, required assets, written inclusions and an approval path. Large e-commerce platforms, enterprise applications, legal trademark clearance, professional filming and unsupported automation are outside the launch offer unless separately scoped with the right specialist support.
        </p>
      </div>
    </PageShell>
  );
}
