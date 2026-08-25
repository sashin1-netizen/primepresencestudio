import Link from "next/link";
import { contactDetails, site } from "@/content/site";
import { ownerContent } from "@/content/owner-content.mjs";

const legal = ownerContent.legal;
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const links = [["Work","/work"],["Services","/services"],["Connect","/connect"],["About","/about"],["Process","/process"],["Contact","/contact"],...(legal.privacyApproval && legal.privacyPublicationStatus === "published" && legal.privacyVersion && legal.approvalDate ? [["Privacy","/privacy"]] : []),...(legal.termsApproval && legal.termsPublicationStatus === "published" && legal.termsVersion && legal.approvalDate ? [["Terms","/terms"]] : [])] as string[][];

export default function Footer() {
  const instagram = site.socialLinks.find((item: { label?: string; url: string }) => item.label === "Instagram")?.url;
  const whatsapp = contactDetails.phoneInternational ? `https://wa.me/${contactDetails.phoneInternational}` : null;

  return (
    <footer className="relative overflow-hidden border-t border-[#C8A348]/20 bg-[#030303] px-5 py-16 sm:px-8 sm:py-20">
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_82%_28%,rgba(201,154,60,.07),transparent_20rem)]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_.9fr] lg:gap-20">
          <div>
            <p className="font-[family-name:var(--font-cormorant)] text-[2.2rem] uppercase tracking-[.16em] text-[#f3ebdf] sm:text-[2.7rem]">Prime Presence</p>
            <p className="mt-1 text-[9px] font-bold uppercase tracking-[.36em] text-[#c99a3c]">Atelier</p>
            <p className="mt-7 max-w-lg font-[family-name:var(--font-cormorant)] text-3xl leading-[1.05] text-white/72">Designed to be remembered.™</p>
            <p className="mt-5 max-w-xl text-base leading-8 text-white/48">Premium brand identity, digital presence and launch experiences from Durban, delivered locally and worldwide.</p>
            <div className="mt-8 grid max-w-xl gap-3 sm:grid-cols-2">
              {contactDetails.email ? <a href={`mailto:${contactDetails.email}`} className="flex min-h-14 items-center justify-between border border-white/10 bg-white/[.018] px-5 text-sm text-white/76 transition hover:border-[#c99a3c]/45 hover:text-[#e8c46b]"><span>Email</span><span>→</span></a> : null}
              {whatsapp ? <a href={whatsapp} target="_blank" rel="noreferrer" className="flex min-h-14 items-center justify-between border border-white/10 bg-white/[.018] px-5 text-sm text-white/76 transition hover:border-[#c99a3c]/45 hover:text-[#e8c46b]"><span>WhatsApp</span><span>→</span></a> : null}
              {contactDetails.phoneDisplay && contactDetails.phoneHref ? <a className="flex min-h-14 items-center justify-between border border-white/10 bg-white/[.018] px-5 text-sm text-white/76 transition hover:border-[#c99a3c]/45 hover:text-[#e8c46b]" href={contactDetails.phoneHref}><span>{contactDetails.phoneDisplay}</span><span>Call</span></a> : null}
              {instagram ? <a href={instagram} target="_blank" rel="noreferrer" className="flex min-h-14 items-center justify-between border border-white/10 bg-white/[.018] px-5 text-sm text-white/76 transition hover:border-[#c99a3c]/45 hover:text-[#e8c46b]"><span>@primepresence.studio</span><span>→</span></a> : null}
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-[1fr_auto] sm:items-start lg:justify-self-end">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[.22em] text-[#c99a3c]">Explore</p>
              <nav aria-label="Footer" className="mt-5 grid grid-cols-2 gap-x-10 gap-y-1 text-base text-white/48">
                {links.map(([label, href]) => <Link key={href} href={href} className="flex min-h-11 items-center transition-colors hover:text-[#e0b85d]">{label}</Link>)}
              </nav>
            </div>
            {instagram ? <a href={instagram} target="_blank" rel="noreferrer" className="group block w-[102px]" aria-label="Open Prime Presence Atelier on Instagram"><div className="rounded-xl border border-[#c99a3c]/20 bg-white p-2 shadow-[0_20px_60px_rgba(0,0,0,.28)] transition group-hover:border-[#c99a3c]/60"><img src={`${basePath}/media/instagram-qr.svg`} alt="Instagram QR code" className="h-auto w-full" /></div><p className="mt-2 text-center text-[8px] font-bold uppercase tracking-[.16em] text-white/32 group-hover:text-[#d8b45e]">Instagram</p></a> : null}
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-3 border-t border-white/[.08] pt-7 text-[10px] uppercase tracking-[.14em] text-white/28 sm:flex-row sm:items-center sm:justify-between"><span>© {new Date().getFullYear()} {site.copyrightHolder || site.name}</span><span>{site.location}</span></div>
      </div>
    </footer>
  );
}
