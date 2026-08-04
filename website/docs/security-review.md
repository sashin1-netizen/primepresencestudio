# Security review

## Confirmed controls

- CSP: self default/base; no objects, frames or mixed content; no `unsafe-eval`; explicit self connect, self/blob media and self/mailto form action.
- `frame-ancestors 'none'`, X-Frame-Options DENY, nosniff, strict-origin referrer, restricted permissions and production HSTS.
- External WhatsApp links use `rel="noreferrer"`; messages are URL encoded and the international number is validated by tests.
- No `dangerouslySetInnerHTML`, uploads, analytics, third-party scripts or frontend secrets.
- Only `NEXT_PUBLIC_SITE_URL` is documented; it is public by design.
- Contact data remains client-side and is not falsely reported as submitted.
- Error UI does not expose stack details.

## Residual risks

- CSP retains `script-src 'unsafe-inline'` for Next.js bootstrap compatibility. A nonce-based CSP is preferable only after end-to-end testing on the selected host.
- No server form means no server validation/rate limiting, but also no server-side data store or endpoint attack surface.
- Dependency vulnerability status was not refreshed because registry access is unreliable. Run `npm audit --omit=dev` or an approved lockfile scanner in connected CI; do not use forced fixes.
- High-resolution unapproved media in `public` is directly addressable even when components do not reference it. Move masters outside the deployed directory after the owner completes the rights review.
- Confirm production source maps remain disabled and verify response headers on the real host.

Security score: **84/100**. No critical source vulnerability found; dependency, host-header and nonce checks remain release gates.
