import Link from "next/link";
import { site } from "@/content/site";

const links = [["Work", "/work"], ["Services", "/services"], ["About", "/about"], ["Process", "/process"], ["Contact", "/contact"], ["Privacy", "/privacy"], ["Terms", "/terms"]];
export default function Footer() {
  return <footer className="border-t border-[#C8A348]/20 bg-[#040404] px-6 py-12 sm:px-8 lg:px-12"><div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between"><div><p className="text-lg font-semibold uppercase tracking-[0.24em] text-[#C8A348]">{site.name}</p><p className="mt-2 text-sm text-gray-400">{site.tagline}</p><p className="mt-5 text-xs text-gray-500">© {new Date().getFullYear()} Prime Presence. South Africa.</p></div><nav aria-label="Footer" className="flex max-w-xl flex-wrap gap-x-6 gap-y-3 text-sm text-gray-400">{links.map(([label, href]) => <Link key={href} href={href} className="transition hover:text-[#C8A348]">{label}</Link>)}</nav></div></footer>;
}
