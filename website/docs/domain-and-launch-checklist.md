# Domain and launch checklist

| Gate | Decision / evidence | Owner | Status |
|---|---|---|---|
| Production domain | Confirm exact HTTPS origin | Business owner | Pending |
| Canonical host | Choose apex or www | Business owner | Pending |
| SSL | Valid certificate and renewal | Deployment owner | Pending |
| DNS | Document A/AAAA/CNAME values and rollback | Deployment owner | Pending |
| Redirects | HTTP→HTTPS and non-canonical→canonical | Deployment owner | Pending |
| Environment | Set validated `NEXT_PUBLIC_SITE_URL` without trailing slash | Deployment owner | Pending |
| SEO endpoints | Verify production robots and sitemap URLs | SEO owner | Pending |
| Social preview | Verify approved absolute OG URL/card | Brand owner | Pending |
| Contact | Confirm mailbox destination and send test | Business owner | Pending |
| WhatsApp | Confirm number and encoded message on devices | Business owner | Pending |
| Analytics | None or privacy-approved tool/consent plan | Owner/legal | Pending |
| Backup | Record source commit, environment and media backup | Release owner | Pending |
| Rollback | Previous deploy retained; rollback command tested | Release owner | Pending |
| Approval | Written launch approval and date | Business owner | Pending |

Do not copy `.env.example` without replacing `example.co.za`. Do not change DNS or deploy without explicit approval.
