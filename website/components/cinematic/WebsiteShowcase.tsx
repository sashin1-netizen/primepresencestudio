import Image from "next/image";
import { publishedMediaById } from "@/content/media";
import SectionIntro from "./SectionIntro";

export default function WebsiteShowcase() {
  const media = publishedMediaById("website-showcase");

  return (
    <section className="section-space bg-[#080807]">
      <div className="container-site">
        <SectionIntro
          eyebrow="Digital presence"
          title="A premium website still has one job: make the next step feel easy."
          body="Prime Presence Web is built for owner-led businesses that need clarity, credibility and a direct enquiry path—not complexity for its own sake."
        />
        <div className="mt-12 grid gap-4 lg:grid-cols-[1.25fr_.75fr]">
          <div className="relative aspect-[16/10] overflow-hidden rounded-[var(--radius-lg)] border border-white/10 bg-[linear-gradient(145deg,#17140c,#070707_62%)]">
            {media ? (
              <Image
                src={media.src}
                alt={media.decorative ? "" : media.alt}
                fill
                sizes="(min-width:1024px) 65vw, 100vw"
                className="object-cover"
              />
            ) : (
              <div aria-hidden="true" className="absolute inset-10 rounded-[2rem] border border-[#c8a348]/25 bg-[linear-gradient(120deg,rgba(200,163,72,.12),transparent)] shadow-2xl" />
            )}
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="surface p-7">
              <p className="eyebrow">01 · Mobile first</p>
              <h3 className="mt-4 text-2xl">Built for the screen your customer is already holding.</h3>
              <p className="mt-3 leading-7 text-[var(--muted)]">Readable hierarchy, comfortable touch targets and contact actions that stay obvious on smaller screens.</p>
            </div>
            <div className="surface p-7">
              <p className="eyebrow">02 · Purposeful motion</p>
              <h3 className="mt-4 text-2xl">Memorable without making people wait.</h3>
              <p className="mt-3 leading-7 text-[var(--muted)]">Motion supports the story while reduced-motion fallbacks and restrained JavaScript protect the core experience.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
