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
          className="h-full w-full object-cover object-[62%_center] sm:object-center"
          autoPlay={!reduced}
          muted
          loop
          playsInline
          preload="auto"
          poster={`${basePath}/media/ppa-studio-scene.webp`}
          aria-hidden="true"
        >
          <source src={`${basePath}/media/ppa-hero-film.mp4`} type="video/mp4" />
        </video>
        <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,2,2,.05)_0%,rgba(2,2,2,.10)_30%,rgba(2,2,2,.38)_55%,rgba(2,2,2,.88)_78%,#030302_100%)] sm:bg-[linear-gradient(90deg,rgba(2,2,2,.93)_0%,rgba(2,2,2,.70)_42%,rgba(2,2,2,.17)_74%,rgba(2,2,2,.05)_100%),linear-gradient(0deg,rgba(2,2,2,.62)_0%,transparent_56%)]" />
      </div>

      <div className="container-site relative z-10 flex min-h-[100svh] items-end pb-7 pt-20 sm:items-center sm:pb-16 sm:pt-28 lg:pt-24">
        <motion.div initial={false} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduced ? 0 : 0.75, ease: [0.22, 1, 0.36, 1] }} className="w-full max-w-[760px] lg:pl-12">
          <img src={`${basePath}/media/prime-presence-logo.webp`} alt="Prime Presence Atelier" className="mb-4 h-auto w-[178px] object-contain sm:mb-6 sm:w-[260px]" />
          <h1 className="max-w-[650px] font-[family-name:var(--font-cormorant)] text-[clamp(3.15rem,14vw,5.2rem)] font-medium leading-[.84] tracking-[-.045em] text-[#f4efe5] lg:text-[clamp(5rem,7vw,8rem)]">
            We craft<span className="block bg-gradient-to-r from-[#f3d987] via-[#bd8121] to-[#edc768] bg-clip-text italic text-transparent">presence.</span>
          </h1>
          <p className="mt-3 text-[8px] font-semibold uppercase tracking-[.22em] text-white/52 sm:mt-5 sm:text-[10px]">Designed to be remembered.™</p>
          <p className="mt-3 max-w-[30rem] text-[12px] leading-5 text-[#d6d0c5] sm:mt-6 sm:text-base sm:leading-8">Identity, digital presence and launch experiences for businesses that refuse to blend in.</p>
          <p className="mt-2 text-[7px] font-semibold uppercase tracking-[.16em] text-white/36 sm:mt-3 sm:text-[10px] sm:tracking-[.23em]">{location} · Worldwide remote delivery</p>
          <div className="mt-4 flex gap-2.5 sm:mt-7 sm:gap-3">
            <Link href="/contact" className="inline-flex min-h-11 flex-1 items-center justify-between border border-[#c99a3c]/85 bg-black/38 px-4 text-[8px] font-semibold uppercase tracking-[.15em] text-[#e8c36d] backdrop-blur-sm transition hover:bg-[#c99a3c] hover:text-black sm:min-h-12 sm:flex-none sm:min-w-56 sm:px-6 sm:text-[10px] sm:tracking-[.18em]">Start a Project <span aria-hidden="true">→</span></Link>
            <Link href="/work" className="inline-flex min-h-11 flex-1 items-center justify-center border border-white/15 bg-black/24 px-3 text-center text-[8px] font-semibold uppercase tracking-[.13em] text-white/72 backdrop-blur-sm transition hover:border-[#c99a3c]/45 hover:text-[#e3ba61] sm:min-h-12 sm:flex-none sm:px-5 sm:text-[10px] sm:tracking-[.18em]">Explore Work</Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
