"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function Hero({ location }: { location: string; media?: { src: string; alt: string; decorative: boolean } }) {
  const reduced = useReducedMotion();

  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden bg-[#030302] text-white">
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover object-[72%_center] sm:object-center"
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
        <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,2,2,.18)_0%,rgba(2,2,2,.18)_34%,rgba(2,2,2,.72)_67%,#030302_100%)] sm:bg-[linear-gradient(90deg,rgba(2,2,2,.96)_0%,rgba(2,2,2,.80)_40%,rgba(2,2,2,.30)_70%,rgba(2,2,2,.10)_100%),linear-gradient(0deg,rgba(2,2,2,.62)_0%,transparent_54%,rgba(2,2,2,.16)_100%)]" />
      </div>

      <div className="container-site relative z-10 flex min-h-[100svh] items-end pb-8 pt-20 sm:items-center sm:pb-16 sm:pt-28 lg:pt-24">
        <motion.div initial={false} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduced ? 0 : 0.75, ease: [0.22, 1, 0.36, 1] }} className="w-full max-w-[760px] lg:pl-12">
          <div className="mb-4 flex items-center gap-3 sm:mb-6">
            <span className="h-px w-8 bg-[#c99a3c] sm:w-12" />
            <p className="text-[8px] font-semibold uppercase tracking-[.26em] text-[#d9b45e] sm:text-[10px] sm:tracking-[.32em]">Prime Presence Atelier™</p>
          </div>

          <h1 className="max-w-[650px] font-[family-name:var(--font-cormorant)] text-[clamp(3.4rem,15vw,5.4rem)] font-medium leading-[.84] tracking-[-.045em] text-[#f4efe5] lg:text-[clamp(5rem,7vw,8rem)]">
            We craft<span className="block bg-gradient-to-r from-[#f3d987] via-[#bd8121] to-[#edc768] bg-clip-text italic text-transparent">presence.</span>
          </h1>

          <p className="mt-4 text-[9px] font-semibold uppercase tracking-[.22em] text-white/50 sm:mt-5 sm:text-[10px]">Designed to be remembered.™</p>
          <p className="mt-4 max-w-[31rem] text-[13px] leading-6 text-[#d6d0c5] sm:mt-6 sm:text-base sm:leading-8">Identity, digital presence and launch experiences for businesses that refuse to blend in.</p>
          <p className="mt-3 text-[8px] font-semibold uppercase tracking-[.17em] text-white/38 sm:text-[10px] sm:tracking-[.23em]">{location} · Worldwide remote delivery</p>

          <div className="mt-5 grid gap-2.5 sm:mt-7 sm:flex sm:gap-3">
            <Link href="/contact" className="inline-flex min-h-12 items-center justify-between border border-[#c99a3c]/85 bg-black/40 px-5 text-[9px] font-semibold uppercase tracking-[.18em] text-[#e8c36d] backdrop-blur-sm transition hover:bg-[#c99a3c] hover:text-black sm:min-w-56 sm:px-6 sm:text-[10px]">Start a Project <span aria-hidden="true">→</span></Link>
            <Link href="/work" className="inline-flex min-h-12 items-center justify-center border border-white/15 bg-black/28 px-5 text-[9px] font-semibold uppercase tracking-[.18em] text-white/72 backdrop-blur-sm transition hover:border-[#c99a3c]/45 hover:text-[#e3ba61] sm:text-[10px]">Explore Our Work</Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
