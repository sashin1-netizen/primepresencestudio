import Link from "next/link";
import { services } from "@/content/services";
import RevealSection from "./motion/RevealSection";

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-4 py-20 sm:px-8 sm:py-24 lg:px-12">
      <RevealSection>
        <div className="mb-12 grid gap-6 lg:grid-cols-[1fr_.6fr] lg:items-end">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#C8A348]">Flagship offers</p>
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-white sm:text-5xl">
              Buy the outcome, not a pile of disconnected design files.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-gray-400 lg:justify-self-end">
            The public offer stays intentionally focused. Other suitable work can be scoped as a controlled custom project when it supports the same goal: a stronger first impression.
          </p>
        </div>
        <div className="grid gap-px overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <article key={service.slug} className="group flex min-h-72 flex-col bg-[#090909] p-7 transition-colors hover:bg-[#0d0c09] sm:p-8">
              <p className="mb-8 text-xs tracking-[.3em] text-[#C8A348]">0{index + 1}</p>
              <h3 className="mb-3 font-[family-name:var(--font-cormorant)] text-2xl text-white">{service.title}</h3>
              <p className="text-sm leading-7 text-gray-300">{service.summary}</p>
              <Link href="/contact" className="mt-auto pt-8 text-sm font-semibold text-[#C8A348]">
                Discuss this outcome →
              </Link>
            </article>
          ))}
        </div>
        <Link href="/services" className="mt-8 inline-flex font-semibold text-[#C8A348]">See deliverables and boundaries →</Link>
      </RevealSection>
    </section>
  );
}
