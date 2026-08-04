export const isValidEmail = value => typeof value === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && (value.match(/@/g)?.length === 1);
export const normaliseTelephone = value => typeof value === "string" ? value.replace(/[\s()-]/g, "") : "";
export const isValidTelephone = value => /^\+[1-9]\d{7,14}$/.test(normaliseTelephone(value));
export const isValidWhatsApp = value => typeof value === "string" && /^[1-9]\d{7,14}$/.test(value);
export const publicContact = business => ({
  email: business.emailConfirmed && isValidEmail(business.email) ? business.email : null,
  telephoneDisplay: business.telephoneConfirmed && isValidTelephone(business.telephone) ? business.telephone : null,
  telephoneHref: business.telephoneConfirmed && isValidTelephone(business.telephone) ? `tel:${normaliseTelephone(business.telephone)}` : null,
  whatsapp: business.whatsappConfirmed && isValidWhatsApp(business.whatsapp) ? business.whatsapp : null,
  socialLinks: (business.socialLinks || []).filter(link => link.confirmed === true && isHttpsUrl(link.url)),
});
export const isHttpsUrl = value => { try { return new URL(value).protocol === "https:"; } catch { return false; } };
