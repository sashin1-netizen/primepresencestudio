# Private preview release plan

Starting commit: `5e245ac1b257e6941ee27ef857a2ad77a45aea2f`

Branch: `codex/website-cinematic-production`

Target: safe, noindex, hosting-ready private preview. Public production remains prohibited.

## Milestones

1. Remove the known invalid email and gate every contact channel by validity and explicit confirmation.
2. Make public launch an explicit, deterministic failing validation mode while allowing a truthful private preview.
3. Strengthen preview noindex/robots/sitemap/route behavior and add a repeatable smoke command.
4. Add non-destructive Lighthouse detection, Vercel setup guidance, legal/media/device owner actions and environment templates.
5. Run public and preview builds, route/CSP/accessibility checks, commit coherent milestones and push without deploying.

## Invariants

- No unconfirmed email, phone, WhatsApp or social URL renders as an active public contact.
- No draft/unapproved content enters public routes, sitemap, metadata or structured data.
- Preview credentials are never embedded in client variables; host-level protection is required for internet-accessible sensitive review.
- Missing owner facts produce disabled controls and truthful messaging, not invented fallbacks.
- The three intentionally untracked files remain untouched.
