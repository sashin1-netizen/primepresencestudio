# Media guidelines

## Images

- Hero: 1920×1280 or similar 3:2 source; WebP quality 75–82; target ≤200 KB, maximum 350 KB.
- Editorial feature: 1600×1200 (4:3) or 1600×1000 (16:10); WebP/AVIF; target ≤180 KB.
- Project grid: 1200×900 (4:3); target ≤140 KB.
- Portrait: 1200×1600 (3:4); target ≤160 KB.
- Social preview: exactly 1200×630; WebP or JPEG; target ≤300 KB.
- Keep a high-resolution archival master outside the deployed `public` directory. Do not ship a 4K source when the rendered slot does not need it.

Use lowercase names such as `client-project-view-1600.webp`. Alt text must describe the image’s purpose and visible content; use empty alt text for purely decorative images.

## Video

- Prefer 6–15 second muted loops, maximum 20 seconds for background/reveal use.
- MP4/H.264 is the baseline; add WebM only when measured savings justify the extra source.
- Target 1080p desktop and 720p mobile, 24–30 fps, with no audio track for silent loops.
- Aim for ≤2 MB for a short hero loop and ≤5 MB for an intentional showcase clip.
- Provide a matching poster image under 180 KB. Use `preload="metadata"`, pause off-screen media and retain a static fallback.
- Never autoplay audio. Provide controls, captions and transcripts for content-bearing media.

## Licensing and approval

Record creator/source, licence or assignment, client publication permission, expiry/territory restrictions and approval date. Do not publish a file whose provenance is unclear. The current `real` media is labelled pending until the owner confirms rights.
