"use client";
import { useRef } from "react";
import type { Project } from "@/content/projects";
type Video = NonNullable<Project["video"]>;
export default function BrandRevealPlayer({ video }: { video: Video }) { const ref = useRef<HTMLVideoElement>(null); return <div className="overflow-hidden rounded-[var(--radius-md)] border border-white/10 bg-black"><video ref={ref} controls playsInline preload="metadata" poster={video.poster} aria-label={video.label} className="aspect-video w-full"> <source src={video.src} type="video/mp4" />{video.captions && <track default kind="captions" src={video.captions} srcLang="en" label="English" />}Your browser does not support video playback.</video></div> }
