import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://primepresence.co.za";
  return { rules: { userAgent: "*", allow: "/", disallow: ["/ai", "/portal"] }, sitemap: `${base}/sitemap.xml` };
}
