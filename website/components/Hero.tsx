"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

export default function Hero({ location }: { location: string; media?: { src: string; alt: string; decorative: boolean } }) {
  const reduced = useReducedMotion();

  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden bg-[#030302] text-white">
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_72%_34%,rgba(182,126,30,.18),transparent_23%),radial-gradient(circle_at_30%_15%,rgba(255,237,190,.035),transparent_22%),linear-gradient(90deg,#030302_0%,#080705_48%,#030302_100%)]" />
      <div aria-hidden="true" className="absolute inset-0 opacity-25 [background-image:linear-gradient(115deg,transparent_0_47%,rgba(214,166,68,.025)_47%_48%,transparent_48%_100%),radial-gradient(circle_at_center,rgba(255,255,255,.025)_0_1px,transparent_1.2px)] [background-size:100%_100%,4px_4px]" />
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,.78)_100%)]" />

      <div className="container-site relative z-10 grid min-h-[100svh] items-center gap-10 pb-14 pt-28 lg:grid-cols-[.82fr_1.18fr] lg:gap-4 lg:pb-8 lg:pt-24">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-w-[670px] lg:pl-12"
        >
          <div className="absolute -left-2 top-[31%] hidden -translate-y-1/2 lg:block">
            <div className="flex flex-col items-center gap-4 text-[11px] tracking-[.16em]">
              <span className="text-[#e2b65c]">01</span>
              <span className="h-12 w-px bg-gradient-to-b from-[#c99636] to-white/10" />
              <span className="text-white/24">02</span>
              <span className="text-white/24">03</span>
              <span className="text-white/24">04</span>
            </div>
          </div>

          <p className="text-[10px] font-semibold uppercase tracking-[.34em] text-[#d1a64a] sm:text-xs">
            Crafting brands that command attention
          </p>
          <h1 className="mt-6 font-[family-name:var(--font-cormorant)] text-[clamp(3.9rem,6.7vw,7.6rem)] font-medium leading-[.83] tracking-[-.04em] text-[#f4efe5]">
            We don’t just
            <span className="block">create content.</span>
            <span className="mt-2 block bg-gradient-to-r from-[#f3d987] via-[#bd8121] to-[#edc768] bg-clip-text italic text-transparent">
              We craft presence.
            </span>
          </h1>

          <div className="mt-6 flex items-center gap-3">
            <span className="h-px w-11 bg-[#c99335]" />
            <span className="h-3 w-3 rotate-45 border border-[#e0b653]" />
            <span className="h-px w-11 bg-[#c99335]" />
          </div>

          <p className="mt-7 max-w-xl text-sm leading-7 text-[#c9c3b7] sm:text-base sm:leading-8">
            Prime Presence Atelier™ is a founder-led creative studio for businesses that refuse to blend in. We shape identity, digital presence and launch experiences that make the first impression feel intentional.
          </p>
          <p className="mt-3 text-[10px] font-semibold uppercase tracking-[.25em] text-white/36">{location} · Worldwide remote delivery</p>

          <div className="mt-8 flex flex-col gap-3 min-[390px]:flex-row">
            <Link href="/work" className="inline-flex min-h-12 min-w-56 items-center justify-between border border-[#c99a3c]/75 px-6 text-[10px] font-semibold uppercase tracking-[.18em] text-[#e5bd64] transition hover:bg-[#c99a3c] hover:text-black">
              Explore Our Work <span aria-hidden="true">→</span>
            </Link>
            <Link href="/contact" className="inline-flex min-h-12 items-center justify-center px-5 text-[10px] font-semibold uppercase tracking-[.18em] text-white/62 transition hover:text-[#e3ba61]">
              Start a Project
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={reduced ? false : { opacity: 0, x: 28, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.05, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto min-h-[440px] w-full max-w-[900px] sm:min-h-[560px] lg:min-h-[680px]"
          aria-label="Prime Presence Atelier brand presentation"
        >
          <div className="absolute inset-[7%_0_4%_7%] bg-[radial-gradient(circle_at_55%_38%,rgba(205,159,65,.10),transparent_27%),linear-gradient(145deg,#17130e,#070604_56%,#030303)] shadow-[0_60px_140px_rgba(0,0,0,.7)]" />
          <div className="absolute inset-[7%_0_4%_7%] opacity-45 [background-image:linear-gradient(120deg,transparent_0_45%,rgba(255,255,255,.025)_45%_46%,transparent_46%_100%),radial-gradient(circle_at_center,rgba(255,255,255,.035)_0_1px,transparent_1.1px)] [background-size:100%_100%,4px_4px]" />

          <div className="absolute bottom-[10%] left-[8%] right-[2%] h-[19%] skew-x-[-8deg] bg-[linear-gradient(170deg,#352819,#100d08_42%,#050504)] shadow-[0_24px_70px_rgba(0,0,0,.9)]" />
          <div className="absolute bottom-[23%] left-[28%] h-[18%] w-[32%] rotate-[-7deg] border border-[#c9983e]/35 bg-[#0c0b09] p-4 shadow-[0_30px_55px_rgba(0,0,0,.7)] sm:p-6">
            <MiniBrand lockup="card" />
          </div>
          <div className="absolute right-[12%] top-[17%] h-[47%] w-[37%] border border-[#c9983e]/38 bg-[linear-gradient(155deg,#15120d,#070605_55%,#020202)] p-5 shadow-[0_36px_90px_rgba(0,0,0,.78)] sm:p-8">
            <MiniBrand lockup="board" />
          </div>
          <div className="absolute bottom-[18%] right-[3%] h-[27%] w-[15%] rounded-t-[42%] border border-[#c9983e]/25 bg-[linear-gradient(90deg,#080706,#17120b,#080706)] shadow-[0_28px_60px_rgba(0,0,0,.75)]">
            <div className="absolute left-1/2 top-[18%] h-[52%] w-[8%] -translate-x-[120%] -rotate-[4deg] rounded-full bg-gradient-to-b from-[#d6a74d] via-[#25211a] to-[#050505]" />
            <div className="absolute left-1/2 top-[15%] h-[57%] w-[8%] translate-x-[80%] rotate-[4deg] rounded-full bg-gradient-to-b from-[#d6a74d] via-[#25211a] to-[#050505]" />
            <div className="absolute inset-x-0 bottom-[13%] text-center text-[9px] font-semibold uppercase tracking-[.2em] text-[#d3a64b]">PPA</div>
          </div>
          <div className="absolute right-[2%] top-[8%] h-[30%] w-[22%] opacity-35 [background-image:linear-gradient(45deg,transparent_47%,#b48129_48%,transparent_49%),linear-gradient(-45deg,transparent_47%,#b48129_48%,transparent_49%)] [background-size:38px_38px]" />

          <div className="absolute bottom-[5%] left-[16%] text-[9px] font-semibold uppercase tracking-[.3em] text-white/28">Identity · Presence · Launch</div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-4 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-[9px] font-semibold uppercase tracking-[.27em] text-white/30 lg:flex">
        <span className="h-7 w-px bg-gradient-to-b from-[#c99a3c] to-transparent" />
        Scroll to discover
      </div>
    </section>
  );
}

