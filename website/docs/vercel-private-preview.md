# Vercel private-preview deployment

This is a review deployment, not public-launch approval. Import the repository with root directory `website`, Node 20+, install command `npm install`, build command `npm run build`, and default Next.js output.

Set `PRIVATE_PREVIEW_ENABLED=true`, `PRIVATE_PREVIEW_INCLUDE_DRAFTS=false`, and `PUBLIC_LAUNCH_APPROVED=false`. Leave unconfirmed contact and canonical values blank. Apply Vercel Deployment Protection to every preview URL and share access only with named reviewers. Application noindex/robots/no-store controls are not authentication; host-level protection is mandatory.

Verify the protected URL's login challenge, banner/watermark, source `noindex`, disallow-all robots, `/review`, truthful contact fallback, and 404 behavior for unpublished projects, privacy, terms, and unknown routes. Never attach the production domain. Public release requires all owner gates, `npm run launch:validate`, and an intentional public-approval switch.
