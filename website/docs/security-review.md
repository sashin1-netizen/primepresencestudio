# Frontend security review

Review date: 2026-08-04

## Confirmed controls

- Public indexing is fail-closed: metadata, robots and sitemap remain private unless `PUBLIC_LAUNCH_APPROVED=true`, and that setting invokes the strict launch validator.
- CSP contains no `unsafe-eval`; framing is denied; MIME sniffing, referrer, permissions and HSTS headers are constrained.
- Draft projects, legal pages, review tooling, AI/portal prototypes, testimonials, people records, structured data and Open Graph records are excluded unless their publication gates pass.
- Unapproved media masters are stored under `assets/nonpublic-intake`, outside the deployed `public` tree.
- Contact fallbacks never simulate delivery and refuse unconfirmed destinations.
- No frontend secrets, uploads, analytics, third-party scripts or `dangerouslySetInnerHTML` usage were found.
- `npm audit --omit=dev` reports zero vulnerabilities after updating Next.js and its matching ESLint configuration to 16.3.0.

## Residual constraints

- CSP retains `script-src 'unsafe-inline'` for Next.js bootstrap compatibility. Replacing this with host-generated nonces requires deployment-host integration and end-to-end verification.
- Host-level access protection is mandatory for any internet-accessible private preview.
- Production response headers, redirects and source-map behavior require verification on the selected host.
- The standard multi-worker security workflow could not be used because this audit was required to remain in the current agent context; the frontend source, configuration, dependency and runtime checks were completed directly instead.

No known critical or high-severity frontend issue remains open. This is an engineering assessment, not a compliance certification.
