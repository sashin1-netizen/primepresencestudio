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
          className="h-full w-full object-cover object-[70%_center] sm:object-center"
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
        <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,2,2,.28)_0%,rgba(2,2,2,.18)_28%,rgba(2,2,2,.72)_64%,#030302_100%)] sm:bg-[linear-gradient(90deg,rgba(2,2,2,.95)_0%,rgba(2,2,2,.78)_42%,rgba(2,2,2,.28)_72%,rgba(2,2,2,.12)_100%),linear-gradient(0deg,rgba(2,2,2,.64)_0%,transparent_52%,rgba(2,2,2,.18)_100%)]" />
      </div>

      <div className="container-site relative z-10 flex min-h-[100svh] items-end pb-10 pt-24 sm:items-center sm:pb-16 sm:pt-28 lg:pt-24">
        <motion.div initial={false} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduced ? 0 : 0.8, ease: [0.22, 1, 0.36, 1] }} className="w-full max-w-[760px] sm:pt-0 lg:pl-12">
          <div className="mb-4 h-[54px] w-[170px] sm:mb-7 sm:h-[86px] sm:w-[270px]" aria-label="Prime Presence Atelier">
            <img src={brandLogoData} alt="Prime Presence Atelier" className="h-full w-full object-contain object-left" />
          </div>
          <p className="text-[9px] font-semibold uppercase tracking-[.27em] text-[#d9b45e] sm:text-xs sm:tracking-[.34em]">Designed to be remembered.</p>
          <h1 className="mt-4 max-w-[650px] font-[family-name:var(--font-cormorant)] text-[clamp(3.35rem,15vw,5.3rem)] font-medium leading-[.84] tracking-[-.045em] text-[#f4efe5] sm:mt-5 lg:text-[clamp(5rem,7vw,8rem)]">
            We craft<span className="block bg-gradient-to-r from-[#f3d987] via-[#bd8121] to-[#edc768] bg-clip-text italic text-transparent">presence.</span>
          </h1>
          <p className="mt-5 max-w-[32rem] text-sm leading-6 text-[#d2ccc1] sm:mt-6 sm:text-base sm:leading-8">Identity, digital presence and launch experiences for businesses that refuse to blend in.</p>
          <p className="mt-3 text-[8px] font-semibold uppercase tracking-[.19em] text-white/42 sm:text-[10px] sm:tracking-[.25em]">{location} · Worldwide remote delivery</p>
          <div className="mt-6 grid gap-3 sm:mt-7 sm:flex">
            <Link href="/contact" className="inline-flex min-h-12 items-center justify-between border border-[#c99a3c]/80 bg-black/35 px-6 text-[10px] font-semibold uppercase tracking-[.18em] text-[#e5bd64] backdrop-blur-sm transition hover:bg-[#c99a3c] hover:text-black sm:min-w-56">Start a Project <span aria-hidden="true">→</span></Link>
            <Link href="/work" className="inline-flex min-h-12 items-center justify-center border border-white/15 bg-black/25 px-5 text-[10px] font-semibold uppercase tracking-[.18em] text-white/70 backdrop-blur-sm transition hover:border-[#c99a3c]/45 hover:text-[#e3ba61]">Explore Our Work</Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
