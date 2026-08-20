"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { brandLogoData } from "@/content/brandLogo";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function Hero({ location }: { location: string; media?: { src: string; alt: string; decorative: boolean } }) {
  const reduced = useReducedMotion();

  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden bg-[#030302] text-white">
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover object-[62%_center] sm:object-center"
          autoPlay={!reduced}
          muted
          loop
          playsInline
          preload="metadata"
          poster={`${basePath}/media/ppa-studio-scene.webp`}
          aria-hidden="true"
        >
          <source src={`${basePath}/media/ppa-hero-film.mp4`} type="video/mp4" />
        </video>
        <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,2,2,.98)_0%,rgba(2,2,2,.91)_31%,rgba(2,2,2,.56)_57%,rgba(2,2,2,.22)_100%),linear-gradient(0deg,rgba(2,2,2,.78)_0%,transparent_42%,rgba(2,2,2,.24)_100%)] sm:bg-[linear-gradient(90deg,rgba(2,2,2,.97)_0%,rgba(2,2,2,.87)_38%,rgba(2,2,2,.42)_63%,rgba(2,2,2,.14)_100%),linear-gradient(0deg,rgba(2,2,2,.68)_0%,transparent_45%,rgba(2,2,2,.18)_100%)]" />
        <div aria-hidden="true" className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_center,rgba(255,255,255,.025)_0_1px,transparent_1.2px)] [background-size:4px_4px]" />
      </div>

      <div className="container-site relative z-10 flex min-h-[100svh] items-end pb-12 pt-28 sm:items-center sm:pb-16 sm:pt-28 lg:pt-24">
        <motion.div initial={false} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduced ? 0 : 0.8, ease: [0.22, 1, 0.36, 1] }} className="relative w-full max-w-[760px] lg:pl-12">
          <div className="absolute -left-2 top-[31%] hidden -translate-y-1/2 lg:block">
            <div className="flex flex-col items-center gap-4 text-[11px] tracking-[.16em]">
              <span className="text-[#e2b65c]">01</span><span className="h-12 w-px bg-gradient-to-b from-[#c99636] to-white/10" /><span className="text-white/24">02</span><span className="text-white/24">03</span><span className="text-white/24">04</span>
            </div>
          </div>

          <div className="mb-7 h-[72px] w-[220px] opacity-95 sm:h-[86px] sm:w-[270px]" aria-label="Prime Presence Atelier">
            <img src={brandLogoData} alt="Prime Presence Atelier" className="h-full w-full object-contain object-left" />
          </div>
          <p className="text-[10px] font-semibold uppercase tracking-[.30em] text-[#d1a64a] sm:text-xs sm:tracking-[.34em]">Designed to be remembered.</p>
          <h1 className="mt-5 max-w-[720px] font-[family-name:var(--font-cormorant)] text-[clamp(3.6rem,15vw,5.5rem)] font-medium leading-[.84] tracking-[-.045em] text-[#f4efe5] lg:mt-6 lg:text-[clamp(5rem,7vw,8rem)]">
            We craft<span className="block bg-gradient-to-r from-[#f3d987] via-[#bd8121] to-[#edc768] bg-clip-text italic text-transparent">presence.</span>
          </h1>
          <p className="mt-6 max-w-lg text-sm leading-7 text-[#d2ccc1] sm:text-base sm:leading-8">Identity, digital presence and launch experiences for businesses that refuse to blend in.</p>
          <p className="mt-3 text-[9px] font-semibold uppercase tracking-[.22em] text-white/38 sm:text-[10px] sm:tracking-[.25em]">{location} · Worldwide remote delivery</p>
          <div className="mt-7 grid gap-3 sm:flex">
            <Link href="/contact" className="inline-flex min-h-12 items-center justify-between border border-[#c99a3c]/80 bg-black/25 px-6 text-[10px] font-semibold uppercase tracking-[.18em] text-[#e5bd64] backdrop-blur-sm transition hover:bg-[#c99a3c] hover:text-black sm:min-w-56">Start a Project <span aria-hidden="true">→</span></Link>
            <Link href="/work" className="inline-flex min-h-12 items-center justify-center border border-white/15 bg-black/20 px-5 text-[10px] font-semibold uppercase tracking-[.18em] text-white/70 backdrop-blur-sm transition hover:border-[#c99a3c]/45 hover:text-[#e3ba61]">Explore Our Work</Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
