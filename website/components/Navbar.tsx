"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { whatsappUrl } from "@/content/site";

const links = [["Work", "/work"], ["Services", "/services"], ["Process", "/process"], ["About", "/about"], ["Contact", "/contact"]];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);
  return <>
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <nav aria-label="Primary" className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-8 lg:px-12">
        <Link href="/" className="text-xs font-semibold uppercase tracking-[.3em] text-[#C8A348]">Prime Presence<span className="mt-1 block text-[10px] tracking-[.2em] text-white/60">Brand Studio</span></Link>
        <ul className="hidden items-center gap-7 lg:flex">{links.map(([label, href]) => <li key={href}><Link className="text-xs font-semibold uppercase tracking-[.16em] text-white hover:text-[#C8A348]" href={href}>{label}</Link></li>)}</ul>
        <div className="flex items-center gap-3"><a className="hidden rounded-full border border-[#C8A348] px-5 py-2 text-sm font-semibold text-[#C8A348] sm:inline-flex" target="_blank" rel="noreferrer" href={whatsappUrl("Hi Prime Presence, I'd like to discuss a project.")}>Start a Project</a><button type="button" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close navigation" : "Open navigation"} onClick={() => setOpen(!open)} className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 lg:hidden">{open ? "×" : "Menu"}</button></div>
      </nav>
    </header>
    <div id="mobile-menu" className={`fixed inset-0 z-40 bg-[#050505] px-6 pb-10 pt-28 lg:hidden ${open ? "block" : "hidden"}`}><nav aria-label="Mobile" className="flex flex-col gap-2">{links.map(([label, href]) => <Link key={href} onClick={() => setOpen(false)} className="border-b border-white/10 py-5 text-2xl font-semibold" href={href}>{label}</Link>)}</nav><a className="mt-8 flex justify-center rounded-full bg-[#C8A348] px-5 py-4 font-semibold text-black" target="_blank" rel="noreferrer" href={whatsappUrl("Hi Prime Presence, I'd like to discuss a project.")}>Start on WhatsApp</a></div>
  </>;
}
