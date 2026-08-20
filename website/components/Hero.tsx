"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { brandLogoData } from "@/content/brandLogo";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function Hero({ location }: { location: string; media?: { src: string; alt: string; decorative: boolean } }) {
  const reduced = useReducedMotion();

  return (
    <section id="top" className="relative overflow-hidden bg-[#030302] text-white">
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_72%_34%,rgba(182,126,30,.16),transparent_24%),linear-gradient(90deg,#030302_0%,#080705_48%,#030302_100%)]" />
      <div aria-hidden="true" className="absolute inset-0 opacity-25 [background-image:radial-gradient(circle_at_center,rgba(255,255,255,.025)_0_1px,transparent_1.2px)] [background-size:4px_4px]" />

      <div className="container-site relative z-10 grid min-h-[100svh] items-center gap-10 pb-14 pt-28 lg:grid-cols-[.82fr_1.18fr] lg:gap-10 lg:pb-10 lg:pt-24">
        <motion.div initial={false} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduced ? 0 : 0.8, ease: [0.22, 1, 0.36, 1] }} className="relative max-w-[650px] lg:pl-12">
          <div className="absolute -left-2 top-[31%] hidden -translate-y-1/2 lg:block">
            <div className="flex flex-col items-center gap-4 text-[11px] tracking-[.16em]">
              <span className="text-[#e2b65c]">01</span><span className="h-12 w-px bg-gradient-to-b from-[#c99636] to-white/10" /><span className="text-white/24">02</span><span className="text-white/24">03</span><span className="text-white/24">04</span>
            </div>
          </div>

          <p className="text-[10px] font-semibold uppercase tracking-[.30em] text-[#d1a64a] sm:text-xs sm:tracking-[.34em]">Crafting brands that command attention</p>
          <h1 className="mt-5 font-[family-name:var(--font-cormorant)] text-[clamp(3.2rem,12vw,5.1rem)] font-medium leading-[.86] tracking-[-.04em] text-[#f4efe5] lg:mt-6 lg:text-[clamp(4.4rem,6.4vw,7.3rem)]">
            We don’t just<span className="block">create content.</span><span className="mt-2 block bg-gradient-to-r from-[#f3d987] via-[#bd8121] to-[#edc768] bg-clip-text italic text-transparent">We craft presence.</span>
          </h1>
          <div className="mt-6 flex items-center gap-3"><span className="h-px w-11 bg-[#c99335]" /><span className="h-3 w-3 rotate-45 border border-[#e0b653]" /><span className="h-px w-11 bg-[#c99335]" /></div>
          <p className="mt-6 max-w-xl text-sm leading-7 text-[#c9c3b7] sm:text-base sm:leading-8">Prime Presence Atelier™ is a founder-led creative studio for businesses that refuse to blend in. We shape identity, digital presence and launch experiences that make the first impression feel intentional.</p>
          <p className="mt-3 text-[9px] font-semibold uppercase tracking-[.22em] text-white/36 sm:text-[10px] sm:tracking-[.25em]">{location} · Worldwide remote delivery</p>
          <div className="mt-7 grid gap-3 sm:flex">
            <Link href="/work" className="inline-flex min-h-12 items-center justify-between border border-[#c99a3c]/75 px-6 text-[10px] font-semibold uppercase tracking-[.18em] text-[#e5bd64] transition hover:bg-[#c99a3c] hover:text-black sm:min-w-56">Explore Our Work <span aria-hidden="true">→</span></Link>
            <Link href="/contact" className="inline-flex min-h-12 items-center justify-center border border-white/10 px-5 text-[10px] font-semibold uppercase tracking-[.18em] text-white/62 transition hover:border-[#c99a3c]/45 hover:text-[#e3ba61]">Start a Project</Link>
          </div>
        </motion.div>

        <motion.div initial={false} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: reduced ? 0 : 1.05, delay: reduced ? 0 : 0.08, ease: [0.22, 1, 0.36, 1] }} className="relative mx-auto min-h-[430px] w-full overflow-hidden border border-[#c99a3c]/25 bg-[#080705] shadow-[0_55px_140px_rgba(0,0,0,.72)] sm:min-h-[560px] lg:min-h-[650px]">
          <Image src={`${basePath}/media/ppa-studio-scene.webp`} alt="Prime Presence Atelier dark creative studio" fill priority sizes="(max-width: 1024px) 100vw, 58vw" className="object-cover object-center" />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(2,2,2,.82)_0%,rgba(2,2,2,.18)_48%,rgba(2,2,2,.12)_100%),radial-gradient(circle_at_50%_45%,transparent_10%,rgba(0,0,0,.38)_100%)]" />
          <div className="absolute inset-x-5 bottom-5 border border-[#c99a3c]/25 bg-black/70 p-4 backdrop-blur-md sm:inset-x-8 sm:bottom-8 sm:p-6 lg:left-10 lg:right-auto lg:w-[58%]">
            <div className="relative mx-auto h-[118px] w-full max-w-[320px] sm:h-[150px]">
              <Image src={brandLogoData} alt="Prime Presence Atelier — Designed to Be Remembered" fill unoptimized className="object-contain object-center" sizes="320px" />
            </div>
            <div className="mt-3 flex items-center justify-center gap-3 text-[8px] font-semibold uppercase tracking-[.24em] text-white/48 sm:text-[9px]">
              <span className="h-px w-8 bg-[#c99a3c]" /> Official identity <span className="h-px w-8 bg-[#c99a3c]" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
