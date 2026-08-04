export type Project = { slug: string; client: string; industry?: string; services: string[]; summary: string; challenge?: string; direction?: string; deliverables?: string[]; gallery?: { src: string; alt: string; width: number; height: number }[]; video?: { src: string; poster: string; label: string }; result?: string; testimonial?: { quote: string; name: string; role?: string }; cta?: { label: string; href: string }; approvedForPublication: true };
// Keep empty until the owner supplies verified facts, licensed media and publication approval.
export const projects: Project[] = [];
