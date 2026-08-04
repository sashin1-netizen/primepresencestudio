# Final Open Graph artwork brief

- Canvas: exactly 1200 × 630 pixels; keep essential logo/text inside the central 1000 × 500 safe area.
- Use only the approved Prime Presence logo and approved brand colours. Suggested brand-only hierarchy: logo, then the approved tagline; no client names, results or proof without publication approval.
- Maintain strong foreground/background contrast and test at small mobile-card size. Avoid fine text and edge-aligned details.
- Export WebP or JPEG, sRGB, with a recommended maximum of 300 KB. Naming: `prime-presence-og-default-v01.webp`; route overrides use `prime-presence-og-{route}-v01.webp`.
- Supply concise factual alt text, copyright holder, source, permission status, route usage, publication status and approval date.
- Default artwork is used only when `published` and approved. Route overrides must match their route; project artwork requires the project itself to pass client, media-rights and publication gates.

Workflow: create draft → register as `draft` → owner/rights review → record approval → set `published` only under public-release authority → run `npm run media:validate` and `npm run launch:validate`.

No draft image was generated because no approved source logo asset is registered. This avoids inventing or silently approving brand artwork.
