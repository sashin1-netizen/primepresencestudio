"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import AnimatedGlow from "./motion/AnimatedGlow";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050505] px-4 pb-[calc(5rem+env(safe-area-inset-bottom))] pt-28 text-white sm:px-8 sm:pt-32 lg:px-12 lg:pt-32">
      <div className="absolute inset-0">
        <AnimatedGlow />
        <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-[#C8A348]/20 via-[#C8A348]/10 to-transparent" />
        <div className="absolute inset-0 bg-[url('/images/backgrounds/luxury-noise.svg')] bg-cover bg-center opacity-40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(200,163,72,0.16),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_28%)]" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-8 sm:gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
        <div className="text-center lg:text-left opacity-100 translate-y-0 transition-all duration-700">
          <Image
            src="/images/prime-logo.png"
            alt="Prime Presence"
            width={340}
            height={140}
            priority
            className="mx-auto mb-10 h-auto w-[220px] sm:w-[280px] lg:mx-0 lg:w-[320px]"
          />

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#C8A348]/30 bg-[#C8A348]/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-[#C8A348]">
            <span aria-hidden className="h-2 w-2 rounded-full bg-[#C8A348]" />
            Branding & Digital Experience Studio · South Africa
          </div>

          <h1 className="mb-8 text-4xl font-semibold leading-[0.95] sm:text-5xl lg:text-7xl">
            Designed to be
            <span className="mt-3 block bg-gradient-to-r from-[#f9ebba] via-[#e4c364] to-[#C8A348] bg-clip-text text-transparent">
              Remembered.
            </span>
          </h1>

          <p className="mx-auto mb-12 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg sm:leading-8 lg:mx-0 lg:text-xl">
            Premium identities, brand reveals and digital experiences for businesses ready to look established, credible and unmistakable.
          </p>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-5 lg:justify-start">
            <a
              href="#contact"
              aria-label="Start a project enquiry"
              className="flex min-h-[48px] items-center justify-center rounded-lg bg-[#C8A348] px-7 py-4 font-semibold text-black transition-transform transform hover:-translate-y-1 hover:scale-105"
            >
              Start a Project
            </a>
            <a
              href="/work"
              aria-label="View our work"
              className="flex min-h-[48px] items-center justify-center rounded-lg border border-[#C8A348] px-7 py-4 font-semibold text-[#C8A348] transition-transform transform hover:-translate-y-1 hover:scale-105 hover:bg-[#C8A348] hover:text-black"
            >
              View Our Work
            </a>
          </div>
        </div>

        <div className="relative mt-4 sm:mt-0 transition-transform transform hover:-translate-y-1 hover:scale-[1.01]">
            <div className="absolute inset-0 rounded-[2.25rem] border border-[#C8A348]/20 bg-[#C8A348]/10 blur-3xl" />
            <div className="absolute inset-4 rounded-[2rem] border border-white/5" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a0a0a]/90 p-2 shadow-[0_0_80px_rgba(200,163,72,0.12)] backdrop-blur">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(200,163,72,0.15),transparent_35%,rgba(255,255,255,0.05))]" />
              <HeroMediaFallback />
            </div>
          </div>
      </div>
    </section>
  );
}

declare global {
  interface Navigator {
    connection?: {
      saveData?: boolean;
      effectiveType?: string;
    };
  }
}

function HeroMediaFallback() {
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const connection = navigator.connection || {};
    const saveData = connection?.saveData || false;
    const effectiveType = connection?.effectiveType || "";

    const m = window.matchMedia?.("(min-width: 640px)");
    const canPlay = m ? m.matches : true;
    const goodConnection = !saveData && effectiveType !== "2g";

    if (canPlay && goodConnection) {
      // Defer state update to avoid cascading synchronous renders
      const id = window.setTimeout(() => setShouldLoadVideo(true), 0);
      return () => window.clearTimeout(id);
    }
  }, []);

  if (shouldLoadVideo) {
    return (
      <video
        className="relative w-full object-cover object-center"
        src="/videos/real/hero-film.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/real/hero-studio.jpg"
        aria-hidden="true"
      />
    );
  }

  return (
    <Image
      src="/images/real/hero-studio.jpg"
      alt="Studio scene"
      width={1600}
      height={900}
      className="relative w-full object-cover object-center"
      sizes="(max-width: 640px) 100vw, 50vw"
      priority={false}
    />
  );
}
