# Live release handoff

## Current position

The repository is technically release-ready, but no hosting provider, authenticated deployment CLI, deployment token or canonical production domain is configured. Publishing cannot be completed from this workspace without choosing or authorizing an external hosting target. Owner/legal/content gates remain blocked and must not be marked complete by a deployment.

## Recommended free path: Vercel preview

1. Sign in to Vercel with access to the GitHub repository and import `sashin1-netizen/primepresencestudio`.
2. Set **Root Directory** to `website`; framework should detect as Next.js. Do not override install/build/output commands.
3. For a controlled noindex preview set `PRIVATE_PREVIEW_MODE=true`. Leave `PRIVATE_PREVIEW_INCLUDE_DRAFTS` unset unless Vercel Deployment Protection or equivalent authentication is enabled.
4. Deploy the branch `codex/website-cinematic-production` as a preview. Verify the preview banner, noindex, robots disallow, `/review` behavior, contact disabled state and published-only sitemap.
5. Do not promote the deployment to public production until the generated launch report is READY.

## Public production after owner approval

- Set `NEXT_PUBLIC_SITE_URL=https://[confirmed-canonical-host]` without a trailing slash.
- Remove/disable both preview environment variables.
- Complete the production-domain, real-device, Lighthouse and final-launch forms.
- Run `npm run content:validate`, `npm run content:report`, `npm test`, `npm run lint`, `npx tsc --noEmit`, `npm run build` and the route smoke test against the candidate.
- Confirm the deployed CSP, HTTPS redirects, canonical/OG URLs, robots, sitemap, contact destinations and unknown-route 404 before promotion.

No DNS change, deployment or provider account creation was performed by this repository-only milestone.
