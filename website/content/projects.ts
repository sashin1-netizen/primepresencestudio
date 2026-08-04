import { ownerContent, type ProjectRecord } from "@/content/owner-content.mjs";
import { selectPublicProjects } from "@/lib/content-selectors.mjs";

export type ProjectImage = { src: string; alt: string; width: number; height: number; filename?: string };
export type Project = { slug: string; client: string; industry?: string; services: string[]; summary: string; challenge?: string; strategy?: string; direction?: string; execution?: string; deliverables?: string[]; gallery?: ProjectImage[]; beforeAfter?: { before: ProjectImage; after: ProjectImage; label: string }; video?: { src: string; poster: string; label: string; captions?: string }; websitePreview?: { desktop: ProjectImage; tablet?: ProjectImage; mobile?: ProjectImage; url?: string }; timeline?: { label: string; detail: string }[]; technologies?: string[]; result?: string; testimonial?: { quote: string; name: string; role?: string }; relatedProjectSlugs?: string[]; cta?: { label: string; href: string }; publicationStatus: ProjectRecord["publicationStatus"]; approvalDate: string | null };

export function normaliseProject(project: ProjectRecord): Project { return { slug: project.slug, client: project.clientName, industry: project.industry, services: project.services, summary: project.summary, challenge: project.challenge, strategy: project.strategicDirection, execution: project.creativeExecution, deliverables: project.deliverables, gallery: project.gallery, beforeAfter: project.beforeAndAfter, video: project.brandRevealVideo, websitePreview: project.websitePreview, timeline: project.timeline, result: project.results, testimonial: project.testimonial ? { quote: project.testimonial.quote, name: project.testimonial.clientName, role: project.testimonial.role } : undefined, relatedProjectSlugs: project.relatedProjects, publicationStatus: project.publicationStatus, approvalDate: project.approvalDate }; }

export const projects: Project[] = ownerContent.projects.map(normaliseProject);
export const publishedProjectRecords = selectPublicProjects(ownerContent.projects);
export const publishedProjects: Project[] = publishedProjectRecords.map(normaliseProject);
