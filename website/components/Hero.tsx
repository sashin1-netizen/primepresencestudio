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
        ) : null}
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
