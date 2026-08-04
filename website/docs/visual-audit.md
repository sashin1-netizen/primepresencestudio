# Screenshot-backed visual audit

## Scope and evidence

Chrome DevTools device emulation captured the production experience on 4 August 2026. Home, Services, Work, About, Process, Contact, Insights, Privacy, Terms and 404 were checked at 320×568, 375×667, 390×844, 768×1024, 1024×768, 1280×720 and 1440×900. The 70 exact-viewport captures, viewport metrics and axe results are in `docs/artifacts/browser-audit/`.

No approved project exists, so a project-detail screenshot cannot truthfully be produced; an unpublished slug resolves to 404.

## Findings and resolution

1. **Homepage/mobile — fixed:** the desktop header CTA previously overrode Tailwind's hidden state and overflowed narrow screens. It now uses a responsive wrapper.
2. **Contact/mobile — fixed:** grid items and fields now permit shrinking, preventing right-edge clipping.
3. **Heading and landmark structure — fixed:** Contact owns its H1 and embedded contact content remains inside the Services main landmark.
4. **Navigation — fixed:** mobile navigation has matching visible/accessibility names, contained focus, Escape handling, focus restoration and inert background content.
5. **Contrast — fixed:** footer copy and the primary-action surface were increased after axe identified sub-4.5:1 combinations. The final representative production scan has zero violations.
6. **Responsive geometry — passed:** recorded mobile document widths equal client widths; every audited page has exactly one H1.
7. **Content integrity — passed:** Work shows an explicit empty state rather than invented case studies, and no draft proof is rendered.

## Evidence limits

Emulation validates responsive layout and static pixels, not physical-device browser chrome, screen-reader output, touch ergonomics, email-client handoff, sustained animation or network performance. Those checks remain in the real-device and launch checklists.
