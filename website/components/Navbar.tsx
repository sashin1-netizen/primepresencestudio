"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const links = [["Home", "/"],["About", "/about"],["Work", "/work"],["Process", "/process"],["Services", "/services"],["Connect", "/connect"]] as const;

export default function Navbar({ siteName }: { siteName: string }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const firstLink = useRef<HTMLAnchorElement>(null);
  const menu = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 10);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    const background = document.querySelectorAll<HTMLElement>("main, footer");
    document.body.style.overflow = open ? "hidden" : "";
    background.forEach((element) => { element.inert = open; });
    if (open) firstLink.current?.focus();
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpen(false); toggle.current?.focus(); return; }
      if (event.key !== "Tab" || !open || !menu.current || !toggle.current) return;
      const focusable = [toggle.current, ...menu.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')];
      const first = focusable[0]; const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    window.addEventListener("keydown", handleKey);
    return () => { document.body.style.overflow = ""; background.forEach((element) => { element.inert = false; }); window.removeEventListener("keydown", handleKey); };
  }, [open]);

  const active = (href: string) => href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 isolate w-full border-b transition-[background-color,border-color,box-shadow] duration-300 ${scrolled ? "border-[#c99a3c]/16 bg-[#050504]/94 shadow-[0_12px_45px_rgba(0,0,0,.32)]" : "border-white/[.06] bg-[#050504]/76"}`}
        style={{ position: "fixed", top: 0, left: 0, right: 0, width: "100%", zIndex: 9999, transform: "translate3d(0,0,0)", WebkitTransform: "translate3d(0,0,0)", WebkitBackdropFilter: "blur(18px)", backdropFilter: "blur(18px)", willChange: "transform" }}
      >
        <div aria-hidden="true" className="h-[env(safe-area-inset-top)]" />
        <nav aria-label="Primary" className="container-site flex h-[62px] items-center justify-between gap-4 sm:h-[76px]">
          <Link href="/" className="flex min-w-0 items-center gap-3" aria-label={`${siteName} home`}>
            <img src={`${basePath}/media/prime-presence-logo.jpg`} alt="" aria-hidden="true" className="h-9 w-9 shrink-0 object-cover sm:h-10 sm:w-10" />
            <span className="min-w-0"><span className="block truncate font-[family-name:var(--font-cormorant)] text-[15px] uppercase tracking-[.19em] text-[#f0e8da] sm:text-[17px]">Prime Presence</span><span className="mt-0.5 block text-[7px] font-semibold uppercase tracking-[.34em] text-[#c99a3c]">Atelier</span></span>
          </Link>
          <ul className="hidden items-center gap-6 xl:flex">{links.map(([label, href]) => <li key={href}><Link aria-current={active(href) ? "page" : undefined} className="relative flex min-h-11 items-center text-[10px] font-semibold uppercase tracking-[.16em] text-white/72 transition-colors hover:text-[#d5ad55] after:absolute after:bottom-1 after:left-0 after:h-px after:w-0 after:bg-[#d5ad55] after:transition-all hover:after:w-full aria-[current=page]:text-[#f0d788] aria-[current=page]:after:w-full" href={href}>{label}</Link></li>)}</ul>
          <div className="flex items-center gap-3"><Link className="hidden min-h-11 items-center border border-[#c99a3f]/70 px-5 text-[10px] font-semibold uppercase tracking-[.16em] text-[#e4c46f] transition-colors hover:bg-[#c99a3f] hover:text-black md:inline-flex" href="/contact">Let&apos;s Connect</Link><button ref={toggle} type="button" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Menu"} onClick={() => setOpen(!open)} className="flex h-10 min-w-[60px] items-center justify-center border border-white/18 bg-black/20 px-3 text-[9px] font-semibold uppercase tracking-[.14em] xl:hidden">{open ? "Close" : "Menu"}</button></div>
        </nav>
      </header>
      <div ref={menu} id="mobile-menu" aria-hidden={!open} className={`fixed inset-0 overflow-y-auto bg-[#050504] px-6 pb-10 pt-[calc(5rem+env(safe-area-inset-top))] xl:hidden ${open ? "block" : "hidden"}`} style={{ zIndex: 9998 }}>
        <div className="mb-7 border-b border-[#c99a3f]/20 pb-6"><p className="font-[family-name:var(--font-cormorant)] text-2xl uppercase tracking-[.16em] text-[#f0e8da]">Prime Presence</p><p className="mt-1 text-[8px] font-semibold uppercase tracking-[.34em] text-[#c99a3c]">Atelier</p></div>
        <nav aria-label="Mobile" className="flex flex-col gap-1">{links.map(([label, href], index) => <Link ref={index === 0 ? firstLink : undefined} aria-current={active(href) ? "page" : undefined} key={href} onClick={() => setOpen(false)} className="border-b border-white/10 py-4 font-[family-name:var(--font-cormorant)] text-[2rem] text-[#eee8dc] aria-[current=page]:text-[#e0ba61]" href={href}>{label}</Link>)}</nav>
        <Link onClick={() => setOpen(false)} className="button-primary mt-8 flex w-full" href="/contact">Start a Project</Link>
      </div>
    </>
  );
}
