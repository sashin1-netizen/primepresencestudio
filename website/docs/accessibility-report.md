# Accessibility report

Target: WCAG 2.2 AA where practical.

## Automated/code checks

- ESLint and TypeScript pass.
- Semantic labels, required fields, autocomplete, `aria-invalid`, field descriptions and focus-on-first-error are present.
- Contact route now has an H1; Services contact remains an H2 within the same main landmark.
- Mobile navigation accessible name contains visible label, supports Escape, contains focus while open, restores focus and makes main/footer inert.
- Global visible focus, skip link, browser zoom support, 44 px targets and reduced-motion CSS are present.
- Native case-study video exposes controls and optional captions; device preview is keyboard-scrollable.
- axe-core completed against the production build at 390x844 and 1440x900 for Home, Services and Contact with zero violations after remediation; detailed evidence is in `docs/artifacts/browser-audit/axe-detailed.json`.

## Fixes in this phase

- Corrected Menu accessible-name mismatch.
- Added focus containment/background inert handling.
- Corrected Contact heading hierarchy and Services main landmark.
- Added Privacy link next to consent.
- Corrected responsive form minimum widths.
- Increased footer text and primary-action contrast after the first automated pass identified ratios below 4.5:1.

## Unverified

Screen reader, exhaustive keyboard traversal, 200% zoom, iOS VoiceOver, Android TalkBack and motion playback still require manual/device verification. Automated coverage is representative, not exhaustive. CSP `unsafe-inline` remains for Next.js inline bootstrap scripts and should be replaced only with a tested nonce strategy.

Status: strong code baseline; **not a WCAG certification**.
