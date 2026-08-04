# Production domain validation

No DNS or deployment change is performed by this workflow.

## Required checks

- Manifest domain and canonical URL are owner-confirmed and use HTTPS.
- `NEXT_PUBLIC_SITE_URL` exactly matches the canonical origin without a trailing slash.
- Apex/www selection is documented; HTTP and alternate host redirect once to canonical HTTPS.
- `/sitemap.xml`, `/robots.txt`, `/manifest.webmanifest`, `/favicon.ico` and every public asset resolve on the canonical host.
- Sitemap URLs, canonical tags, Open Graph URLs and structured data share the confirmed origin.
- Email, telephone and WhatsApp destinations match the owner-approved manifest.
- Unknown routes and unpublished project slugs return 404.
- Legacy paths have explicit redirect requirements; no redirect loop or chain exists.

Commands after an authorised deployment candidate exists:

```powershell
curl.exe -I https://[confirmed-host]/
curl.exe -I https://[confirmed-host]/missing-route-check
curl.exe https://[confirmed-host]/robots.txt
curl.exe https://[confirmed-host]/sitemap.xml
```

Record actual URLs, response codes, redirect locations, tester and date in the final launch form. Current status remains blocked because no confirmed production origin is present in the manifest.
