import fs from "node:fs";
import path from "node:path";
import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { validateOwnerConfig } from "../lib/owner-config.mjs";
import { validateOwnerContent } from "../lib/content-validation.mjs";

const file = path.resolve("content/owner-config.json");
const mode = process.argv[2] || "validate";
const dryRun = process.argv.includes("--dry-run");
const config = JSON.parse(fs.readFileSync(file, "utf8"));

if (mode === "setup") await setup();
else if (mode === "validate") validate();
else if (mode === "report") report();
else { console.error(`Unknown owner workflow: ${mode}`); process.exitCode = 2; }

function validate() {
  const schema = validateOwnerConfig(config);
  const content = validateOwnerContent(config, { assetExists: src => fs.existsSync(path.resolve("public", `.${src}`)) });
  for (const item of schema) console.error(`BLOCK ${item.path}: ${item.message}`);
  for (const item of content) console.log(`${item.severity.toUpperCase()} ${item.path}: ${item.message}`);
  if (schema.length) process.exitCode = 1;
  else console.log(`Owner configuration schema valid. ${content.length} launch-readiness item(s) remain.`);
}

function report() {
  const rows = [
    ["Business", config.business.ownerConfirmed],
    ["Contact", config.business.emailConfirmed || config.business.telephoneConfirmed || config.business.whatsappConfirmed],
    ["Founder", config.founders.some(item => item.publicationStatus === "published")],
    ["Team", config.team.length ? config.team.some(item => item.publicationStatus === "published") : null],
    ["Testimonials", config.testimonials.length ? config.testimonials.some(item => item.publicationStatus === "published") : null],
    ["Projects", config.projects.some(item => item.publicationStatus === "published")],
    ["Media", config.media.some(item => item.publicationStatus === "published" && item.permissionStatus === "approved")],
    ["Legal", config.legal.privacyApproval && config.legal.termsApproval], ["Domain", config.verification.domainValidated],
    ["Open Graph", config.openGraph.defaultArtwork?.publicationStatus === "published"], ["Devices", config.verification.realDeviceSignoff],
    ["Lighthouse", config.verification.lighthouseVerified], ["Public launch", config.verification.launchApprovalRecorded],
  ];
  for (const [label, value] of rows) console.log(`${label}: ${value === null ? "Not applicable" : value ? "Ready" : "Blocked"}`);
}

async function setup() {
  if (!input.isTTY) {
    if (dryRun) { console.log(JSON.stringify(config, null, 2)); console.log("DRY RUN: non-interactive preview only; no file written."); return; }
    console.error("owner:setup requires an interactive terminal. Add --dry-run to inspect without writing."); process.exitCode = 2; return;
  }
  const rl = createInterface({ input, output }); const next = structuredClone(config);
  const fields = [["Public business name","publicName"],["Legal business name","legalName"],["Confirmed email","email"],["International telephone (+country...)","telephone"],["WhatsApp (international digits)","whatsapp"],["Location wording","location"],["Service area","serviceArea"],["Production domain (hostname only)","domain"],["Canonical HTTPS URL","canonicalUrl"],["Copyright holder","copyrightHolder"]];
  for (const [label, key] of fields) { const answer = (await rl.question(`${label} [${next.business[key] ?? ""}] (Enter to keep): `)).trim(); if (answer) next.business[key] = answer; }
  for (const [valueKey, flagKey] of [["email","emailConfirmed"],["telephone","telephoneConfirmed"],["whatsapp","whatsappConfirmed"]]) if (next.business[valueKey]) next.business[flagKey] = (await rl.question(`Confirm ${valueKey} for publication? Type YES: `)).trim() === "YES";
  const errors = validateOwnerConfig(next); console.log(JSON.stringify(next.business, null, 2));
  if (errors.length) { for (const item of errors) console.error(`BLOCK ${item.path}: ${item.message}`); rl.close(); process.exitCode = 1; return; }
  if (dryRun) { console.log("DRY RUN: no file written."); rl.close(); return; }
  if ((await rl.question("Write exactly these changes? Type WRITE: ")).trim() !== "WRITE") { console.log("Cancelled; no file written."); rl.close(); return; }
  const backup = `${file}.backup-${new Date().toISOString().replace(/[:.]/g, "-")}`;
  fs.copyFileSync(file, backup); fs.writeFileSync(file, `${JSON.stringify(next, null, 2)}\n`);
  console.log(`Updated ${file}\nBackup: ${backup}`); rl.close();
}
