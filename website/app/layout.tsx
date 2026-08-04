import type { Metadata, Viewport } from "next";
import "./globals.css";
import { site } from "@/content/site";
import { ownerContent } from "@/content/owner-content.mjs";
import { selectOpenGraphArtwork } from "@/lib/content-selectors.mjs";
import { privatePreviewEnabled } from "@/lib/preview";
import PreviewBanner from "@/components/PreviewBanner";

const canonicalBase = process.env.NEXT_PUBLIC_SITE_URL || ownerContent.business.canonicalUrl || "http://localhost:3000";
const defaultArtwork = selectOpenGraphArtwork(ownerContent.openGraph);

export const metadata: Metadata = {
  metadataBase: new URL(canonicalBase),
  title: { default: `${site.name} | Branding Studio South Africa`, template: `%s | ${site.name}` },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: site.name,
    description: site.tagline,
    type: "website",
    locale: "en_ZA",
    ...(defaultArtwork ? { images: [{ url: defaultArtwork.src, width: defaultArtwork.width, height: defaultArtwork.height, alt: defaultArtwork.alt }] } : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.tagline,
    ...(defaultArtwork ? { images: [defaultArtwork.src] } : {}),
  },
  robots: privatePreviewEnabled ? { index: false, follow: false, noarchive: true, noimageindex: true } : { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#050505",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const productionUrl = ownerContent.business.ownerConfirmed && ownerContent.business.canonicalUrl ? ownerContent.business.canonicalUrl : null;
  const organisation = productionUrl ? { "@context": "https://schema.org", "@type": "ProfessionalService", name: site.name, url: productionUrl, description: site.description, email: site.email, telephone: site.phoneDisplay, areaServed: site.serviceArea || undefined } : null;
  return (
    <html lang="en-ZA">
      <body className="antialiased bg-[#050505] text-white">
        <PreviewBanner />
        <a href="#main-content" className="skip-link">Skip to content</a>
        {organisation && <script type="application/ld+json">{JSON.stringify(organisation)}</script>}
        {children}
      </body>
    </html>
  );
}
