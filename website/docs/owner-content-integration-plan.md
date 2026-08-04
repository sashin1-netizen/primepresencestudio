# Owner content integration plan

Starting branch: `codex/website-cinematic-production`  
Starting commit: `f8db64af928a20caf9f38484df7499add867103b`  
Public launch status: blocked  
Private preview status: approved with the controls and limitations documented in this milestone

## Contract

Owner-controlled facts and approvals will live in one runtime manifest with TypeScript declarations. Public consumers will use shared publication predicates; no component may promote a draft, review, approved-but-unpublished, rejected, unconsented or rights-incomplete record. Missing optional content keeps sections hidden and does not fail ordinary builds. Invalid content marked `published` is a hard validation failure.

## Milestones

1. Add the owner manifest, validation schema, publication predicates and deterministic reports.
2. Migrate business, project and proof consumers to the manifest without changing the visual direction.
3. Add environment-controlled private preview and a non-indexed readiness dashboard that exposes statuses and missing fields, not sensitive draft copy.
4. Add case-study, people, testimonial, sitemap, metadata, media-rights and launch-gate tests.
5. Supply owner intake forms and legal, domain, Lighthouse, real-device and preview operating guides.
6. Run unit, content, type, lint, build, route, 404, asset and representative accessibility checks; commit and push only verified milestones.

## Invariants

- Public content requires `publicationStatus: "published"` plus every applicable approval and rights gate.
- Preview mode defaults off and never changes the public sitemap.
- No owner fact, person, client, result, testimonial, right or approval is inferred.
- The three excluded local files remain untouched.
- No deployment, DNS, main-branch merge, paid service or force-push is in scope.

## Completion evidence

The milestone requires fresh command output for content validation/reporting, unit tests, ESLint, TypeScript, production build, route/404 checks and any browser checks actually performed. Missing external evidence remains a generated blocker rather than a synthetic pass.
