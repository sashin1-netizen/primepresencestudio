# Generated launch readiness

Generated from `content/owner-content.mjs` by `npm run content:report`. Do not edit manually.

Decision: **BLOCKED**

| Priority | Gate | Status |
|---|---|---|
| Critical | Confirmed production domain and canonical validation | Blocked |
| Critical | Confirmed public business contact information | Blocked |
| Critical | Privacy and terms legal approval | Blocked |
| Critical | Published default Open Graph fallback | Blocked |
| Critical | Fresh production build | Passed |
| Critical | Route and 404 checks | Passed |
| Critical | Critical accessibility checks | Passed |
| Critical | Contact flow | Blocked |
| Critical | Real-device sign-off | Blocked |
| Critical | High-severity security review | Passed |
| Optional | Published team section | Blocked |
| Optional | Published testimonial | Blocked |
| Optional | Published project video | Blocked |

## Validation issues

- **required** — `business.legalName`: Legal business name is required.
- **required** — `business.serviceArea`: Service area is required.
- **required** — `business.copyrightHolder`: Copyright holder is required.
- **required** — `business.legalContact`: Legal contact is required.
- **required** — `business.privacyContact`: Privacy contact is required.
- **required** — `business.termsContact`: Terms contact is required.
- **required** — `business.domain`: Domain is required.
- **required** — `business.canonicalUrl`: Canonical URL is required.
- **invalid_email** — `business.email`: Email address is invalid.
- **business_unconfirmed** — `business`: Business details require owner confirmation and an approval date.
- **legal_unapproved** — `legal`: Privacy, terms and outstanding legal issues require recorded legal approval.
- **missing_og_fallback** — `openGraph.defaultArtwork`: Approved default Open Graph artwork is required.
