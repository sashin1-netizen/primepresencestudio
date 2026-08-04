import { ownerContent } from "@/content/owner-content.mjs";

export const site = {
  name: ownerContent.business.publicName,
  tagline: ownerContent.brand.tagline,
  description: ownerContent.brand.description,
  email: ownerContent.business.email,
  phoneDisplay: ownerContent.business.telephone,
  phoneInternational: ownerContent.business.whatsapp,
  hours: ownerContent.business.hours,
  location: ownerContent.business.location,
  serviceArea: ownerContent.business.serviceArea,
  socialLinks: ownerContent.business.socialLinks,
  copyrightHolder: ownerContent.business.copyrightHolder,
} as const;

export const contactDetails = {
  email: site.email,
  phoneDisplay: site.phoneDisplay,
  phoneInternational: site.phoneInternational,
  contactReady: ownerContent.business.ownerConfirmed && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(site.email) && /^\d{8,15}$/.test(site.phoneInternational),
  privacyApproved: ownerContent.legal.privacyApproval && Boolean(ownerContent.legal.approvalDate),
};
