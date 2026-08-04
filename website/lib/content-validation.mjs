import { PUBLICATION_STATUSES } from "../content/owner-content.mjs";
import { canPublishPerson, canPublishProject, canPublishTestimonial } from "./publication.mjs";

const IMAGE_FORMATS = new Set([".avif", ".webp", ".jpg", ".jpeg", ".png", ".svg"]);
const VIDEO_FORMATS = new Set([".mp4", ".webm"]);
const MAX_IMAGE_BYTES = 500_000;
const MAX_VIDEO_BYTES = 5_000_000;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const internationalPhone = /^\+?[1-9]\d{7,14}$/;

const extension = value => value?.slice(value.lastIndexOf(".")).toLowerCase() || "";
const issue = (severity, code, path, message) => ({ severity, code, path, message });
const required = (issues, value, path, label) => { if (!String(value ?? "").trim()) issues.push(issue("blocker", "required", path, `${label} is required.`)); };
const validUrl = value => { try { return new URL(value).protocol === "https:"; } catch { return false; } };

export function validateOwnerContent(content, options = {}) {
  const issues = []; const { assetExists = () => true } = options; const { business, legal, openGraph } = content;
  for (const [key, label] of [["publicName","Public business name"],["legalName","Legal business name"],["email","Email"],["telephone","Telephone"],["whatsapp","WhatsApp"],["location","Location wording"],["serviceArea","Service area"],["copyrightHolder","Copyright holder"],["legalContact","Legal contact"],["privacyContact","Privacy contact"],["termsContact","Terms contact"],["domain","Domain"],["canonicalUrl","Canonical URL"]]) required(issues, business[key], `business.${key}`, label);
  if (business.email && !emailPattern.test(business.email)) issues.push(issue("blocker", "invalid_email", "business.email", "Email address is invalid."));
  for (const key of ["telephone", "whatsapp"]) if (business[key] && !internationalPhone.test(business[key].replace(/[\s()-]/g, ""))) issues.push(issue("blocker", "invalid_phone", `business.${key}`, `${key} must use a valid international number.`));
  if (business.canonicalUrl && !validUrl(business.canonicalUrl)) issues.push(issue("blocker", "invalid_url", "business.canonicalUrl", "Canonical URL must be an absolute HTTPS URL."));
  business.socialLinks.forEach((link, index) => { if (!validUrl(link.url)) issues.push(issue("blocker", "invalid_social_url", `business.socialLinks.${index}.url`, "Social URL must use HTTPS.")); });
  if (!business.ownerConfirmed || !business.approvalDate) issues.push(issue("blocker", "business_unconfirmed", "business", "Business details require owner confirmation and an approval date."));
  if (!legal.privacyApproval || !legal.termsApproval || !legal.legalReviewer || !legal.approvalDate || legal.outstandingIssues.length) issues.push(issue("blocker", "legal_unapproved", "legal", "Privacy, terms and outstanding legal issues require recorded legal approval."));
  if (!openGraph.defaultArtwork) issues.push(issue("blocker", "missing_og_fallback", "openGraph.defaultArtwork", "Approved default Open Graph artwork is required."));

  const allAssets = []; const slugs = new Map();
  content.projects.forEach((project, index) => {
    const path = `projects.${index}`; validateStatus(issues, project, path);
    required(issues, project.slug, `${path}.slug`, "Project slug"); required(issues, project.clientName, `${path}.clientName`, "Client name"); required(issues, project.summary, `${path}.summary`, "Summary");
    if (project.slug) { if (slugs.has(project.slug)) issues.push(issue("blocker", "duplicate_slug", `${path}.slug`, `Duplicate project slug: ${project.slug}.`)); slugs.set(project.slug, true); }
    if (project.publicationStatus === "published" && !canPublishProject(project)) issues.push(issue("blocker", "project_publication_blocked", path, "Published project lacks approval date, media rights, client approval or slug."));
    if (project.publicationStatus === "published" && !project.gallery?.length && !project.websitePreview && !project.beforeAndAfter) issues.push(issue("blocker", "missing_case_study_evidence", path, "Published project requires at least one visual evidence source."));
    collectProjectAssets(project, path, allAssets);
    if (project.brandRevealVideo && !project.brandRevealVideo.poster) issues.push(issue("blocker", "missing_video_poster", `${path}.brandRevealVideo.poster`, "Video requires a poster image."));
  });
  for (const [group, records, predicate] of [["founders",content.founders,canPublishPerson],["team",content.team,canPublishPerson],["testimonials",content.testimonials,canPublishTestimonial]]) records.forEach((record, index) => { const path = `${group}.${index}`; validateStatus(issues, record, path); if (record.publicationStatus === "published" && !predicate(record)) issues.push(issue("blocker", `${group}_publication_blocked`, path, `Published ${group} record lacks required approval, consent or rights.`)); if (group === "testimonials" && !record.quote?.trim()) issues.push(issue(record.publicationStatus === "published" ? "blocker" : "warning", "empty_testimonial", `${path}.quote`, "Testimonial quote is empty.")); if (record.portrait) allAssets.push({ ...record.portrait, path: `${path}.portrait`, kind: "image" }); });
  content.media.forEach((record, index) => { validateStatus(issues, record, `media.${index}`); allAssets.push({ src: `/media/${record.filename}`, filename: record.filename, bytes: record.bytes, path: `media.${index}`, kind: VIDEO_FORMATS.has(extension(record.filename)) ? "video" : "image" }); if (record.publicationStatus === "published" && record.permissionStatus !== "approved") issues.push(issue("blocker", "missing_media_rights", `media.${index}`, "Published media requires approved permission.")); });
  for (const artwork of [openGraph.defaultArtwork, ...openGraph.routeArtwork, ...openGraph.projectArtwork].filter(Boolean)) allAssets.push({ ...artwork, path: "openGraph", kind: "image" });
  validateAssets(issues, allAssets, assetExists);
  return issues;
}

