# Cinematic production audit

## Verified starting point

- Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4 and Framer Motion 12.
- Dark neutral foundation with gold accent, serif display stack and system sans-serif body stack.
- Existing motion used Framer Motion viewport reveals, a continuous ribbon, glow animation and connection-aware hero video.
- Homepage sequence was hero, positioning panel, services, pending portfolio, process, industries, insights, FAQ and contact.
- Contact was an honest client-side validation and mail-app handoff with WhatsApp alternative; no backend or stored success state.
- Portfolio had no approved projects and explicitly said so.

## Risks found

- Design values were repeated as arbitrary Tailwind colours, radii, shadows and spacing.
- The homepage repeated generic card grids and gradients, reducing editorial pacing.
- Several unused prototype components still contain unsupported testimonial/AI copy, though they are not rendered.
- Original JPEGs are 1.9–4.9 MB each; three homepage sources were unnecessarily large.
- Some motion components did not query reduced-motion directly and relied only on global CSS.
- The viewport disabled pinch zoom. No custom 404/error boundary, manifest or environment example existed.
- Contact errors were grouped rather than field-specific. The mail-client handoff cannot guarantee that a visitor completes sending.
- Lighthouse reports are stale generated diagnostics and must not be treated as current evidence.

## Dependencies

- Keep Next, React, Tailwind and Framer Motion. They cover routing, image optimisation, layout and the limited motion needed.
- Avoid Lenis, GSAP, Three.js, React Three Fiber, carousel libraries and a second animation system. None adds enough value for this milestone or the target hardware.

## Highest-impact opportunities implemented

1. Consolidate colour, surface, typography, spacing, radius, shadow, z-index and motion tokens.
2. Replace the hero with an editorial, immediately usable composition and mobile-first CTA stack.
3. Add reusable reduced-motion-aware cinematic primitives and deliberately paced media sections.
4. Replace generic trust signals with truthful working principles.
5. Add a typed, publication-gated project model without inventing work.
6. Create WebP derivatives for the three homepage images, reducing their combined source payload from 11.2 MB to about 355 KB.
7. Add 404/error states, manifest, cache headers and conditional truthful structured data.

## Content and launch blockers

- Portfolio facts and media approval, production domain, business/contact confirmation, legal review, social links and final Open Graph artwork remain owner inputs.
- Every file under `public/images/real` and `public/videos/real` still requires rights confirmation.
- A production form backend remains optional but unresolved; the current handoff is honest and functional.

## Prioritised implementation plan

1. Secure foundation commit.
2. Consolidate design tokens and cinematic primitives.
3. Recompose homepage and conversion sequence.
4. Optimise rendered media and mobile behaviour.
5. Complete SEO, accessibility, security and production documentation.
6. Verify lint, types, build, routes and Git scope; commit coherent milestone.
