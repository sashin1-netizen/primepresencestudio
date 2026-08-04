import type { OwnerContent } from "../content/owner-content.mjs";
export type ValidationIssue = { severity: "blocker" | "warning"; code: string; path: string; message: string };
export function validateOwnerContent(content: OwnerContent, options?: { assetExists?: (src: string) => boolean }): ValidationIssue[];
export function publicationSummary(content: OwnerContent): Record<string, Array<{ id: string; publicationStatus: string }>>;
