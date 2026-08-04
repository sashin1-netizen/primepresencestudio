import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageShell from "@/components/PageShell";
import BeforeAfter from "@/components/portfolio/BeforeAfter";
import BrandRevealPlayer from "@/components/portfolio/BrandRevealPlayer";
import DevicePreview from "@/components/portfolio/DevicePreview";
import ProjectGallery from "@/components/portfolio/ProjectGallery";
import ProjectShowcase from "@/components/portfolio/ProjectShowcase";
import { projects } from "@/content/projects";

export const dynamicParams = false;
export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const project = projects.find(item => item.slug === slug); if (!project) return {}; return { title: project.client, description: project.summary, alternates: { canonical: `/work/${project.slug}` } }; }

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const project = projects.find(item => item.slug === slug); if (!project) notFound();
  const related = projects.filter(item => project.relatedProjectSlugs?.includes(item.slug)); const currentIndex = projects.findIndex(item => item.slug === slug); const next = projects.length > 1 ? projects[(currentIndex + 1) % projects.length] : undefined;
  return <PageShell eyebrow={project.industry ?? "Case study"} title={project.client} intro={project.summary}>
    <div className="space-y-24">
      <section className="grid gap-8 border-b border-white/10 pb-16 md:grid-cols-[.7fr_1.3fr]"><div><p className="eyebrow">Services</p><ul className="mt-4 space-y-2 text-gray-300">{project.services.map(service => <li key={service}>{service}</li>)}</ul></div>{project.challenge && <div><h2 className="section-title">The challenge</h2><p className="mt-5 max-w-2xl leading-8 text-[var(--muted)]">{project.challenge}</p></div>}</section>
      {project.strategy && <CaseSection label="Strategy" text={project.strategy} />}{project.direction && <CaseSection label="Creative direction" text={project.direction} />}{project.execution && <CaseSection label="Execution" text={project.execution} />}
      {project.gallery?.length ? <ProjectGallery images={project.gallery} /> : null}
      {project.beforeAfter && <section><SectionTitle>Before and after</SectionTitle><div className="mt-8"><BeforeAfter comparison={project.beforeAfter} /></div></section>}
      {project.video && <section><SectionTitle>Brand reveal</SectionTitle><div className="mt-8"><BrandRevealPlayer video={project.video} /></div></section>}
      {project.websitePreview && <section><SectionTitle>Website preview</SectionTitle><div className="mt-8"><DevicePreview preview={project.websitePreview} /></div></section>}
      {project.deliverables?.length ? <ListSection title="Deliverables" items={project.deliverables} /> : null}{project.technologies?.length ? <ListSection title="Technology" items={project.technologies} /> : null}
      {project.timeline?.length ? <section><SectionTitle>Project timeline</SectionTitle><ol className="mt-8 grid gap-px bg-white/10 md:grid-cols-2">{project.timeline.map((item, index) => <li key={item.label} className="bg-[#080808] p-7"><span className="text-xs text-[#c8a348]">0{index + 1}</span><h3 className="mt-4 text-xl">{item.label}</h3><p className="mt-3 leading-7 text-[var(--muted)]">{item.detail}</p></li>)}</ol></section> : null}
      {project.result && <CaseSection label="Result" text={project.result} />}{project.testimonial && <blockquote className="border-l border-[#c8a348] pl-6 sm:pl-10"><p className="font-[family-name:var(--font-cormorant)] text-3xl leading-tight sm:text-4xl">“{project.testimonial.quote}”</p><footer className="mt-5 text-sm text-[var(--muted)]">{project.testimonial.name}{project.testimonial.role ? ` · ${project.testimonial.role}` : ""}</footer></blockquote>}
      {related.length ? <section><SectionTitle>Related projects</SectionTitle><div className="mt-8"><ProjectShowcase projects={related} /></div></section> : null}
      <nav aria-label="Case study navigation" className="flex flex-col gap-3 border-t border-white/10 pt-10 sm:flex-row sm:items-center sm:justify-between"><Link href="/work" className="button-secondary">All work</Link>{next && <Link href={`/work/${next.slug}`} className="link-arrow">Next project: {next.client} <span aria-hidden="true">→</span></Link>}</nav>
    </div>
  </PageShell>;
}

function SectionTitle({ children }: { children: React.ReactNode }) { return <h2 className="section-title">{children}</h2> }
function CaseSection({ label, text }: { label: string; text: string }) { return <section className="grid gap-6 md:grid-cols-[.45fr_1fr]"><p className="eyebrow">{label}</p><p className="max-w-3xl text-xl leading-9 text-gray-200">{text}</p></section> }
function ListSection({ title, items }: { title: string; items: string[] }) { return <section><SectionTitle>{title}</SectionTitle><ul className="mt-8 grid gap-px overflow-hidden rounded-[var(--radius-md)] bg-white/10 sm:grid-cols-2">{items.map(item => <li key={item} className="bg-[#080808] p-5 text-gray-300">{item}</li>)}</ul></section> }
