# Hosting-neutral private preview

No option below is configured automatically.

- Local network: run the production preview bound only to a trusted LAN, use the firewall to limit the subnet, and stop it after review. Do not expose the port to the internet.
- Cloudflare Access: if the owner already has a suitable free plan and controlled domain, place the preview origin behind identity-based Access. Confirm policy enforcement before sharing; do not change DNS without separate approval.
- Existing reverse proxy: use HTTPS plus Basic Auth or stronger identity access, rate limits and private logs. Store credentials outside the repository and revoke them after review.
- Existing protected server: publish only inside an already authenticated owner portal or VPN, with no public directory listing.
- GitHub/branch previews: acceptable only when the generated site itself requires authentication. A private source repository does not make a public preview URL private.
- Static export: only behind an existing protected server; Next.js runtime behavior and route checks must be reverified after any export adaptation.

Recommended free path is local-network review. Recommended internet path is identity-protected hosting already available to the owner. Noindex is supplementary and never a substitute for authentication.
