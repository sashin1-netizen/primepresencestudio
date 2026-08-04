# Lighthouse status

Fresh Lighthouse could not be run: no local/global Lighthouse CLI or Playwright package is installed, and prior npm registry access failed with `ECONNRESET`. The two root Lighthouse JSON files are stale, intentionally untracked diagnostics and were not used as current scores.

Current evidence:

- Production build passes and all public routes are static/SSG.
- Priority hero source is a 94.9 KB WebP with explicit responsive sizing.
- No remote fonts, analytics, third-party scripts, WebGL or second motion library.
- Global page entrance moved from Framer Motion client hydration to CSS.
- Homepage media derivatives total about 355 KB; original masters remain publicly deployable but unreferenced and rights-blocked.

Required pre-launch run: Chrome mobile and desktop on `/`, `/work`, `/contact`, plus one approved `/work/[slug]`. Record Performance, Accessibility, Best Practices, SEO, LCP, CLS, TBT, total transfer, JS, image and video payload. Targets: LCP ≤2.5 s, CLS ≤0.1, INP ≤200 ms in field data. Fix causes, not score cosmetics.

Status: **unverified / launch blocker for performance sign-off**.
