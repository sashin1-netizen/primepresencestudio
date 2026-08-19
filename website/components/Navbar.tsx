"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Work", "/work"],
  ["Process", "/process"],
  ["Services", "/services"],
  ["Connect", "/connect"],
] as const;

export default function Navbar({ siteName }: { siteName: string }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const firstLink = useRef<HTMLAnchorElement>(null);
  const menu = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const background = document.querySelectorAll<HTMLElement>("main, footer");
    document.body.style.overflow = open ? "hidden" : "";
    background.forEach((element) => {
      element.inert = open;
    });

    if (open) firstLink.current?.focus();

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
        return;
      }

      if (event.key !== "Tab" || !open || !menu.current || !toggle.current) return;
      const focusable = [
        toggle.current,
        ...menu.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'),
      ];
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      background.forEach((element) => {
        element.inert = false;
      });
      window.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  const active = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[var(--z-nav)] border-b border-white/[.08] bg-[#050504]/88 backdrop-blur-xl">
        <nav aria-label="Primary" className="container-site flex h-[78px] items-center justify-between gap-6">
          <Link href="/" className="group flex min-h-11 items-center gap-3 py-2" aria-label={`${siteName} home`}>
            <span className="relative h-9 w-9 shrink-0">
              <span className="absolute inset-[15%] rotate-45 border-2 border-[#d1a342] transition-transform duration-500 group-hover:rotate-[135deg]" />
              <span className="absolute left-[39%] top-[27%] h-[45%] w-[12%] bg-[#d9b058]" />
              <span className="absolute left-[39%] top-[27%] h-[12%] w-[32%] bg-[#d9b058]" />
              <span className="absolute left-[55%] top-[42%] h-[30%] w-[12%] bg-[#d9b058]" />
            </span>
            <span className="hidden sm:block">
              <span className="block font-[family-name:var(--font-cormorant)] text-[13px] uppercase tracking-[.28em] text-[#f2ede3]">
                Prime Presence
              </span>
              <span className="mt-0.5 block text-[8px] font-semibold uppercase tracking-[.46em] text-[#c99a3f]">
                Atelier
              </span>
            </span>
          </Link>

          <ul className="hidden items-center gap-6 xl:flex">
            {links.map(([label, href]) => (
              <li key={href}>
                <Link
                  aria-current={active(href) ? "page" : undefined}
                  className="relative flex min-h-11 items-center text-[10px] font-semibold uppercase tracking-[.16em] text-white/78 transition-colors hover:text-[#d5ad55] after:absolute after:bottom-1 after:left-0 after:h-px after:w-0 after:bg-[#d5ad55] after:transition-all hover:after:w-full aria-[current=page]:text-[#f0d788] aria-[current=page]:after:w-full"
                  href={href}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <Link
              className="hidden min-h-11 items-center rounded-full border border-[#c99a3f]/70 px-5 text-[10px] font-semibold uppercase tracking-[.16em] text-[#e4c46f] transition-colors hover:bg-[#c99a3f] hover:text-black md:inline-flex"
              href="/contact"
            >
              Let&apos;s Connect
            </Link>
            <button
              ref={toggle}
              type="button"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Menu"}
              onClick={() => setOpen(!open)}
              className="flex min-h-11 min-w-16 items-center justify-center rounded-full border border-white/20 px-3 text-[10px] font-semibold uppercase tracking-[.12em] xl:hidden"
            >
              {open ? "Close" : "Menu"}
            </button>
          </div>
        </nav>
      </header>

      <div
        ref={menu}
        id="mobile-menu"
        aria-hidden={!open}
        className={`fixed inset-0 z-40 overflow-y-auto bg-[#050504] px-6 pb-10 pt-28 xl:hidden ${open ? "block" : "hidden"}`}
      >
        <div className="mb-7 flex items-center gap-3 border-b border-[#c99a3f]/20 pb-6">
          <span className="h-px w-10 bg-[#c99a3f]" />
          <span className="text-[10px] font-semibold uppercase tracking-[.35em] text-[#c99a3f]">
            Prime Presence Atelier
          </span>
        </div>
        <nav aria-label="Mobile" className="flex flex-col gap-1">
          {links.map(([label, href], index) => (
            <Link
              ref={index === 0 ? firstLink : undefined}
              aria-current={active(href) ? "page" : undefined}
              key={href}
              onClick={() => setOpen(false)}
              className="border-b border-white/10 py-5 font-[family-name:var(--font-cormorant)] text-3xl text-[#eee8dc] aria-[current=page]:text-[#e0ba61]"
              href={href}
            >
              {label}
            </Link>
          ))}
        </nav>
        <Link onClick={() => setOpen(false)} className="button-primary mt-8 flex w-full" href="/contact">
          Start a Project
        </Link>
      </div>
    </>
  );
}
