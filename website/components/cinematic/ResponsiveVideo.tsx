"use client";
import { useEffect, useRef, useState } from "react";
export default function ResponsiveVideo({ src, poster, label }: { src: string; poster: string; label: string }) {
  const ref = useRef<HTMLVideoElement>(null); const [ready, setReady] = useState(false);
  useEffect(() => { const video = ref.current; if (!video) return; const observer = new IntersectionObserver(([entry]) => entry.isIntersecting ? void video.play().catch(()=>{}) : video.pause(), { threshold: .2 }); observer.observe(video); return () => observer.disconnect(); }, []);
  return <div className="relative aspect-[4/5] overflow-hidden bg-[#0b0b0a] sm:aspect-[16/10]">{!ready && <div className="absolute inset-0 animate-pulse bg-[linear-gradient(110deg,#0a0a09,#17150f,#0a0a09)]" aria-hidden="true" />}<video ref={ref} muted loop playsInline preload="metadata" poster={poster} aria-label={label} onCanPlay={() => setReady(true)} className="h-full w-full object-cover"><source src={src} type="video/mp4" /></video></div>;
}
