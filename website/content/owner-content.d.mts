export type PublicationStatus = "draft" | "review" | "approved" | "published" | "rejected";
export type Approval = { publicationStatus: PublicationStatus; approvalDate: string | null };
export type SocialLink = { label: string; url: string };
export type ImageAsset = { src: string; alt: string; width: number; height: number; filename: string };
export type MediaRecord = Approval & { filename: string; description: string; copyrightHolder: string; source: string; licence: string; permissionStatus: "pending" | "approved" | "rejected"; usageRestriction: string; expiry: string | null; bytes?: number };
export type PersonRecord = Approval & { id: string; name: string; role: string; shortBiography: string; longBiography?: string; portrait?: ImageAsset; socialLinks?: SocialLink[]; experienceSummary?: string[]; approach?: string; values?: string[]; location?: string; imageRightsConfirmed: boolean };
export type TestimonialRecord = Approval & { id: string; clientName: string; businessName?: string; role?: string; quote: string; projectReference?: string; approvalConfirmed: boolean; consentDate: string | null };
export type ProjectRecord = Approval & { slug: string; clientName: string; industry?: string; services: string[]; summary: string; challenge?: string; strategicDirection?: string; creativeExecution?: string; deliverables?: string[]; gallery?: ImageAsset[]; brandRevealVideo?: { src: string; poster: string; label: string; captions?: string; filename: string; posterFilename: string; bytes?: number }; websitePreview?: { desktop: ImageAsset; tablet?: ImageAsset; mobile?: ImageAsset; url?: string }; beforeAndAfter?: { before: ImageAsset; after: ImageAsset; label: string }; timeline?: { label: string; detail: string }[]; results?: string; testimonial?: TestimonialRecord; relatedProjects?: string[]; mediaRightsConfirmed: boolean; clientPublicationApproved: boolean; publicationDate: string | null; openGraphArtwork?: ImageAsset };
export type OwnerContent = {
  business: { publicName: string; legalName: string; email: string; telephone: string; whatsapp: string; location: string; serviceArea: string; hours: string; socialLinks: SocialLink[]; copyrightHolder: string; legalContact: string; privacyContact: string; termsContact: string; domain: string; canonicalUrl: string; ownerConfirmed: boolean; approvalDate: string | null };
  brand: { tagline: string; description: string };
  founders: PersonRecord[]; team: PersonRecord[]; testimonials: TestimonialRecord[]; projects: ProjectRecord[];
  legal: { privacyApproval: boolean; termsApproval: boolean; cookiePolicyRequired: boolean | null; analyticsPolicyApproved: boolean; legalReviewer: string; approvalDate: string | null; outstandingIssues: string[]; mediaUseWordingApproved: boolean; clientPublicationWordingApproved: boolean };
  media: MediaRecord[];
  openGraph: { defaultArtwork: (ImageAsset & Approval) | null; routeArtwork: Array<ImageAsset & Approval & { route: string }>; projectArtwork: Array<ImageAsset & Approval & { projectSlug: string }> };
  verification: { domainValidated: boolean; realDeviceSignoff: boolean; lighthouseVerified: boolean; productionBuildPassed: boolean; routeChecksPassed: boolean; accessibilityCriticalChecksPassed: boolean; contactFlowPassed: boolean; highSeveritySecurityIssuesResolved: boolean };
};
export const PUBLICATION_STATUSES: readonly PublicationStatus[];
export const ownerContent: OwnerContent;
