# Production deployment

## Runtime

- Node.js 20 or a version supported by the pinned Next.js release.
- Install: `npm ci`
- Build: `npm.cmd run build`
- Start/preview: `npm.cmd run start`
- No Docker, database, paid API or background worker is required.

## Environment

Copy `.env.example` to the host’s environment configuration and set `NEXT_PUBLIC_SITE_URL` to the confirmed HTTPS origin without a trailing slash. This controls canonical URLs, sitemap entries and truthful structured data. Do not put secrets in `NEXT_PUBLIC_*` variables.

## Domain and hosting

Any Node-capable host supporting Next.js 16 is suitable. Connect the domain and DNS only after ownership is confirmed. Enforce HTTPS and redirect the non-canonical host (for example `www`) to the selected origin at the hosting layer.

Static media has immutable one-year cache headers. Replace versioned filenames when assets change. A media CDN is not required at current scale; use one only after measuring a real need.

## Enquiries

The current form validates locally and opens a prepared message in the visitor’s email client. It stores nothing and cannot confirm delivery. A future backend should use server-side validation, rate limiting, a honeypot or privacy-respecting challenge, explicit delivery failure handling and no frontend secrets.

## Before launch

Confirm all items in `content-required.md`, run lint/type/build, inspect all routes at mobile and desktop sizes, verify the production sitemap/robots output, add approved social preview art, and conduct owner/legal review. Deployment and DNS changes require explicit approval.
