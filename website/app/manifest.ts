import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  const basePath = process.env.GITHUB_PAGES_PREVIEW === "true" ? "/primepresencestudio" : "";

  return {
    name: site.name,
    short_name: site.name,
    description: site.description,
    start_url: `${basePath}/`,
    display: "standalone",
    background_color: "#050505",
    theme_color: "#050505",
    icons: [
      {
        src: `${basePath}/favicon.ico`,
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
