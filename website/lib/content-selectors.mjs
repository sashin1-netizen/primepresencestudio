import { canPublishPerson, canPublishProject, canPublishTestimonial } from "./publication.mjs";

export const selectPublicProjects = records => records.filter(canPublishProject);
export const selectPublicPeople = records => records.filter(canPublishPerson);
export const selectPublicTestimonials = records => records.filter(canPublishTestimonial);
export const findPublicProject = (records, slug) => selectPublicProjects(records).find(item => item.slug === slug);
export const selectRelatedProjects = (records, project) => selectPublicProjects(records).filter(item => project.relatedProjects?.includes(item.slug));
export const projectSitemapPaths = records => selectPublicProjects(records).map(item => `/work/${item.slug}`);
export const publicStaticPaths = content => ["", "/work", "/services", "/connect", "/about", "/process", "/contact", "/insights", ...(content.legal.privacyApproval && content.legal.privacyPublicationStatus === "published" && content.legal.privacyVersion && content.legal.approvalDate ? ["/privacy"] : []), ...(content.legal.termsApproval && content.legal.termsPublicationStatus === "published" && content.legal.termsVersion && content.legal.approvalDate ? ["/terms"] : [])];
export const projectStructuredData = (record, canonicalBase) => canPublishProject(record) ? { "@context": "https://schema.org", "@type": "CreativeWork", name: record.clientName, description: record.summary, url: `${canonicalBase}/work/${record.slug}` } : null;
export function selectOpenGraphArtwork(openGraph, project) { if (project && canPublishProject(project) && project.openGraphArtwork) return project.openGraphArtwork; const projectOverride = project && openGraph.projectArtwork.find(item => item.projectSlug === project.slug && item.publicationStatus === "published" && item.approvalDate); if (projectOverride) return projectOverride; return openGraph.defaultArtwork?.publicationStatus === "published" && openGraph.defaultArtwork.approvalDate ? openGraph.defaultArtwork : null; }
