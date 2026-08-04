import type { MetadataRoute } from "next";
import { publishedProjects } from "@/content/projects";
export default function sitemap(): MetadataRoute.Sitemap { const base = process.env.NEXT_PUBLIC_SITE_URL || "https://primepresence.co.za"; return ["", "/work", "/services", "/about", "/process", "/contact", "/insights", "/privacy", "/terms", ...publishedProjects.map(project => `/work/${project.slug}`)].map(path => ({ url: `${base}${path}`, changeFrequency: path === "" ? "monthly" : "yearly", priority: path === "" ? 1 : .7 })); }
