import Link from "next/link";
import { contactDetails, site } from "@/content/site";
import { ownerContent } from "@/content/owner-content.mjs";

const legal = ownerContent.legal;
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const links = [
  ["Work", "/work"],["Services", "/services"],["Connect", "/connect"],["About", "/about"],["Process", "/process"],["Contact", "/contact"],
  ...(legal.privacyApproval && legal.privacyPublicationStatus === "published" && legal.privacyVersion && legal.approvalDate ? [["Privacy", "/privacy"]] : []),
  ...(legal.termsApproval && legal.termsPublicationStatus === "published" && legal.termsVersion && legal.approvalDate ? [["Terms", "/terms"]] : []),
] as string[][];

export default function Footer() {
  const instagram = site.socialLinks.find((item: { label?: string; url: string }) => item.label === "Instagram")?.url;
  const whatsapp = contactDetails.phoneInternational ? `https://wa.me/${contactDetails.phoneInternational}` : null;

  return (
    <footer className="border-t border-[#C8A348]/20 bg-[#030303] px-5 py-14 sm:px-8 sm:py-16">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
        <div>
          <p className="font-[family-name:var(--font-cormorant)] text-2xl uppercase tracking-[.18em] text-[#f1e9dc] sm:text-3xl">Prime Presence</p>
          <p className="mt-1 text-[8px] font-semibold uppercase tracking-[.38em] text-[#c99a3c]">Atelier</p>
          <p className="mt-5 max-w-md text-sm leading-7 text-gray-400">{site.tagline}</p>
          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-300">
            {contactDetails.email ? <a href={`mailto:${contactDetails.email}`} className="inline-flex min-h-11 items-center transition-colors hover:text-[#E0B85D]">{contactDetails.email}</a> : null}
            {contactDetails.phoneDisplay && contactDetails.phoneHref ? <a className="inline-flex min-h-11 items-center transition-colors hover:text-[#E0B85D]" href={contactDetails.phoneHref}>{contactDetails.phoneDisplay}</a> : null}
            {whatsapp ? <a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center transition-colors hover:text-[#E0B85D]">WhatsApp</a> : null}
            {instagram ? <a href={instagram} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center transition-colors hover:text-[#E0B85D]">Instagram</a> : null}
          </div>
          <p className="mt-4 text-[10px] uppercase tracking-[.16em] text-gray-500">{site.location} · Founder-led · Remote delivery available</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-[1fr_auto] sm:items-end lg:justify-self-end">
          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-8 gap-y-1 text-sm text-gray-400 sm:max-w-sm">
            {links.map(([label, href]) => <Link key={href} href={href} className="flex min-h-11 items-center transition-colors hover:text-[#C8A348]">{label}</Link>)}
          </nav>
          {instagram ? <a href={instagram} target="_blank" rel="noreferrer" className="group block w-[116px]" aria-label="Open Prime Presence Atelier on Instagram"><div className="rounded-xl border border-[#c99a3c]/25 bg-white p-2 transition group-hover:border-[#c99a3c]/60"><img src={`${basePath}/media/instagram-qr.svg`} alt="Instagram QR code" className="h-auto w-full" /></div><p className="mt-2 text-center text-[8px] font-semibold uppercase tracking-[.18em] text-white/38 group-hover:text-[#d8b45e]">Scan Instagram</p></a> : null}
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-[10px] uppercase tracking-[.14em] text-gray-500">© {new Date().getFullYear()} {site.copyrightHolder || site.name}. {site.location}.</div>
    </footer>
  );
}
