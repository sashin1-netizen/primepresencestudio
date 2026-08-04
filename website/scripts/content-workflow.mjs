import fs from "node:fs";
import path from "node:path";
import { ownerContent } from "../content/owner-content.mjs";
import { validateOwnerContent, publicationSummary } from "../lib/content-validation.mjs";
import { evaluateLaunchReadiness } from "../lib/launch-readiness.mjs";

const mode = process.argv[2] || "validate";
const publicRoot = path.resolve("public");
const assetExists = src => { if (!src?.startsWith("/") || src.startsWith("//")) return false; const target = path.resolve(publicRoot, `.${src}`); return target.startsWith(publicRoot) && fs.existsSync(target); };
const issues = validateOwnerContent(ownerContent, { assetExists });
const accidentalPublication = issues.filter(item => ["invalid_publication_status", "project_publication_blocked", "founders_publication_blocked", "team_publication_blocked", "testimonials_publication_blocked", "missing_media_rights", "missing_case_study_evidence", "missing_asset", "missing_alt", "unsupported_image", "unsupported_video", "oversized_image", "oversized_video", "missing_video_poster", "duplicate_slug", "duplicate_filename"].includes(item.code));

if (mode === "validate") {
  printIssues(issues);
  if (accidentalPublication.length) { console.error(`\nREFUSED: ${accidentalPublication.length} issue(s) could expose invalid or unapproved published content.`); process.exitCode = 1; }
  else console.log(`\nPublication safety validation passed. ${issues.length} launch-readiness blocker(s) remain documented.`);
} else if (mode === "preview") {
  console.log(JSON.stringify({ generatedAt: new Date().toISOString(), publication: publicationSummary(ownerContent), unresolved: issues }, null, 2));
} else if (mode === "report") {
  const readiness = evaluateLaunchReadiness(ownerContent, { assetExists });
  const markdown = renderReadiness(readiness);
  fs.writeFileSync("docs/generated-launch-readiness.md", markdown);
  console.log(markdown);
} else { console.error(`Unknown content workflow mode: ${mode}`); process.exitCode = 2; }

function printIssues(rows) { if (!rows.length) return console.log("No content issues found."); for (const row of rows) console.log(`[${row.severity.toUpperCase()}] ${row.code} ${row.path}: ${row.message}`); }
function renderReadiness(result) { const rows = result.gates.map(gate => `| ${gate.critical ? "Critical" : "Optional"} | ${gate.label} | ${gate.passed ? "Passed" : "Blocked"} |`).join("\n"); const issuesText = result.validationIssues.length ? result.validationIssues.map(item => `- **${item.code}** — \`${item.path}\`: ${item.message}`).join("\n") : "- None."; return `# Generated launch readiness\n\nGenerated from \`content/owner-content.mjs\` by \`npm run content:report\`. Do not edit manually.\n\nDecision: **${result.ready ? "READY" : "BLOCKED"}**\n\n| Priority | Gate | Status |\n|---|---|---|\n${rows}\n\n## Validation issues\n\n${issuesText}\n`; }
