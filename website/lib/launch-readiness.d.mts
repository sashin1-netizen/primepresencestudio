import type { OwnerContent } from "../content/owner-content.mjs"; import type { ValidationIssue } from "./content-validation.mjs";
export type LaunchGate = { code: string; label: string; passed: boolean; critical: boolean };
export function evaluateLaunchReadiness(content: OwnerContent, options?: { assetExists?: (src: string) => boolean }): { ready: boolean; gates: LaunchGate[]; validationIssues: ValidationIssue[] };
