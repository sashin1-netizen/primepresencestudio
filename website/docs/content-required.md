# Owner content required

Nothing below may be invented. `P0` blocks public launch; `P1` materially affects conversion; `P2` is useful after launch.

| Priority | Content needed | Format and length | Approval | Page / purpose |
|---|---|---|---|---|
| P0 | Public and legal business name | Exact spelling plus legal contracting entity | Owner + legal | Global, Privacy, Terms; contract confidence |
| P0 | Production domain | Confirm HTTPS origin and www/non-www choice | Owner | Canonicals, sitemap, robots, schema, social cards |
| P0 | Contact facts | Supply and confirm the monitored email, international telephone/WhatsApp, hours and contact owner | Owner | Header, footer, contact; successful enquiry |
| P0 | Media-rights register | For every deployed image/video: creator, source, licence/assignment, client consent, territory/expiry, approval date | Owner + rights holder | Homepage and future work; lawful publication |
| P0 | Privacy and Terms | Reviewed final text, responsible legal entity and contact | Legal | Privacy/Terms; lawful launch |
| P0 | Open Graph artwork | 1200×630 WebP/JPEG, ≤300 KB, safe-area text, alt text | Brand owner + media rights | Social sharing credibility |
| P1 | First approved case study | Client name; industry; 3–6 services; 40–70 word summary; 80–150 word challenge/strategy/execution; deliverables; only evidenced results | Client publication approval + legal | Work/detail; proof and premium justification |
| P1 | Case-study media | Cover 1600×1200; gallery 1600 px long edge; WebP/AVIF ≤200 KB each; video ≤5 MB with poster/captions | Client + media rights | Work/detail; visual proof |
| P1 | Founder context | Name, role, 80–120 word biography, 3–5 relevant experience points, 40–70 word approach, location wording, approved portrait 1200×1500 | Founder + media rights | About; human trust |
| P1 | Team/collaborator context | Name, role, 50–90 word bio, approved image/social link; identify employment/collaboration accurately | Person approval + media rights | About; delivery confidence |
| P1 | Service operating facts | Ideal fit, exclusions, typical scope, owner-approved lead-time range, revisions, handover/usage rights, support boundary | Owner + legal where contractual | Services/FAQ/contact; qualification |
| P1 | Investment guidance | Confirm or replace R10k–R25k, R25k–R50k, R50k+ bands and whether to show starting investment | Owner | Contact; lead quality and premium fit |
| P1 | Testimonials | Exact quote, name, role/company, related project, written publication permission | Client approval | About/work; reassurance |
| P2 | Social links | Approved HTTPS profile URL and label | Owner | Footer/About; verification |
| P2 | Credentials | Exact title, issuer, evidence URL, valid date/status | Owner + issuer terms | About; verified authority only |
| P2 | Insights | 700–1,200 word original article, author, review date, unique social artwork | Author/owner | Insights; expertise and organic acquisition |

## Data-entry rules

- Owner-controlled records enter through `content/owner-content.mjs`; `content/projects.ts` and `content/proof.ts` are public adapters and should not be edited for intake.
- Use `draft` while entering, `review` during fact/right checks, `approved` after approval, and `published` only after public release is authorised. Only fully gated `published` records render, route, enter metadata/structured data or enter the sitemap.
- Founder, team and testimonial records remain hidden unless published with their applicable rights or consent evidence.
- The WebP derivatives inherit the rights status of their source JPEGs.
- Never publish an address, founding year, registration number, award, rating, result, credential or client relationship without evidence.
