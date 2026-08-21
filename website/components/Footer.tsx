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
  return (
    <footer className="border-t border-[#C8A348]/20 bg-[#030303] px-5 py-14 sm:px-8 sm:py-16">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <img src={`${basePath}/media/prime-presence-logo.jpg`} alt="Prime Presence Atelier" className="h-auto w-[190px] object-contain sm:w-[240px]" />
          <p className="mt-5 max-w-md text-sm leading-7 text-gray-400">{site.tagline}</p>
          {contactDetails.email ? <a href={`mailto:${contactDetails.email}`} className="mt-6 inline-flex min-h-11 items-center text-sm text-gray-300">{contactDetails.email}</a> : null}
          {contactDetails.phoneDisplay && contactDetails.phoneHref ? <a className="mt-2 block text-sm text-gray-300" href={contactDetails.phoneHref}>{contactDetails.phoneDisplay}</a> : null}
          <p className="mt-4 text-[10px] uppercase tracking-[.16em] text-gray-500">{site.location} · Founder-led · Remote delivery available</p>
        </div>
        <nav aria-label="Footer" className="grid grid-cols-2 gap-x-8 gap-y-1 text-sm text-gray-400 sm:flex sm:max-w-xl sm:flex-wrap sm:gap-x-6 sm:gap-y-3">
          {links.map(([label, href]) => <Link key={href} href={href} className="flex min-h-11 items-center transition-colors hover:text-[#C8A348]">{label}</Link>)}
        </nav>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-[10px] uppercase tracking-[.14em] text-gray-500">© {new Date().getFullYear()} {site.copyrightHolder || site.name}. {site.location}.</div>
    </footer>
  );
}
