export type Enquiry = { name: string; business?: string; email: string; phone?: string; service?: string; budget?: string; timeline?: string; details: string; consent: boolean };
export function validateEnquiry(input: Enquiry): Partial<Record<"name"|"email"|"details"|"consent",string>>;
export function buildEnquiryMailto(destination: string, input: Enquiry): string;
