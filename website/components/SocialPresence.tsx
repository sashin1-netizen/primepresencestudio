import Image from "next/image";
import { contactDetails, site } from "@/content/site";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function SocialPresence({ compact = false }: { compact?: boolean }) {
  const instagram = site.socialLinks.find((item: { label?: string; url: string }) => item.label === "Instagram")?.url;
  const whatsapp = contactDetails.phoneInternational ? `https://wa.me/${contactDetails.phoneInternational}` : null;

  if (!instagram && !whatsapp) return null;

  return (
    <section className={`relative overflow-hidden border-y border-white/[.07] bg-[#050504] ${compact ? "px-4 py-14 sm:px-8 sm:py-16 lg:px-12" : "px-4 py-20 sm:px-8 sm:py-28 lg:px-12"}`}>
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_78%_20%,rgba(201,154,60,.08),transparent_26rem)]" />
      <div className="relative mx-auto grid max-w-[1380px] gap-8 lg:grid-cols-[1.18fr_.82fr] lg:items-stretch">
        <div className="grid min-h-[520px] grid-cols-2 grid-rows-2 gap-3 sm:min-h-[640px] sm:gap-4">
          <figure className="relative row-span-2 overflow-hidden border border-white/[.08] bg-[#090806]">
            <Image src={`${basePath}/media/ppa-brand-identity-1.webp`} alt="Prime Presence Atelier identity system" fill sizes="(max-width:1024px) 50vw,36vw" className="object-cover object-center transition-transform duration-700 hover:scale-[1.015]" />
            <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,.5),transparent_58%)]" />
            <figcaption className="absolute bottom-4 left-4 right-4 text-[8px] font-bold uppercase tracking-[.18em] text-[#dfba66]">Identity / Owned proof</figcaption>
          </figure>
          <figure className="relative overflow-hidden border border-white/[.08] bg-[#090806]">
            <Image src={`${basePath}/media/ppa-hero-collateral.webp`} alt="Prime Presence Atelier branded collateral" fill sizes="(max-width:1024px) 50vw,22vw" className="object-cover object-center transition-transform duration-700 hover:scale-[1.02]" />
            <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,.44),transparent_62%)]" />
            <figcaption className="absolute bottom-4 left-4 right-4 text-[8px] font-bold uppercase tracking-[.18em] text-[#dfba66]">Touchpoint / Detail</figcaption>
          </figure>
          <figure className="relative overflow-hidden border border-white/[.08] bg-[#090806]">
            <Image src={`${basePath}/media/ppa-studio-scene.webp`} alt="Prime Presence Atelier visual study" fill sizes="(max-width:1024px) 50vw,22vw" className="object-cover object-center transition-transform duration-700 hover:scale-[1.02]" />
            <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,.42),transparent_62%)]" />
            <figcaption className="absolute bottom-4 left-4 right-4 text-[8px] font-bold uppercase tracking-[.18em] text-[#dfba66]">Atelier / Visual study</figcaption>
          </figure>
        </div>

        <div className="flex items-center border border-[#c99a3c]/16 bg-[#070604] p-7 sm:p-10 lg:p-12">
          <div className="w-full">
            <p className="eyebrow">Follow the work as it evolves</p>
            <h2 className="mt-5 max-w-[9ch] font-[family-name:var(--font-cormorant)] text-[clamp(3rem,6vw,5.4rem)] leading-[.88] tracking-[-.035em] text-[#f3ece1]">The presence continues <span className="italic text-[#d5aa52]">between launches.</span></h2>
            <p className="mt-6 max-w-xl text-[15px] leading-8 text-white/48">Instagram carries visual studies, identity details and launch fragments. WhatsApp remains the fastest direct route when there is an active project to discuss.</p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {instagram ? <a href={instagram} target="_blank" rel="noreferrer" className="group flex min-h-16 items-center justify-between border border-white/10 bg-white/[.018] px-5 transition hover:border-[#c99a3c]/45"><span><span className="block text-[8px] font-bold uppercase tracking-[.18em] text-[#c99a3c]">Instagram</span><span className="mt-1 block text-sm text-white/72 group-hover:text-[#e7c46f]">@primepresence.studio</span></span><span className="text-[#d5aa52]">↗</span></a> : null}
              {whatsapp ? <a href={whatsapp} target="_blank" rel="noreferrer" className="group flex min-h-16 items-center justify-between border border-white/10 bg-white/[.018] px-5 transition hover:border-[#c99a3c]/45"><span><span className="block text-[8px] font-bold uppercase tracking-[.18em] text-[#c99a3c]">WhatsApp</span><span className="mt-1 block text-sm text-white/72 group-hover:text-[#e7c46f]">Start a direct conversation</span></span><span className="text-[#d5aa52]">↗</span></a> : null}
            </div>

            {instagram ? <div className="mt-8 flex items-center gap-5 border-t border-white/[.08] pt-7"><a href={instagram} target="_blank" rel="noreferrer" aria-label="Open Prime Presence Atelier on Instagram" className="block w-[96px] shrink-0 rounded-xl border border-[#c99a3c]/22 bg-white p-2 transition hover:border-[#c99a3c]/60"><img src={`${basePath}/media/instagram-qr.svg`} alt="Instagram QR code" className="h-auto w-full" /></a><div><p className="text-[9px] font-bold uppercase tracking-[.18em] text-white/55">Scan to follow</p><p className="mt-2 text-sm leading-6 text-white/36">A direct bridge from the site into the live social presence.</p></div></div> : null}
          </div>
        </div>
      </div>
    </section>
  );
}
