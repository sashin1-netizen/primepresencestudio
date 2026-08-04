import { validateOwnerContent } from "./content-validation.mjs";

export function evaluateLaunchReadiness(content, options = {}) {
  const issues = validateOwnerContent(content, options); const critical = issues.filter(item => item.severity === "blocker"); const v = content.verification;
  const gates = [
    ["production_domain", Boolean(content.business.domain && content.business.canonicalUrl && v.domainValidated), "Confirmed production domain and canonical validation"],
    ["business_contact", Boolean(content.business.email && content.business.telephone && content.business.ownerConfirmed), "Confirmed public business contact information"],
    ["legal_approval", content.legal.privacyApproval && content.legal.termsApproval && Boolean(content.legal.approvalDate), "Privacy and terms legal approval"],
    ["open_graph_fallback", Boolean(content.openGraph.defaultArtwork?.publicationStatus === "published"), "Published default Open Graph fallback"],
    ["production_build", v.productionBuildPassed, "Fresh production build"], ["route_checks", v.routeChecksPassed, "Route and 404 checks"],
    ["accessibility", v.accessibilityCriticalChecksPassed, "Critical accessibility checks"], ["contact_flow", v.contactFlowPassed, "Contact flow"],
    ["real_device", v.realDeviceSignoff, "Real-device sign-off"], ["security", v.highSeveritySecurityIssuesResolved, "High-severity security review"],
  ].map(([code, passed, label]) => ({ code, label, passed: Boolean(passed), critical: true }));
  const optional = [["team", content.team.some(item => item.publicationStatus === "published"), "Published team section"],["testimonial", content.testimonials.some(item => item.publicationStatus === "published"), "Published testimonial"],["project_video", content.projects.some(item => item.publicationStatus === "published" && item.brandRevealVideo), "Published project video"]].map(([code, passed, label]) => ({ code, label, passed: Boolean(passed), critical: false }));
  return { ready: critical.length === 0 && gates.every(gate => gate.passed), gates: [...gates, ...optional], validationIssues: issues };
}