function validateStatus(issues, record, path) { if (!PUBLICATION_STATUSES.includes(record.publicationStatus)) issues.push(issue("blocker", "invalid_publication_status", `${path}.publicationStatus`, "Publication status is missing or unsupported.")); }
function collectProjectAssets(project, path, assets) { project.gallery?.forEach((asset, i) => assets.push({ ...asset, path: `${path}.gallery.${i}`, kind: "image" })); if (project.websitePreview) for (const [key, asset] of Object.entries(project.websitePreview)) if (key !== "url" && asset) assets.push({ ...asset, path: `${path}.websitePreview.${key}`, kind: "image" }); if (project.beforeAndAfter) for (const key of ["before","after"]) assets.push({ ...project.beforeAndAfter[key], path: `${path}.beforeAndAfter.${key}`, kind: "image" }); if (project.brandRevealVideo) { assets.push({ src: project.brandRevealVideo.src, filename: project.brandRevealVideo.filename, bytes: project.brandRevealVideo.bytes, path: `${path}.brandRevealVideo`, kind: "video" }); assets.push({ src: project.brandRevealVideo.poster, filename: project.brandRevealVideo.posterFilename, path: `${path}.brandRevealVideo.poster`, kind: "image" }); } if (project.openGraphArtwork) assets.push({ ...project.openGraphArtwork, path: `${path}.openGraphArtwork`, kind: "image" }); }
function validateAssets(issues, assets, assetExists) { const names = new Set(); for (const asset of assets) { if (!asset.filename) issues.push(issue("blocker", "missing_filename", asset.path, "Asset filename is required.")); else if (names.has(asset.filename)) issues.push(issue("blocker", "duplicate_filename", asset.path, `Duplicate asset filename: ${asset.filename}.`)); else names.add(asset.filename); if (!asset.src || !assetExists(asset.src)) issues.push(issue("blocker", "missing_asset", asset.path, `Asset does not exist: ${asset.src || "(empty)"}.`)); if (asset.kind === "image") { if (!IMAGE_FORMATS.has(extension(asset.filename || asset.src))) issues.push(issue("blocker", "unsupported_image", asset.path, "Unsupported image format.")); if (!asset.alt?.trim()) issues.push(issue("blocker", "missing_alt", asset.path, "Image alt text is required.")); if (asset.bytes > MAX_IMAGE_BYTES) issues.push(issue("blocker", "oversized_image", asset.path, `Image exceeds ${MAX_IMAGE_BYTES} bytes.`)); } else { if (!VIDEO_FORMATS.has(extension(asset.filename || asset.src))) issues.push(issue("blocker", "unsupported_video", asset.path, "Unsupported video format.")); if (asset.bytes > MAX_VIDEO_BYTES) issues.push(issue("blocker", "oversized_video", asset.path, `Video exceeds ${MAX_VIDEO_BYTES} bytes.`)); } } }

export function publicationSummary(content) { return { founders: content.founders.map(statusRow), team: content.team.map(statusRow), testimonials: content.testimonials.map(statusRow), projects: content.projects.map(statusRow), media: content.media.map(statusRow) }; }
const statusRow = record => ({ id: record.slug || record.id || record.filename, publicationStatus: record.publicationStatus });
