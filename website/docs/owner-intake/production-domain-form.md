# Production domain form

Purpose: confirm canonical and deployment URLs without changing DNS.

- Registered domain and authorised owner
- Canonical HTTPS origin, apex/www choice and required alternate-host redirect
- Deployment host, SSL owner and renewal responsibility
- Expected robots, sitemap, manifest, favicon and Open Graph absolute URLs
- Contact destinations and any legacy redirects
- Approval owner/date and rollback contact

Example: `https://[confirmed-host]` with `[alternate host] → [canonical host]`. Do not enter a placeholder domain into production. Validate with the production-domain guide before approval.
