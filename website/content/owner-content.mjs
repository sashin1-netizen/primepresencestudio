export const PUBLICATION_STATUSES = ["draft", "review", "approved", "published", "rejected"];

/**
 * The single owner-controlled content manifest. Empty values are intentional blockers.
 * Content editors update this file only after collecting the matching intake/approval records.
 */
export const ownerContent = {
  business: {
    publicName: "Prime Presence",
    legalName: "",
    email: "hello@primepresence@gmail.com",
    telephone: "+27 71 154 7161",
    whatsapp: "27711547161",
    location: "South Africa",
    serviceArea: "",
    hours: "Monday–Friday, 09:00–17:00 SAST",
    socialLinks: [],
    copyrightHolder: "",
    legalContact: "",
    privacyContact: "",
    termsContact: "",
    domain: "",
    canonicalUrl: "",
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
    productionBuildPassed: false,
    routeChecksPassed: false,
    accessibilityCriticalChecksPassed: false,
    contactFlowPassed: false,
    highSeveritySecurityIssuesResolved: false,
  },
};
