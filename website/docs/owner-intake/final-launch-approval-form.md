# Final launch approval form

Purpose: provide the explicit owner/release decision after every critical gate has evidence.

Record source commit, deployment candidate, domain, content-validation report, legal approval, media-rights register, client approvals, OG preview, build/routes/404 results, accessibility evidence, contact-flow result, security result, real-device sign-off, Lighthouse report, unresolved non-critical items, rollback owner, decision, approver and date.

Example decision: `[approved/failed] for public launch at [commit/domain] subject to [none or listed conditions]`. “Private preview approved” is not public-launch approval. Do not sign until `npm run content:report` reports READY and external evidence is attached.
