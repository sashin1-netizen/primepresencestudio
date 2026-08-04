export function isPublished(record: { publicationStatus?: string; approvalDate?: string | null }): boolean;
export function onlyPublished<T extends { publicationStatus?: string; approvalDate?: string | null }>(records: T[]): T[];
export const onlyApproved: typeof onlyPublished;
export function canPublishPerson(record: { publicationStatus?: string; approvalDate?: string | null; imageRightsConfirmed?: boolean }): boolean;
export function canPublishTestimonial(record: { publicationStatus?: string; approvalDate?: string | null; approvalConfirmed?: boolean; consentDate?: string | null; quote?: string }): boolean;
export function canPublishProject(record: { publicationStatus?: string; approvalDate?: string | null; mediaRightsConfirmed?: boolean; clientPublicationApproved?: boolean; slug?: string; testimonial?: { publicationStatus?: string; approvalDate?: string | null; approvalConfirmed?: boolean; consentDate?: string | null; quote?: string } }): boolean;
