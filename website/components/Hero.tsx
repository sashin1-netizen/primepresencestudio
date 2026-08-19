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
    <section id="top" className="relative min-h-[100svh] overflow-hidden bg-[#040403] text-white">
      <div className="absolute inset-0">
        {media ? (
          <Image
            src={media.src}
            alt={media.decorative ? "" : media.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-35"
          />
        ) : null}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_34%,rgba(203,157,47,.19),transparent_24%),radial-gradient(circle_at_35%_8%,rgba(255,243,205,.04),transparent_25%),linear-gradient(90deg,#040403_0%,#080705_50%,#020202_100%)]" />
        <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(255,255,255,.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.018)_1px,transparent_1px)] [background-size:72px_72px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_38%,rgba(0,0,0,.72)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#040403] to-transparent" />
      </div>

      <div className="container-site relative z-10 grid min-h-[100svh] items-center gap-12 pb-16 pt-32 lg:grid-cols-[.88fr_1.12fr] lg:gap-8 lg:pb-10 lg:pt-28">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-20 max-w-3xl"
        >
          <div className="mb-7 flex items-center gap-4">
            <span className="h-px w-10 bg-[#d1a54a]" />
            <p className="text-[10px] font-semibold uppercase tracking-[.34em] text-[#d8b565] sm:text-xs">
              Founder-led creative atelier · {location}
            </p>
          </div>

          <h1 className="font-[family-name:var(--font-cormorant)] text-[clamp(3.5rem,7.1vw,7.9rem)] font-medium leading-[.82] tracking-[-.045em] text-[#f4efe4]">
            First impressions
            <span className="mt-2 block bg-gradient-to-r from-[#f2d88a] via-[#c38a27] to-[#f0cf71] bg-clip-text italic text-transparent">
              designed to be remembered.
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-base leading-8 text-[#c9c4b9] sm:text-lg">
            Prime Presence Atelier™ creates premium brand identities, digital presence and launch experiences for businesses that need to look credible before the first conversation begins.
          </p>

          <div className="mt-9 flex flex-col gap-3 min-[390px]:flex-row">
            <Link href="/work" className="button-primary min-w-48 justify-between gap-8">
              Explore Our Work <span aria-hidden="true">→</span>
            </Link>
            <Link href="/contact" className="button-secondary min-w-44 bg-black/20 backdrop-blur-sm">
              Start a Project
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-5 text-[10px] font-semibold uppercase tracking-[.24em] text-white/45">
            <span>Identity</span>
            <span>Digital Presence</span>
            <span>Creative Direction</span>
          </div>
        </motion.div>

        <motion.div
          initial={reduced ? false : { opacity: 0, scale: 0.96, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.05, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto flex w-full max-w-[760px] items-center justify-center lg:justify-end"
          aria-label="Prime Presence Atelier brand mark"
        >
          <div className="absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#bd8426]/10 blur-[110px] sm:h-[40rem] sm:w-[40rem]" />
          <div className="relative w-full overflow-hidden rounded-[2px] border border-[#c69b46]/18 bg-[linear-gradient(145deg,rgba(27,22,14,.92),rgba(4,4,3,.98)_55%)] px-7 py-12 shadow-[0_45px_140px_rgba(0,0,0,.7)] sm:px-12 sm:py-16 lg:min-h-[620px] lg:px-16 lg:py-20">
            <div aria-hidden="true" className="absolute inset-0 opacity-35 [background-image:radial-gradient(circle_at_20%_20%,rgba(255,255,255,.08)_0,transparent_28%),linear-gradient(115deg,transparent_0_45%,rgba(214,169,72,.035)_45%_46%,transparent_46%_100%)]" />
            <div aria-hidden="true" className="absolute -right-24 -top-24 h-72 w-72 rotate-45 border border-[#c99a3c]/10" />
            <div aria-hidden="true" className="absolute -bottom-28 -left-28 h-72 w-72 rotate-45 border border-[#c99a3c]/8" />

            <div className="relative flex h-full flex-col items-center justify-center text-center">
              <BrandMark />
              <div className="mt-10 w-full max-w-xl">
                <p className="font-[family-name:var(--font-cormorant)] text-[clamp(2.8rem,6vw,5.4rem)] leading-none tracking-[.38em] text-[#eee9df] drop-shadow-[0_0_20px_rgba(218,170,74,.2)] [text-indent:.38em]">
                  PRIME
                </p>
                <p className="mt-4 bg-gradient-to-b from-[#f2d17f] via-[#b98020] to-[#f6dc8f] bg-clip-text text-[clamp(1rem,2.2vw,1.75rem)] font-medium uppercase tracking-[.55em] text-transparent [text-indent:.55em]">
                  Presence
                </p>
                <p className="mt-2 bg-gradient-to-b from-[#f4d57f] via-[#c48e2c] to-[#f2cf72] bg-clip-text font-[family-name:var(--font-cormorant)] text-[clamp(2rem,4.6vw,3.9rem)] uppercase tracking-[.34em] text-transparent [text-indent:.34em]">
                  Atelier
                </p>
              </div>

              <div className="mt-8 flex w-full max-w-md items-center gap-4">
                <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#c79738]" />
                <span className="h-3 w-3 rotate-45 border border-[#e0b44d]" />
                <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#c79738]" />
              </div>
              <p className="mt-7 text-[10px] font-semibold uppercase tracking-[.43em] text-[#e4ded2] sm:text-xs">
                Designed to be <span className="text-[#d8aa45]">remembered.</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-5 left-1/2 z-20 hidden -translate-x-1/2 items-center gap-3 text-[9px] font-semibold uppercase tracking-[.28em] text-white/35 lg:flex">
        <span className="h-8 w-px bg-gradient-to-b from-[#c99a3c] to-transparent" />
        Scroll to discover
      </div>
    </section>
  );
}

function BrandMark() {
  return (
    <div className="relative h-36 w-36 sm:h-44 sm:w-44" aria-hidden="true">
      <div className="absolute inset-[11%] rotate-45 border-[7px] border-[#d2a03a] shadow-[0_0_28px_rgba(214,160,55,.22)]" />
      <div className="absolute left-1/2 top-[29%] h-[48%] w-[15%] -translate-x-1/2 bg-gradient-to-r from-[#9a681d] via-[#f0ce77] to-[#a36d1b]" />
      <div className="absolute left-[39%] top-[29%] h-[15%] w-[35%] bg-gradient-to-b from-[#f4d881] via-[#bb8124] to-[#f0ca69]" />
      <div className="absolute left-[39%] top-[29%] h-[46%] w-[15%] bg-gradient-to-r from-[#9c6b20] via-[#efcd72] to-[#a46e1b]" />
      <div className="absolute left-[52%] top-[43%] h-[32%] w-[15%] bg-gradient-to-r from-[#a67320] via-[#f0d077] to-[#a46b19]" />
      <div className="absolute left-[52%] top-[42%] h-[15%] w-[22%] bg-gradient-to-b from-[#f2d37b] via-[#bd8529] to-[#e5bc59]" />
      <div className="absolute inset-[5%] rounded-full bg-[#c79231]/8 blur-2xl" />
    </div>
  );
}
