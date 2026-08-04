# Final owner action plan

Starting point: protected-preview approval commit `934a3a2`. Public launch remains prohibited.

1. Complete `content/owner-config.json` using `npm run owner:setup -- --dry-run`, then `npm run owner:validate`.
2. Add only rights-cleared files and records; run `npm run media:validate` and `npm run media:report`.
3. Obtain recorded legal review, versions and approval dates; legal routes stay fail-closed until published.
4. Confirm production domain/canonical origin and approved Open Graph artwork without changing DNS.
5. Create an access-protected preview using the deployment package; verify noindex, robots, sitemap, contact, 404 and CSP behavior.
6. Complete the generated device record and fresh Lighthouse evidence; neither workflow auto-passes missing work.
7. Record final owner approval only after every critical gate passes, then run `npm run launch:validate`.

Developer work supplies validation, reports and instructions only. Owner facts, rights, legal conclusions, external accounts, deployment, DNS and public approval remain owner-controlled.
