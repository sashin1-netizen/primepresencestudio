import { createRequire } from "node:module";

export const PUBLICATION_STATUSES = ["draft", "review", "approved", "published", "rejected"];
const require = createRequire(import.meta.url);
const configured = require("./owner-config.json");
const publicLaunchApproved = process.env.PUBLIC_LAUNCH_APPROVED === "true";

/**
 * Runtime manifest derived from the single owner-editable owner-config.json file.
 * Deployment environment variables may override public contact/domain values, but
 * confirmation and PUBLIC_LAUNCH_APPROVED are still required before rendering.
 */
export const ownerContent = {
  ...configured,
  business: {
    ...configured.business,
    email: process.env.NEXT_PUBLIC_BUSINESS_EMAIL || configured.business.email,
    emailConfirmed: publicLaunchApproved && configured.business.emailConfirmed,
    telephone: process.env.NEXT_PUBLIC_BUSINESS_PHONE || configured.business.telephone,
    telephoneConfirmed: publicLaunchApproved && configured.business.telephoneConfirmed,
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || configured.business.whatsapp,
    whatsappConfirmed: publicLaunchApproved && configured.business.whatsappConfirmed,
    domain: process.env.NEXT_PUBLIC_CANONICAL_DOMAIN || configured.business.domain,
    canonicalUrl: process.env.NEXT_PUBLIC_SITE_URL || configured.business.canonicalUrl,
  },
};
