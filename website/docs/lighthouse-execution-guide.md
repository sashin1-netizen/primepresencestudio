# Lighthouse execution guide

Current status: not freshly verified. The two excluded JSON reports are stale and are not accepted as evidence.

## Free execution order

1. Check local availability: `Get-Command lighthouse -ErrorAction SilentlyContinue` and `npm exec --no -- lighthouse --version`.
2. If installed, build/start the site and run: `lighthouse http://127.0.0.1:3000 --output html --output json --output-path ./docs/artifacts/lighthouse --chrome-flags="--headless=new"`.
3. Otherwise use Chrome DevTools: open an Incognito window, DevTools → Lighthouse, select Navigation plus Performance/Accessibility/Best Practices/SEO, Mobile, clear storage, then Analyze page load. Repeat Desktop. Save the HTML reports and record Chrome version/date.
4. Install a package only if registry access is stable and approval is appropriate: `npm install --no-save lighthouse`. Confirm `package.json` and lockfile remain unchanged afterward.
5. If automation remains unavailable, the owner performs step 3 on Home, Services, Work, Contact and one published case study.

Record actual scores and material diagnostics; do not substitute old reports. Test both reduced-motion/default behavior and a production-like build. Treat Lighthouse as lab evidence, not field performance proof.
