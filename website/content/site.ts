import { ownerContent } from "@/content/owner-content.mjs";
import { publicContact } from "@/lib/contact-config.mjs";

const confirmedContact = publicContact(ownerContent.business);
export const site = { name: ownerContent.business.publicName, tagline: ownerContent.brand.tagline, description: ownerContent.brand.description, hours: ownerContent.business.hours, location: ownerContent.business.location, serviceArea: ownerContent.business.serviceArea, socialLinks: confirmedContact.socialLinks, copyrightHolder: ownerContent.business.copyrightHolder } as const;
export const contactDetails = { email: confirmedContact.email, phoneDisplay: confirmedContact.telephoneDisplay, phoneHref: confirmedContact.telephoneHref, phoneInternational: confirmedContact.whatsapp, contactReady: Boolean(confirmedContact.email), privacyApproved: ownerContent.legal.privacyApproval && Boolean(ownerContent.legal.approvalDate) };
