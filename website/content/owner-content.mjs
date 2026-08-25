import { createRequire } from "node:module";

export const PUBLICATION_STATUSES = ["draft", "review", "approved", "published", "rejected"];
const require = createRequire(import.meta.url);
const configured = require("./owner-config.json");

/**
 * Runtime manifest derived from the single owner-editable owner-config.json file.
 * Deployment environment variables may override public contact/domain values.
 * Confirmed public contact channels are allowed in preview builds; launch approval
 * continues to control indexing, legal publication and production sign-off elsewhere.
 */
export const ownerContent = {
  ...configured,
  business: {
    ...configured.business,
    email: process.env.NEXT_PUBLIC_BUSINESS_EMAIL || configured.business.email,
    emailConfirmed: configured.business.emailConfirmed,
    telephone: process.env.NEXT_PUBLIC_BUSINESS_PHONE || configured.business.telephone,
    telephoneConfirmed: configured.business.telephoneConfirmed,
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || configured.business.whatsapp,
    whatsappConfirmed: configured.business.whatsappConfirmed,
    domain: process.env.NEXT_PUBLIC_CANONICAL_DOMAIN || configured.business.domain,
    canonicalUrl: process.env.NEXT_PUBLIC_SITE_URL || configured.business.canonicalUrl,
  },
};
