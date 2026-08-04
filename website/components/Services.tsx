import Link from "next/link";
import { services } from "@/content/services";
import RevealSection from "./motion/RevealSection";

export default function Services() {
  return <section id="services" className="mx-auto max-w-7xl px-4 py-20 sm:px-8 sm:py-24 lg:px-12"><RevealSection><div className="mb-12 max-w-3xl"><p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#C8A348]">Services</p><h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-white sm:text-5xl">Build the impression before asking people to trust it.</h2></div><div className="grid gap-px overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">{services.map((service, index) => <article key={service.slug} className="bg-[#090909] p-7 sm:p-8"><p className="mb-8 text-xs tracking-[.3em] text-[#C8A348]">0{index + 1}</p><h3 className="mb-3 font-[family-name:var(--font-cormorant)] text-2xl text-white">{service.title}</h3><p className="text-sm leading-7 text-gray-300">{service.summary}</p></article>)}</div><Link href="/services" className="mt-8 inline-flex font-semibold text-[#C8A348]">Explore all services →</Link></RevealSection></section>;
}
