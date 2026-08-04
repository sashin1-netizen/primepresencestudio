# Cinematic production report

## Git checkpoints

- Branch: `codex/website-cinematic-production`
- Foundation commit: `17414912364cf97a97a074973cd32bb823920b80`
- Final cinematic commit: recorded after final commit below.

## Completed work

- Consolidated colour, typography, spacing, surface, radius, shadow, z-index and motion values in the global token system.
- Rebuilt the hero as a mobile-first editorial composition with immediate Start a Project and View Our Work actions.
- Added reusable `SectionIntro`, `MotionText`, `SectionDivider`, `ResponsiveVideo` and `PremiumCTA` primitives plus composed brand-reveal, website-showcase and truthful trust sections.
- Re-paced the homepage around positioning, services, brand reveal, honest work archive, digital experience, process, trust, FAQ and contact.
- Added a typed, publication-gated project schema; no client record renders without approved owner content.
- Added custom error and 404 experiences, a web manifest, conditional ProfessionalService structured data and long-lived static media cache headers.
- Restored browser zoom by removing the maximum-scale restriction and strengthened required enquiry fields.
- Removed `unsafe-eval` from the Content Security Policy.
- Added environment, media and deployment guidance.

## Media and performance

- Produced three WebP derivatives used by the homepage. Their combined size is about 355 KB, down from roughly 11.2 MB for the corresponding JPEG sources.
- Next Image retains responsive sizing and prevents layout shift. Hero media is decorative and does not duplicate screen-reader content.
- Framer Motion remains the only animation dependency. Motion text checks the operating-system reduced-motion preference; global CSS also suppresses transitions and animation.
- No smooth-scroll library, canvas, WebGL, 3D library, carousel or additional runtime package was added.
- Original high-resolution media remains preserved pending licensing confirmation and should move to an external archive after owner review.

## Conversion and contact

- Primary CTA remains visible above the fold and repeats at the final decision point.
- Work, service, process and contact pathways are internally linked without fake scarcity or social proof.
- The form validates required identity/contact/project fields, explains the email-client handoff, and offers encoded WhatsApp fallback.
- There is no backend, stored submission or fake success message. Backend and spam-control requirements are documented.

## SEO, accessibility and security

- Existing titles, descriptions, canonicals, sitemap, robots and South African locale remain intact.
- ProfessionalService JSON-LD renders only when a confirmed `NEXT_PUBLIC_SITE_URL` is supplied, preventing an unconfirmed domain from entering structured data.
- Skip navigation, visible focus, semantic landmarks, browser zoom, keyboard menu controls, touch-sized actions and reduced motion remain supported.
- Unfinished `/ai` and `/portal` routes remain truthful and noindex; robots also excludes them.
- No secrets, unsafe HTML rendering, analytics or paid service was added. External WhatsApp links use `rel="noreferrer"` and URL encoding.

## Verification

- `npm.cmd run lint`: passed.
- `npx.cmd tsc --noEmit`: passed.
- `npm.cmd run build`: passed; 17 static outputs generated.
- Production smoke test: `/`, all public routes, `/ai`, `/portal`, robots, sitemap and manifest returned 200; a missing route returned 404.
- Automated unit tests: not added because the repository had no runner and the Vitest download failed twice with npm registry `ECONNRESET`. No package changes were left by the failed install.
- Visual browser automation, real-device checks and a fresh Lighthouse trace were not available; these remain manual release checks.

## Content and media gaps

See `content-required.md`. The largest blockers are approved portfolio facts/media, rights confirmation for the current studio media, confirmed domain/contact details, social preview artwork, and owner/legal review.

## Deployment prerequisites

See `production-deployment.md`. Set the confirmed `NEXT_PUBLIC_SITE_URL`, verify media rights and content, run the release gates, then deploy on a supported Node host. No deployment, DNS or domain action was performed.

## Commands

- Development: `npm.cmd run dev`
- Production build: `npm.cmd run build`
- Preview: `npm.cmd run start`

## Exact next owner actions

1. Confirm the business name, email, phone, hours and production domain.
2. Approve or replace every current `public/images/real` and `public/videos/real` asset.
3. Supply one or more verified case studies using the fields in `content/projects.ts`.
4. Approve legal copy and supply final Open Graph artwork.
5. Review the site on 320, 375, 390, 768 and 1024 px devices before authorising deployment.
