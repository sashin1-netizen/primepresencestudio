import Image from "next/image";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ProjectShowcase from "@/components/portfolio/ProjectShowcase";
import { publishedProjects } from "@/content/projects";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata = {
  title: "Selected Work",
  description: "Approved client work and owned proof from Prime Presence Atelier, including the studio identity and Prime Presence Connect.",
  alternates: { canonical: "/work" },
};

const ownedProof = [
  {
    title: "Prime Presence Atelier",
    label: "Owned brand system",
    body: "A complete studio identity and digital experience built around the promise of premium first impressions, founder attention and disciplined delivery.",
    href: "/about",
    cta: "See the thinking",
    image: "/media/ppa-hero-collateral.webp",
    alt: "Prime Presence Atelier black and gold brand collateral",
  },
  {
    title: "Prime Presence Connect™",
    label: "Owned digital product",
    body: "A reusable digital business-card and branded mini-profile system built around mobile contact actions, QR, vCard and controlled publishing.",
    href: "/connect",
    cta: "Explore Connect",
    image: "/media/ppa-studio-scene.webp",
    alt: "Prime Presence Atelier premium studio environment",
  },
] as const;

export default function Page() {
  return (
    <PageShell eyebrow="Work" title="Proof should be specific." intro="The archive separates what is genuinely ours, what is approved for publication and what is still in development. No invented case studies and no borrowed credibility.">
      <div className="mb-14 grid gap-6 md:grid-cols-2">
        {ownedProof.map((item) => (
          <article key={item.title} className="group overflow-hidden border border-white/10 bg-[#080808]">
            <div className="relative min-h-[260px] overflow-hidden sm:min-h-[340px]">
              <Image src={`${basePath}${item.image}`} alt={item.alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover object-center transition duration-700 group-hover:scale-[1.025]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/15 to-transparent" />
              <p className="eyebrow absolute bottom-5 left-6">{item.label}</p>
            </div>
            <div className="p-7 sm:p-9">
              <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-white sm:text-4xl">{item.title}</h2>
              <p className="mt-4 max-w-xl leading-8 text-gray-300">{item.body}</p>
              <Link href={item.href} className="link-arrow mt-7 inline-flex">{item.cta} <span aria-hidden="true">→</span></Link>
            </div>
          </article>
        ))}
      </div>

      {publishedProjects.length ? (
        <>
          <div className="mb-8"><p className="eyebrow">Approved client work</p><h2 className="mt-4 font-[family-name:var(--font-cormorant)] text-3xl text-white">Published with permission.</h2></div>
          <ProjectShowcase projects={publishedProjects} />
        </>
      ) : (
        <div className="overflow-hidden border border-[#C8A348]/20 bg-[#C8A348]/5">
          <div className="grid lg:grid-cols-[.9fr_1.1fr]">
            <div className="relative min-h-[260px] lg:min-h-[380px]">
              <Image src={`${basePath}/media/ppa-studio-scene.webp`} alt="Prime Presence Atelier creative studio environment" fill sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover object-center" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#090806]/65" />
            </div>
            <div className="p-7 sm:p-10 lg:flex lg:flex-col lg:justify-center">
              <p className="eyebrow">Client archive</p>
              <h2 className="mt-4 font-[family-name:var(--font-cormorant)] text-3xl">Client case studies will appear only after approval.</h2>
              <p className="mt-4 max-w-2xl leading-8 text-gray-300">Real project imagery, context and outcomes must be cleared before publication. Until then, the owned systems above are the public proof.</p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row"><Link href="/contact" className="button-primary">Discuss Your Project</Link><Link href="/process" className="button-secondary">See the Process</Link></div>
            </div>
          </div>
        </div>
      )}
    </PageShell>
  );
}
