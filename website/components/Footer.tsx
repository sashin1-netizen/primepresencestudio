import Link from "next/link";
import { contactDetails, site } from "@/content/site";
import { ownerContent } from "@/content/owner-content.mjs";

const legal = ownerContent.legal;
const links = [
  ["Work", "/work"],
  ["Services", "/services"],
  ["Connect", "/connect"],
  ["About", "/about"],
  ["Process", "/process"],
  ["Contact", "/contact"],
  ...(legal.privacyApproval && legal.privacyPublicationStatus === "published" && legal.privacyVersion && legal.approvalDate ? [["Privacy", "/privacy"]] : []),
  ...(legal.termsApproval && legal.termsPublicationStatus === "published" && legal.termsVersion && legal.approvalDate ? [["Terms", "/terms"]] : []),
] as string[][];

export default function Footer() {
  return (
    <footer className="border-t border-[#C8A348]/20 bg-[#040404] px-4 py-14 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p className="text-lg font-semibold uppercase tracking-[0.24em] text-[#C8A348]">{site.name}</p>
          <p className="mt-2 text-sm text-gray-400">{site.tagline}</p>
          {contactDetails.email ? (
            <a href={`mailto:${contactDetails.email}`} className="mt-6 inline-flex min-h-11 items-center text-sm text-gray-300">{contactDetails.email}</a>
          ) : (
            <p className="mt-6 text-sm text-gray-400">Public contact details are being finalised for launch.</p>
          )}
          {contactDetails.phoneDisplay && contactDetails.phoneHref ? <a className="mt-2 block text-sm text-gray-300" href={contactDetails.phoneHref}>{contactDetails.phoneDisplay}</a> : null}
          <p className="mt-2 text-xs text-gray-400">{site.location} · Founder-led · Remote delivery available</p>
        </div>
        <nav aria-label="Footer" className="flex max-w-xl flex-wrap gap-x-6 gap-y-3 text-sm text-gray-400">
          {links.map(([label, href]) => <Link key={href} href={href} className="flex min-h-11 items-center transition-colors hover:text-[#C8A348]">{label}</Link>)}
        </nav>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-xs text-gray-400">© {new Date().getFullYear()} {site.copyrightHolder || site.name}. {site.location}.</div>
    </footer>
  );
}
