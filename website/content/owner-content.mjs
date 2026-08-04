export const PUBLICATION_STATUSES = ["draft", "review", "approved", "published", "rejected"];
const publicLaunchApproved = process.env.PUBLIC_LAUNCH_APPROVED === "true";

/**
 * The single owner-controlled content manifest. Empty values are intentional blockers.
 * Content editors update this file only after collecting the matching intake/approval records.
 */
export const ownerContent = {
  business: {
    publicName: "Prime Presence",
    legalName: "",
    email: process.env.NEXT_PUBLIC_BUSINESS_EMAIL || null,
    emailConfirmed: publicLaunchApproved && Boolean(process.env.NEXT_PUBLIC_BUSINESS_EMAIL),
    telephone: process.env.NEXT_PUBLIC_BUSINESS_PHONE || null,
    telephoneConfirmed: publicLaunchApproved && Boolean(process.env.NEXT_PUBLIC_BUSINESS_PHONE),
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || null,
    whatsappConfirmed: publicLaunchApproved && Boolean(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER),
    location: "South Africa",
    serviceArea: "",
    hours: "Monday–Friday, 09:00–17:00 SAST",
    socialLinks: [],
    copyrightHolder: "",
    legalContact: "",
    privacyContact: "",
    termsContact: "",
    domain: process.env.NEXT_PUBLIC_CANONICAL_DOMAIN || "",
    canonicalUrl: process.env.NEXT_PUBLIC_SITE_URL || "",
    ownerConfirmed: false,
    approvalDate: null,
  },
  brand: {
    tagline: "Designed to Be Remembered.",
    description: "A South African branding and digital experience studio creating memorable identities, brand reveals and premium websites.",
  },
  founders: [],
  team: [],
  testimonials: [],
  projects: [],
  legal: {
    privacyApproval: false,
    termsApproval: false,
    cookiePolicyRequired: null,
    analyticsPolicyApproved: false,
    legalReviewer: "",
    approvalDate: null,
    outstandingIssues: ["Owner and professional legal review required before public launch."],
    mediaUseWordingApproved: false,
    clientPublicationWordingApproved: false,
  },
  media: [],
  openGraph: {
    defaultArtwork: null,
    routeArtwork: [],
    projectArtwork: [],
  },
  verification: {
    domainValidated: false,
    realDeviceSignoff: false,
    lighthouseVerified: false,
    productionBuildPassed: true,
    routeChecksPassed: true,
    accessibilityCriticalChecksPassed: true,
    contactFlowPassed: false,
    highSeveritySecurityIssuesResolved: true,
    launchApprovalRecorded: false,
  },
};
