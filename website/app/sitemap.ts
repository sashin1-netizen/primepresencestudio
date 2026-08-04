import type { MetadataRoute } from "next";
import { ownerContent } from "@/content/owner-content.mjs";
import { projectSitemapPaths, publicStaticPaths } from "@/lib/content-selectors.mjs";
export default function sitemap(): MetadataRoute.Sitemap { const base = process.env.NEXT_PUBLIC_SITE_URL || ownerContent.business.canonicalUrl || "http://localhost:3000"; return [...publicStaticPaths(ownerContent), ...projectSitemapPaths(ownerContent.projects)].map(path => ({ url: `${base}${path}`, changeFrequency: path === "" ? "monthly" : "yearly", priority: path === "" ? 1 : .7 })); }
