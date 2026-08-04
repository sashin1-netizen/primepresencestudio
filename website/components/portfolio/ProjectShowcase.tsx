import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/projects";

export default function ProjectShowcase({ projects }: { projects: Project[] }) {
  return <div className="grid gap-8 md:grid-cols-2">{projects.map((project) => { const cover = project.gallery?.[0] ?? project.websitePreview?.desktop; return <article key={project.slug} className="group overflow-hidden rounded-[var(--radius-md)] border border-white/10 bg-[var(--surface)]">{cover && <Link href={`/work/${project.slug}`} className="relative block aspect-[4/3] overflow-hidden"><Image src={cover.src} alt={cover.alt} fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover transition duration-700 ease-[var(--ease-cinematic)] group-hover:scale-[1.025]" /></Link>}<div className="p-7 sm:p-8"><p className="eyebrow">{project.industry ?? "Selected work"}</p><h2 className="mt-4 font-[family-name:var(--font-cormorant)] text-3xl">{project.client}</h2><p className="mt-3 leading-7 text-[var(--muted)]">{project.summary}</p><Link href={`/work/${project.slug}`} className="link-arrow mt-6 inline-flex">View case study <span aria-hidden="true">→</span></Link></div></article>; })}</div>;
}
