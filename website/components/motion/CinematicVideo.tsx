"use client";

import { useState } from "react";

interface CinematicVideoProps {
  src: string;
  poster?: string;
  title: string;
}

export default function CinematicVideo({ src, poster, title }: CinematicVideoProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a0a0a] shadow-[0_0_80px_rgba(200,163,72,0.12)]">
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#050505] text-sm uppercase tracking-[0.25em] text-[#C8A348]">
          Loading cinematic preview
        </div>
      )}
      <video
        className={`w-full object-cover transition duration-700 ${loaded ? "opacity-100" : "opacity-0"}`}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        onLoadedData={() => setLoaded(true)}
        aria-label={title}
      >
        <source src={src} type="video/mp4" />
        <track kind="captions" src="/videos/real/hero-film.vtt" srcLang="en" label="English captions" default />
      </video>
    </div>
  );
}
