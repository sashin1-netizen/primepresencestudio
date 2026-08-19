import Link from "next/link";
import RevealSection from "./motion/RevealSection";

const proof = [
  {
    eyebrow: "Owned brand system",
    title: "Prime Presence Atelier",
    body: "The studio itself is the first proof environment: strategy, identity, digital experience, launch assets and operating standards built as one coherent system.",
  },
  {
    eyebrow: "Owned digital product",
    title: "Prime Presence Connect™",
    body: "A reusable mobile-first business-card and mini-profile product designed around QR, vCard, WhatsApp, call, email and sharing journeys.",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="border-y border-white/10 bg-[#070707] px-4 py-20 sm:px-8 sm:py-24 lg:px-12">
      <RevealSection className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#C8A348]">Proof before promises</p>
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-white sm:text-5xl">
              We would rather show what is real than manufacture a case study.
            </h2>
            <p className="mt-5 max-w-xl leading-8 text-gray-300">
              Client work is published only when the work, facts and permission are approved. Until then, the studio's own brand and products carry the proof burden.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {proof.map((item) => (
              <article key={item.title} className="rounded-[1.5rem] border border-white/10 bg-[#0a0a0a] p-7 sm:p-8">
                <p className="eyebrow">{item.eyebrow}</p>
                <h3 className="mt-5 font-[family-name:var(--font-cormorant)] text-3xl text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-gray-300">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/work" className="button-primary">View the Work Archive</Link>
          <Link href="/process" className="button-secondary">See How Projects Run</Link>
        </div>
      </RevealSection>
    </section>
  );
}
