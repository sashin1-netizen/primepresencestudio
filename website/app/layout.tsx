import type { Metadata, Viewport } from "next";
import "./globals.css";
import { site } from "@/content/site";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://primepresence.co.za"),
  title: { default: `${site.name} | Branding Studio South Africa`, template: `%s | ${site.name}` },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: site.name,
    description: site.tagline,
    type: "website",
    locale: "en_ZA",
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.tagline,
  },
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
  const productionUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const organisation = productionUrl ? { "@context": "https://schema.org", "@type": "ProfessionalService", name: site.name, url: productionUrl, description: site.description, email: site.email, telephone: site.phoneDisplay } : null;
  return (
    <html lang="en-ZA">
      <body className="antialiased bg-[#050505] text-white">
        <a href="#main-content" className="skip-link">Skip to content</a>
        {organisation && <script type="application/ld+json">{JSON.stringify(organisation)}</script>}
        {children}
      </body>
    </html>
  );
}
