# Protected-preview deployment package

Recommended choice: Vercel preview deployment protected at the hosting layer and shared only with named reviewers. Noindex alone is not access control.

1. Sign in to Vercel and choose Add New → Project.
2. Import the GitHub repository `primepresencestudio`.
3. Set Root Directory to `website`; framework Next.js; Node 20+; install `npm install`; build `npm run build`.
4. Select branch `codex/website-cinematic-production` for the preview. Do not select or merge `main`.
5. Add preview-only variables: `PRIVATE_PREVIEW_ENABLED=true`, `PRIVATE_PREVIEW_INCLUDE_DRAFTS=false`, `PUBLIC_LAUNCH_APPROVED=false`. Leave unconfirmed public values blank.
6. Enable Vercel Deployment Protection for the generated preview URL. Availability and authentication modes vary by current plan; verify the plan UI before relying on them.
7. Never attach the public domain. Confirm the preview banner and watermark.
8. Inspect source/headers for `noindex, nofollow, noarchive`; check `/robots.txt` contains `Disallow: /` and no sitemap declaration.
9. Verify `/sitemap.xml` excludes `/review`, drafts, unapproved projects and unapproved legal routes.
10. Verify truthful contact fallbacks, disabled submission, `/privacy` and `/terms` 404, unpublished project 404, unknown route 404, and CSP without `unsafe-eval`.
11. Run `npm run preview:verify` locally and record the protected URL checks separately.
12. Share only the access challenge/link with authorised reviewers. Revoke access in project/deployment protection settings after review.
13. Roll back by promoting a previously verified preview deployment only within the private project; keep public launch disabled.
14. Delete the preview deployment/project in Vercel when no longer needed, after retaining the commit and review record.

Free-plan features and protection limits can change; repository import and preview URLs are commonly available, while password/team authentication may require a paid plan. If adequate host-level protection is unavailable, use a local-network preview, Cloudflare Access eligibility, or an existing authenticated reverse proxy described in the hosting-neutral guide. Do not share an unprotected URL merely because it is noindexed.
