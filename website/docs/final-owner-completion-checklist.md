# Final owner completion checklist

Run commands from `website`. Critical means public launch cannot proceed; optional content remains hidden when omitted.

| Order | Action | Exact input and location | Validate / expected result | Critical? |
|---:|---|---|---|---|
| 1 | Confirm email | Valid monitored address + confirmation in `content/owner-config.json` | `npm run owner:validate`; no email error | Yes |
| 2 | Confirm phone | International `+country` number + confirmation | Owner validation; no telephone error | No if another contact is approved |
| 3 | Confirm WhatsApp | International digits + confirmation | Owner validation; no WhatsApp error | No if another contact is approved |
| 4 | Confirm business | Legal/public names, location, service area, copyright, approval date | Owner report shows Business ready | Yes |
| 5 | Confirm domain | Hostname, HTTPS canonical URL, validation evidence | Launch validator domain gate passes | Yes |
| 6 | Approve OG | 1200×630 WebP/JPEG ≤300 KB, alt/rights/approval | Media validator and OG gate pass | Yes |
| 7 | Approve Privacy | Reviewed version, reviewer/date, `published` | Privacy route 200 and sitemap entry | Yes |
| 8 | Approve Terms | Reviewed version, reviewer/date, `published` | Terms route 200 and sitemap entry | Yes |
| 9 | Approve media | Full rights register for every published asset | `npm run media:validate` passes | Yes |
| 10 | Approve projects | Client approval, rights, evidence, published status | Publication tests and routes pass | Yes for shown projects |
| 11 | Supply founder | Profile, portrait rights and publication approval | Owner report Founder ready | Business decision |
| 12 | Supply team | Approved profiles/portraits | Hidden or Team ready | Optional |
| 13 | Supply testimonials | Exact quote, consent/date and approval | Hidden or Testimonials ready | Optional |
| 14 | Review preview | Protected URL checklist and owner issues | `npm run preview:verify` plus manual record | Yes |
| 15 | Test devices | Complete every record field and approve results | `npm run device:report` passes | Yes |
| 16 | Audit Lighthouse | Fresh mobile/desktop evidence for required routes | `npm run lighthouse:report` passes | Yes |
| 17 | Approve launch | Written owner approval/date in verification | Launch approval gate passes | Yes |
| 18 | Validate launch | All evidence flags truthful | `npm run launch:validate` exits 0 | Yes |
| 19 | Deploy | Separately authorised production deployment | Successful production build/deploy | Yes; not currently authorised |
| 20 | Verify production | HTTPS, redirects, SEO, contact, routes, rollback | Production checklist signed | Yes |
