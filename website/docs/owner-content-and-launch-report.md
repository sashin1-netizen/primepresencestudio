# Owner content and launch report

Starting commit: `f8db64af928a20caf9f38484df7499add867103b`  
Verified implementation commit: `2c5ec29`  
Final documentation/report commit: recorded in the Git handoff after this file is committed  
Branch: `codex/website-cinematic-production`

## Delivered system

- `content/owner-content.mjs` plus declarations is the owner manifest for business, brand, people, testimonials, projects, legal, media, Open Graph and verification evidence.
- Shared predicates require `published`, approval dates and applicable person rights, testimonial consent, project media rights and client publication approval.
- Project routes, related work, sitemap entries, metadata and structured data derive only from publishable records.
- Privacy and Terms stay 404 and outside the sitemap until legally approved; preview mode can expose them for controlled review.
- Contact facts derive from the manifest. The current invalid/unconfirmed destination and missing privacy approval disable enquiry submission instead of producing a broken handoff.
- The development review dashboard derives exact unresolved fields and launch gates without fake percentages.
- The unused hard-coded testimonial prototype was removed.

## Scripts and commands

```powershell
npm run content:validate  # schema, paths, rights and accidental-publication safety
npm run content:preview   # JSON status and unresolved-field preview
npm run content:report    # regenerate docs/generated-launch-readiness.md
npm run test              # publication, validation, contact and WhatsApp tests
npm run test:routes       # run while the production server is available
npm run lint
npx tsc --noEmit
npm run build
```

`content:validate` reports owner launch blockers but exits unsuccessfully only when records are configured in a way that could expose invalid published content. This lets optional empty sections remain absent while refusing unsafe publication.

## Validation and publication rules

Validation covers required business facts, email/telephone/WhatsApp syntax, HTTPS social/canonical URLs, legal approval, OG fallback, statuses, slugs, duplicate slugs/filenames, media paths, alt text, formats, size limits, video posters, case-study evidence, people image rights, testimonial quote/consent, media permission and project client approval. Supported images: AVIF/WebP/JPEG/PNG/SVG; videos: MP4/WebM. Images enforce 500 KB and videos 5 MB in the validation layer.

Status progression is `draft` → `review` → `approved` → `published`; `rejected` is terminal/non-public. `approved` alone is deliberately not public.

## Private preview

`PRIVATE_PREVIEW_MODE=true` adds a prominent banner, site-wide noindex metadata and robots disallow. `PRIVATE_PREVIEW_INCLUDE_DRAFTS=true` additionally enables draft project review routes. Both are server environment variables. Public builds default off, `/review` is 404 and the sitemap remains published-only in every mode. There is no authentication backend: use draft preview only on localhost or behind real platform access control.

## Current blockers

- Business: legal name, service area, copyright holder, legal/privacy/terms contacts, domain/canonical URL, owner confirmation and approval date.
- Contact: the previously entered malformed email was removed; the owner must supply and confirm the intended mailbox.
- Legal: privacy/terms approval, reviewer/date, cookie and analytics determinations, media/project wording and outstanding issue closure.
- Media/proof: no approved default OG artwork, case studies, founders, team or testimonials. Optional people/proof sections correctly remain hidden.
- Domain: no confirmed production host or host-level validation.
- Devices: all required real-device rows remain untested.
- Lighthouse: no global/local command was found; the package check timed out and no dependency change was made. Manual free steps are documented.
- Contact flow: intentionally blocked until the contact and privacy gates pass.

## Fresh evidence

- Unit tests: 22 passed, 0 failed.
- ESLint: passed without warnings.
- TypeScript: passed.
- Public and private-preview production builds: passed.
- Public route checks: expected 200 routes passed; `/review`, unapproved legal routes, unpublished projects and unknown routes returned 404.
- CSP was present and contained no `unsafe-eval`.
- Preview checks: banner/noindex, robots disallow, dashboard access and sitemap exclusion passed.
- Representative axe rerun: zero violations for Home, Services and Contact at 390×844 and 1440×900.
- Lighthouse and physical-device testing were not performed.

## Recommendation and exact owner actions

Public launch remains **NO-GO**. Controlled local or access-protected private preview remains **APPROVED**.

1. Complete the ten forms in `docs/owner-intake/` and attach approval/right references outside the public repository.
2. Correct and confirm the public email/telephone/WhatsApp data.
3. Obtain professional legal approval and close every recorded issue.
4. Supply rights-cleared default OG artwork and any genuine proof records.
5. Confirm the canonical domain, then perform the non-mutating domain checklist on an authorised candidate.
6. Complete the real-device sign-off and fresh Lighthouse run.
7. Run the commands above; require `docs/generated-launch-readiness.md` to show READY before signing the final launch form.
