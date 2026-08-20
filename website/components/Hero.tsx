"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { brandLogoData } from "@/content/brandLogo";

export default function Hero({ location }: { location: string; media?: { src: string; alt: string; decorative: boolean } }) {
  const reduced = useReducedMotion();

  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden bg-[#030302] text-white">
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_72%_34%,rgba(182,126,30,.18),transparent_23%),linear-gradient(90deg,#030302_0%,#080705_48%,#030302_100%)]" />
      <div aria-hidden="true" className="absolute inset-0 opacity-25 [background-image:radial-gradient(circle_at_center,rgba(255,255,255,.025)_0_1px,transparent_1.2px)] [background-size:4px_4px]" />

      <div className="container-site relative z-10 grid min-h-[100svh] items-center gap-10 pb-14 pt-32 lg:grid-cols-[.82fr_1.18fr] lg:gap-10 lg:pb-8 lg:pt-28">
        <motion.div initial={false} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduced ? 0 : 0.8, ease: [0.22, 1, 0.36, 1] }} className="relative max-w-[650px] lg:pl-12">
          <div className="absolute -left-2 top-[31%] hidden -translate-y-1/2 lg:block">
            <div className="flex flex-col items-center gap-4 text-[11px] tracking-[.16em]">
              <span className="text-[#e2b65c]">01</span><span className="h-12 w-px bg-gradient-to-b from-[#c99636] to-white/10" /><span className="text-white/24">02</span><span className="text-white/24">03</span><span className="text-white/24">04</span>
            </div>
          </div>

          <p className="text-[10px] font-semibold uppercase tracking-[.34em] text-[#d1a64a] sm:text-xs">Crafting brands that command attention</p>
          <h1 className="mt-6 font-[family-name:var(--font-cormorant)] text-[clamp(3.9rem,6.4vw,7.3rem)] font-medium leading-[.83] tracking-[-.04em] text-[#f4efe5]">
            We don’t just<span className="block">create content.</span><span className="mt-2 block bg-gradient-to-r from-[#f3d987] via-[#bd8121] to-[#edc768] bg-clip-text italic text-transparent">We craft presence.</span>
          </h1>
          <div className="mt-6 flex items-center gap-3"><span className="h-px w-11 bg-[#c99335]" /><span className="h-3 w-3 rotate-45 border border-[#e0b653]" /><span className="h-px w-11 bg-[#c99335]" /></div>
          <p className="mt-7 max-w-xl text-sm leading-7 text-[#c9c3b7] sm:text-base sm:leading-8">Prime Presence Atelier™ is a founder-led creative studio for businesses that refuse to blend in. We shape identity, digital presence and launch experiences that make the first impression feel intentional.</p>
          <p className="mt-3 text-[10px] font-semibold uppercase tracking-[.25em] text-white/36">{location} · Worldwide remote delivery</p>
          <div className="mt-8 flex flex-col gap-3 min-[390px]:flex-row">
            <Link href="/work" className="inline-flex min-h-12 min-w-56 items-center justify-between border border-[#c99a3c]/75 px-6 text-[10px] font-semibold uppercase tracking-[.18em] text-[#e5bd64] transition hover:bg-[#c99a3c] hover:text-black">Explore Our Work <span aria-hidden="true">→</span></Link>
            <Link href="/contact" className="inline-flex min-h-12 items-center justify-center px-5 text-[10px] font-semibold uppercase tracking-[.18em] text-white/62 transition hover:text-[#e3ba61]">Start a Project</Link>
          </div>
        </motion.div>

        <motion.div initial={false} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: reduced ? 0 : 1.05, delay: reduced ? 0 : 0.08, ease: [0.22, 1, 0.36, 1] }} className="relative mx-auto flex min-h-[430px] w-full items-center justify-center overflow-hidden border border-[#c99a3c]/20 bg-[#080705] shadow-[0_55px_140px_rgba(0,0,0,.72)] sm:min-h-[590px] lg:min-h-[680px]" aria-label="Prime Presence Atelier official brand identity">
          <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(208,161,65,.16),transparent_34%),linear-gradient(145deg,#100d09,#030302_70%)]" />
          <div aria-hidden="true" className="absolute inset-0 opacity-20 [background-image:linear-gradient(120deg,transparent_0_48%,rgba(255,255,255,.035)_48%_49%,transparent_49%_100%)]" />
          <div className="relative h-[320px] w-[92%] sm:h-[470px] lg:h-[540px]">
            <Image src={brandLogoData} alt="Prime Presence Atelier — Designed to Be Remembered" fill priority unoptimized sizes="(max-width: 1024px) 92vw, 52vw" className="object-contain" />
          </div>
          <div className="absolute bottom-5 left-5 border-l border-[#c99a3c]/60 pl-4 text-[9px] font-semibold uppercase tracking-[.28em] text-white/56 sm:bottom-8 sm:left-8">Official Prime Presence Atelier identity</div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-4 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-[9px] font-semibold uppercase tracking-[.27em] text-white/30 lg:flex"><span className="h-7 w-px bg-gradient-to-b from-[#c99a3c] to-transparent" />Scroll to discover</div>
    </section>
  );
}
