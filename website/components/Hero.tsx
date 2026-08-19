"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

export default function Hero({
  location,
  media,
}: {
  location: string;
  media?: { src: string; alt: string; decorative: boolean };
}) {
  const reduced = useReducedMotion();

  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden bg-[#050505] text-white">
      <div className="absolute inset-0">
        {media ? (
          <Image
            src={media.src}
            alt={media.decorative ? "" : media.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-38"
          />
        ) : (
          <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
            <div className="absolute -right-40 top-[8%] h-[42rem] w-[42rem] rounded-full border border-[#C8A348]/10" />
            <div className="absolute -right-16 top-[18%] h-[30rem] w-[30rem] rounded-full border border-white/5" />
            <div className="absolute right-[8%] top-[19%] hidden h-[31rem] w-[19rem] rotate-[8deg] rounded-[2.5rem] border border-[#C8A348]/25 bg-[linear-gradient(155deg,rgba(240,215,136,.12),rgba(10,10,9,.92)_35%,rgba(4,4,4,.98))] p-3 shadow-[0_45px_140px_rgba(0,0,0,.75)] md:block">
              <div className="relative h-full overflow-hidden rounded-[2rem] border border-white/10 bg-[#070706]">
                <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_50%_0%,rgba(200,163,72,.28),transparent_68%)]" />
                <div className="absolute left-1/2 top-8 h-20 w-20 -translate-x-1/2 rounded-full border border-[#C8A348]/30 bg-[radial-gradient(circle,rgba(240,215,136,.2),rgba(20,18,12,.25)_55%,transparent_58%)]" />
                <div className="absolute inset-x-7 top-36 h-px bg-gradient-to-r from-transparent via-[#C8A348]/60 to-transparent" />
                <div className="absolute inset-x-7 top-44 space-y-3">
                  <div className="mx-auto h-2 w-28 rounded-full bg-white/22" />
                  <div className="mx-auto h-1.5 w-20 rounded-full bg-white/10" />
                </div>
                <div className="absolute inset-x-6 bottom-20 grid grid-cols-3 gap-2">
                  {[0, 1, 2].map((item) => (
                    <div key={item} className="aspect-square rounded-2xl border border-white/8 bg-white/[.025]" />
                  ))}
                </div>
                <div className="absolute inset-x-6 bottom-7 h-9 rounded-full border border-[#C8A348]/35 bg-[#C8A348]/10" />
              </div>
            </div>
            <div className="absolute right-[25%] top-[67%] hidden h-px w-52 rotate-[-14deg] bg-gradient-to-r from-transparent via-[#C8A348]/55 to-transparent lg:block" />
            <div className="absolute right-[3%] top-[73%] hidden text-[10px] font-semibold uppercase tracking-[.36em] text-[#C8A348]/55 lg:block">Identity · Presence · Launch</div>
          </div>
        )}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_22%,rgba(200,163,72,.15),transparent_28%),linear-gradient(90deg,rgba(5,5,5,.99)_0%,rgba(5,5,5,.86)_45%,rgba(5,5,5,.42)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,#050505_0%,transparent_48%)]" />
      </div>

      <div className="container-site relative z-10 flex min-h-[100svh] items-end pb-14 pt-32 sm:items-center sm:pb-20">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl"
        >
          <p className="eyebrow">Founder-led creative atelier · {location}</p>
          <h1 className="display mt-6 max-w-5xl text-balance">
            First impressions that <span className="text-[#d8b75e]">build trust.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-gray-200 sm:text-xl">
            Prime Presence Atelier creates premium brand identities, digital presence and launch experiences for owner-led businesses that need to look credible from the first interaction.
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            Designed with human judgement. Accelerated by AI. Approved before anything reaches your audience.
          </p>
          <div className="mt-9 flex flex-col gap-3 min-[380px]:flex-row">
            <Link href="/contact" className="button-primary">Start a Project</Link>
            <Link href="/services" className="button-secondary bg-black/20 backdrop-blur-sm">Explore the Offers</Link>
          </div>
        </motion.div>
      </div>

      <div aria-hidden="true" className="absolute bottom-0 right-[8vw] hidden h-32 w-px bg-gradient-to-b from-transparent to-[#c8a348] lg:block" />
    </section>
  );
}
