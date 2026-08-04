import type { MetadataRoute } from "next";
import { ownerContent } from "@/content/owner-content.mjs";
import { privatePreviewEnabled } from "@/lib/preview";

export default function robots(): MetadataRoute.Robots {
  const base = process.env.NEXT_PUBLIC_SITE_URL || ownerContent.business.canonicalUrl || "http://localhost:3000";
  if (privatePreviewEnabled) return { rules: { userAgent: "*", disallow: "/" } };
  return { rules: { userAgent: "*", allow: "/", disallow: ["/review", "/ai", "/portal"] }, sitemap: `${base}/sitemap.xml` };
}
