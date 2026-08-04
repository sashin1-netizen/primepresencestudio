/** @param {{ publicationStatus?: string, approvalDate?: string | null }} record */
export function isPublished(record) { return record.publicationStatus === "published" && Boolean(record.approvalDate); }
/** @template {{ publicationStatus?: string, approvalDate?: string | null }} T @param {T[]} records @returns {T[]} */
export function onlyPublished(records) { return records.filter(isPublished); }
/** @deprecated Approved records are not public. Use onlyPublished. */
export const onlyApproved = onlyPublished;

export function canPublishPerson(record) { return isPublished(record) && record.imageRightsConfirmed === true; }
export function canPublishTestimonial(record) { return isPublished(record) && record.approvalConfirmed === true && Boolean(record.consentDate) && Boolean(record.quote?.trim()); }
export function canPublishProject(record) { return isPublished(record) && record.mediaRightsConfirmed === true && record.clientPublicationApproved === true && Boolean(record.slug?.trim()) && (!record.testimonial || canPublishTestimonial(record.testimonial)); }
