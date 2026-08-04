import { onlyApproved } from "@/lib/publication.mjs";
export type ProjectImage = { src: string; alt: string; width: number; height: number };
export type Project = { slug: string; client: string; industry?: string; services: string[]; summary: string; challenge?: string; strategy?: string; direction?: string; execution?: string; deliverables?: string[]; gallery?: ProjectImage[]; beforeAfter?: { before: ProjectImage; after: ProjectImage; label: string }; video?: { src: string; poster: string; label: string; captions?: string }; websitePreview?: { desktop: ProjectImage; tablet?: ProjectImage; mobile?: ProjectImage; url?: string }; timeline?: { label: string; detail: string }[]; technologies?: string[]; result?: string; testimonial?: { quote: string; name: string; role?: string }; relatedProjectSlugs?: string[]; cta?: { label: string; href: string }; publicationStatus: "draft" | "approved" };
// Draft records may live here safely; only approved records are rendered, routed or indexed.
export const projects: Project[] = [];
export const publishedProjects: Project[] = onlyApproved(projects);