function MiniBrand({ lockup }: { lockup: "card" | "board" }) {
  return (
    <div className="flex h-full flex-col items-center justify-center text-center">
      <BrandMark small={lockup === "card"} />
      <p className={`mt-3 font-[family-name:var(--font-cormorant)] uppercase tracking-[.3em] text-[#eee8dc] ${lockup === "card" ? "text-xs sm:text-base" : "text-base sm:text-2xl"}`}>
        Prime
      </p>
      <p className="mt-1 text-[7px] font-semibold uppercase tracking-[.35em] text-[#d4a549] sm:text-[9px]">Presence Atelier</p>
      {lockup === "board" ? <p className="mt-5 text-[6px] uppercase tracking-[.28em] text-white/45 sm:text-[8px]">Designed to be remembered.</p> : null}
    </div>
  );
}

function BrandMark({ small = false }: { small?: boolean }) {
  const size = small ? "h-8 w-8 sm:h-11 sm:w-11" : "h-12 w-12 sm:h-16 sm:w-16";
  return (
    <div className={`relative ${size}`} aria-hidden="true">
      <div className="absolute inset-[8%] rotate-45 border-[3px] border-[#d2a03a]" />
      <div className="absolute left-[39%] top-[28%] h-[47%] w-[16%] bg-gradient-to-r from-[#9d6b1f] via-[#f0cf78] to-[#a56f1c]" />
      <div className="absolute left-[39%] top-[28%] h-[16%] w-[37%] bg-gradient-to-b from-[#f3d67f] via-[#bd8427] to-[#efc96c]" />
      <div className="absolute left-[54%] top-[42%] h-[33%] w-[16%] bg-gradient-to-r from-[#a67320] via-[#efce75] to-[#a46d1a]" />
    </div>
  );
}
