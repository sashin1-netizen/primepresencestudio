# Private preview guide

## Start and stop

PowerShell, local review dashboard only:

```powershell
$env:PRIVATE_PREVIEW_MODE='true'
$env:PRIVATE_PREVIEW_INCLUDE_DRAFTS='true'
npm run dev
```

Open `/review`. The second variable enables project-detail review links; omit it when status-only review is sufficient. Disable preview by closing the shell or removing both variables, then rebuild. Neither variable uses the `NEXT_PUBLIC_` prefix, so no access token is embedded in client JavaScript.

## Verification

1. Confirm the gold private-preview banner appears.
2. Inspect page HTML for `robots` noindex/nofollow.
3. Open `/robots.txt`; preview mode must disallow `/` and omit the sitemap declaration.
4. Open `/sitemap.xml`; it must never contain draft/review/approved-only projects.
5. Confirm `/work/[draft-slug]` is still 404. Review drafts only through `/review/projects/[slug]` when explicitly enabled.
6. Disable both flags, rebuild, and confirm `/review` and `/review/projects/[slug]` return 404.

## Security limitation

This repository has no authentication backend. Environment flags control what is built; they do not authenticate a viewer. Use draft inclusion only on localhost or behind a host/platform access-control feature configured outside this codebase. Never place sensitive client material on an internet-accessible preview that relies on an unguessable URL. Search noindex is not access control.

Recommended process: owner reviews status dashboard → developer imports evidence → validation passes → owner/client/legal approvals are recorded → record becomes `published` only when public release is authorised.
