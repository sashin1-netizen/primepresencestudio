import type { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function PageShell({ eyebrow, title, intro, children }: { eyebrow: string; title: string; intro: string; children?: ReactNode }) {
  return <><Navbar /><main id="main-content" className="min-h-screen bg-[#050505] px-4 pb-24 pt-36 text-white sm:px-8 lg:px-12"><div className="mx-auto max-w-7xl"><header className="max-w-4xl border-b border-white/10 pb-16"><p className="text-sm uppercase tracking-[.35em] text-[#C8A348]">{eyebrow}</p><h1 className="mt-5 font-[family-name:var(--font-cormorant)] text-5xl leading-none sm:text-6xl lg:text-7xl">{title}</h1><p className="mt-7 max-w-2xl text-lg leading-8 text-gray-300">{intro}</p></header>{children}</div></main><Footer /></>;
}
