"use client";
import Image from "next/image";
import { useState } from "react";
import type { Project } from "@/content/projects";
type Preview = NonNullable<Project["websitePreview"]>;

export default function DevicePreview({ preview }: { preview: Preview }) {
  const available: { label: string; image: Preview["desktop"] }[] = [
    { label: "Desktop", image: preview.desktop },
    ...(preview.tablet ? [{ label: "Tablet", image: preview.tablet }] : []),
    ...(preview.mobile ? [{ label: "Mobile", image: preview.mobile }] : []),
  ];
  const [selected, setSelected] = useState(available[0].label);
  const image = available.find(item => item.label === selected)?.image ?? preview.desktop;
  return <section><div className="mb-5 flex flex-wrap gap-2" role="group" aria-label="Website preview size">{available.map(({ label }) => <button key={label} type="button" aria-pressed={selected === label} onClick={() => setSelected(label)} className={`min-h-11 rounded-full border px-4 py-2 text-sm font-semibold ${selected === label ? "border-[#c8a348] bg-[#c8a348] text-black" : "border-white/20 text-white hover:border-[#c8a348]"}`}>{label}</button>)}</div><div className={`mx-auto overflow-y-auto rounded-[var(--radius-md)] border-[10px] border-[#171715] bg-black shadow-2xl ${selected === "Mobile" ? "h-[38rem] max-w-[22rem]" : selected === "Tablet" ? "h-[42rem] max-w-[48rem]" : "h-[45rem] max-w-6xl"}`} tabIndex={0} aria-label={`${selected} website preview; scroll to inspect`}><Image src={image.src} alt={image.alt} width={image.width} height={image.height} sizes="100vw" className="h-auto w-full" /></div></section>;
}
