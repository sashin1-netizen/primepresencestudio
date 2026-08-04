import type { NextConfig } from "next";

const ContentSecurityPolicy = [
  "default-src 'self';",
  "base-uri 'self';",
  "block-all-mixed-content;",
  "font-src 'self';",
  "img-src 'self' data: https:;",
  "object-src 'none';",
  "script-src 'self' 'unsafe-inline';",
  "connect-src 'self';",
  "media-src 'self' blob:;",
  "form-action 'self' mailto:;",
  "style-src 'self' 'unsafe-inline';",
  "frame-ancestors 'none';",
].join(' ');

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy,
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'Permissions-Policy',
    value: 'geolocation=(), microphone=(), camera=()',
  },
];

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes in the application.
        source: '/(.*)',
        headers: securityHeaders,
      },
      { source: '/images/:path*', headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }] },
      { source: '/videos/:path*', headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }] },
      { source: '/review/:path*', headers: [{ key: 'Cache-Control', value: 'private, no-store, max-age=0' }, { key: 'X-Robots-Tag', value: 'noindex, nofollow, noarchive' }] },
    ];
  },
};

export default nextConfig;
