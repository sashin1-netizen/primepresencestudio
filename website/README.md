# Prime Presence website

Next.js 16 public website for Prime Presence. The current release is approved only for local use and access-protected private preview; public launch remains fail-closed.

## Local verification

```powershell
npm install
npm test
npm run lint
npx tsc --noEmit
$env:PRIVATE_PREVIEW_ENABLED='true'; npm run preview:verify
```

Owner-controlled facts live in `content/owner-config.json`; use `npm run owner:setup -- --dry-run`, `npm run owner:validate`, and `npm run owner:report`. Asset, device and Lighthouse workflows are documented under `docs` and exposed through their package scripts.

## Release safety

- Indexing and sitemap output default closed. They open only with `PUBLIC_LAUNCH_APPROVED=true`, and the build refuses that state until every critical launch gate passes.
- Draft or unapproved people, testimonials, projects, legal pages, media and Open Graph artwork do not publish.
- Rights-pending source assets are held under `assets/nonpublic-intake`, outside the web root.
- Internet-accessible previews require host-level authentication; noindex is not access control.

See `docs/final-owner-completion-checklist.md` and `docs/protected-preview-deployment-package.md`. Do not deploy, attach a domain, change DNS, or merge to `main` without separate approval.
