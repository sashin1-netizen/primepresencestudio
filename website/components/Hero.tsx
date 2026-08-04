"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

export default function Hero() {
  const reduced = useReducedMotion();
  return <section id="top" className="relative min-h-[100svh] overflow-hidden bg-[#050505] text-white">
    <div className="absolute inset-0"><Image src="/images/real/hero-studio-1920.webp" alt="" fill priority sizes="100vw" className="object-cover object-center opacity-40"/><div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,.98)_0%,rgba(5,5,5,.76)_48%,rgba(5,5,5,.3)_100%)]"/><div className="absolute inset-0 bg-[linear-gradient(0deg,#050505_0%,transparent_45%)]"/></div>
    <div className="container-site relative z-10 flex min-h-[100svh] items-end pb-16 pt-32 sm:items-center sm:pb-20">
      <motion.div initial={reduced ? false : { opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .9, ease: [.22,1,.36,1] }} className="max-w-5xl">
        <p className="eyebrow">Branding & digital experience studio · South Africa</p>
        <h1 className="display mt-6 max-w-5xl text-balance">Designed to Be <span className="text-[#d8b75e]">Remembered.</span></h1>
        <p className="mt-7 max-w-2xl text-base leading-8 text-gray-200 sm:text-xl">Premium identities, brand reveals and cinematic websites for businesses that care about perception, trust and first impressions.</p>
        <div className="mt-9 flex flex-col gap-3 min-[380px]:flex-row"><Link href="/contact" className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#c8a348] px-7 py-3 font-semibold text-black transition hover:bg-[#f0d788]">Start a Project</Link><Link href="/work" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/30 bg-black/20 px-7 py-3 font-semibold backdrop-blur-sm transition hover:border-[#c8a348] hover:text-[#f0d788]">View Our Work</Link></div>
      </motion.div>
    </div>
    <div aria-hidden="true" className="absolute bottom-0 right-[8vw] hidden h-32 w-px bg-gradient-to-b from-transparent to-[#c8a348] lg:block" />
  </section>;
}
