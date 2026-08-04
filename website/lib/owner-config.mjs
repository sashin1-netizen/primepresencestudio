import { PUBLICATION_STATUSES } from "../content/owner-content.mjs";
import { isValidEmail, isValidTelephone, isValidWhatsApp } from "./contact-config.mjs";

export const isValidHttpsUrl = value => { try { return new URL(value).protocol === "https:"; } catch { return false; } };
export const isValidDomain = value => /^(?=.{4,253}$)(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,63}$/i.test(value || "");
export const isValidStatus = value => PUBLICATION_STATUSES.includes(value);

export function validateOwnerConfig(config) {
  const errors = [];
  const add = (path, message) => errors.push({ path, message });
  if (!config || typeof config !== "object") return [{ path: "root", message: "Configuration must be an object." }];
  for (const key of ["business","brand","founders","team","testimonials","projects","legal","media","openGraph","verification"]) if (!(key in config)) add(key, "Required configuration section is missing.");
  const business = config.business || {};
  if (business.email && !isValidEmail(business.email)) add("business.email", "Use one valid email address.");
  if (business.emailConfirmed && !business.email) add("business.emailConfirmed", "Cannot confirm a missing email.");
  if (business.telephone && !isValidTelephone(business.telephone)) add("business.telephone", "Use international +country format.");
  if (business.telephoneConfirmed && !business.telephone) add("business.telephoneConfirmed", "Cannot confirm a missing telephone.");
  if (business.whatsapp && !isValidWhatsApp(business.whatsapp)) add("business.whatsapp", "Use international digits only.");
  if (business.whatsappConfirmed && !business.whatsapp) add("business.whatsappConfirmed", "Cannot confirm missing WhatsApp.");
  if (business.domain && !isValidDomain(business.domain)) add("business.domain", "Use a hostname only, without protocol or path.");
  if (business.canonicalUrl && !isValidHttpsUrl(business.canonicalUrl)) add("business.canonicalUrl", "Use an absolute HTTPS URL.");
  (business.socialLinks || []).forEach((item,index)=>{if(!isValidHttpsUrl(item.url))add(`business.socialLinks.${index}.url`,"Use HTTPS.");if(item.confirmed && !item.label)add(`business.socialLinks.${index}.label`,"Confirmed links require a label.")});
  for (const [group,records] of [["founders",config.founders],["team",config.team],["testimonials",config.testimonials],["projects",config.projects],["media",config.media]]) (records || []).forEach((record,index)=>{if(!isValidStatus(record.publicationStatus))add(`${group}.${index}.publicationStatus`,"Use draft, review, approved, published or rejected.")});
  for (const key of ["privacyPublicationStatus","termsPublicationStatus"]) if (!isValidStatus(config.legal?.[key])) add(`legal.${key}`,"Use a supported publication status.");
  return errors;
}

export const readinessState = (value, approval=false) => value ? (approval ? "Ready" : "Pending approval") : "Pending owner input";
