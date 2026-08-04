import Link from "next/link";
import RevealSection from "./motion/RevealSection";

export default function Portfolio() {
  return <section id="portfolio" className="border-y border-white/10 bg-[#070707] px-4 py-20 sm:px-8 sm:py-24 lg:px-12"><RevealSection className="mx-auto max-w-7xl"><div className="grid gap-10 lg:grid-cols-[1fr_.7fr] lg:items-end"><div><p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#C8A348]">Selected work</p><h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-white sm:text-5xl">The work archive is being prepared with the care the projects deserve.</h2></div><div><p className="leading-8 text-gray-300">Verified project imagery and case-study details will appear here once approved. We do not publish invented client work or unsupported results.</p><Link href="/work" className="mt-6 inline-flex font-semibold text-[#C8A348]">View the work archive →</Link></div></div></RevealSection></section>;
}
