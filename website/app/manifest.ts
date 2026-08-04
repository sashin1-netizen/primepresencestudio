import type { MetadataRoute } from "next"; import { site } from "@/content/site";
export default function manifest(): MetadataRoute.Manifest { return { name: site.name, short_name: site.name, description: site.description, start_url: "/", display: "standalone", background_color: "#050505", theme_color: "#050505", icons: [{ src: "/favicon.ico", sizes: "any", type: "image/x-icon" }] }; }
