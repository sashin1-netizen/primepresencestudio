# Private-preview readiness report

Approval date: 2026-08-04

Verified implementation commit: `c31843bf2def95252777437d8d1e637872b4c186`

Decision: `APPROVED FOR PROTECTED PRIVATE PREVIEW — PUBLIC LAUNCH NOT APPROVED`

## Scope approved

Local development and preview, access-protected private preview, owner review, internal testing, and private sharing with specifically authorised reviewers. Public deployment, domain attachment, indexing, announcement, advertising, public client access, unapproved publication, and merging to `main` remain prohibited.

## Fresh verification evidence

- Branch and target commit: exact match; worktree initially contained only the three intentionally preserved untracked files.
- `npm test`: 29/29 passed.
- `npm run lint`: passed.
- `npx tsc --noEmit`: passed.
- `npm run preview:verify`: protected-preview production build and runtime checks passed for banner/watermark, noindex, disallow-all robots, sitemap exclusions, truthful contact fallback, review access, CSP without `unsafe-eval`, and legal/project/unknown-route 404s.
- Default production build plus `node scripts/route-smoke.mjs`: passed all public routes, unpublished/legal/review/unknown 404s, and CSP check.
- `npm run launch:validate`: correctly blocked public launch.
- `PUBLIC_LAUNCH_APPROVED=true npm run build`: correctly refused the public build while critical gates remain incomplete.
- Source and test inspection confirmed publication selectors gate contact, legal, projects, testimonials, founders, team, media rights, Open Graph metadata, structured data, and sitemap output.
- The known malformed email literal is absent from runtime source and generated runtime checks.
- SHA-256 fingerprints of the three intentionally excluded files were captured before and after verification and remained unchanged.

## Remaining owner blockers

Confirmed legal/business identity and monitored contact channels; production domain and canonical URL; approved privacy and terms; client, testimonial, people-image and media-rights evidence; approved 1200×630 Open Graph artwork; real-device signoff; production Lighthouse evidence; contact-flow evidence; and recorded final public-launch approval.

Host-level access protection remains mandatory for any internet-accessible preview. No deployment, DNS change, domain attachment, preview-protection removal, or merge was performed. No readiness percentage or compliance claim is made.
