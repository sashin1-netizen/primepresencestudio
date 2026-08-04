import type { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { site } from "@/content/site";

export default function PageShell({ eyebrow, title, intro, children, after }: { eyebrow: string; title: string; intro: string; children?: ReactNode; after?: ReactNode }) {
  return <><Navbar siteName={site.name} /><main id="main-content" className="min-h-screen bg-[#050505] pb-24 pt-36 text-white"><div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12"><header className="max-w-4xl border-b border-white/10 pb-14 sm:pb-16"><p className="eyebrow">{eyebrow}</p><h1 className="mt-5 text-balance font-[family-name:var(--font-cormorant)] text-5xl leading-none sm:text-6xl lg:text-7xl">{title}</h1><p className="mt-7 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">{intro}</p></header>{children && <div className="mt-14 sm:mt-16">{children}</div>}</div>{after}</main><Footer /></>;
}
