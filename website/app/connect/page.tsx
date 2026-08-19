import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import Contact from "@/components/Contact";
import { contactDetails } from "@/content/site";

export const metadata: Metadata = {
  title: "Prime Presence Connect",
  description: "Prime Presence Connect is a premium mobile-first digital business card and mini-profile product by Prime Presence Atelier.",
  alternates: { canonical: "/connect" },
};

const features = [
  ["Mobile-first profile", "A focused, app-style introduction designed around the screen people use most."],
  ["One-tap contact", "Approved WhatsApp, call, email and social actions make the next step immediate."],
  ["QR + vCard", "A canonical QR code and downloadable contact card make sharing practical in person and online."],
  ["Built to update", "The profile is configuration-driven so approved details can be maintained without rebuilding the product from scratch."],
  ["Shareable by design", "Native sharing with sensible fallbacks helps the profile move beyond a single device or platform."],
  ["Controlled publishing", "Draft, preview, approval and publication states support a disciplined client handover process."],
] as const;

export default function Page() {
  return (
    <PageShell
      eyebrow="Owned product"
      title="Prime Presence Connect™"
      intro="A premium digital business card and mini-profile designed to make every introduction feel considered—and every next action easy."
      after={<Contact contact={contactDetails} />}
    >
      <div className="grid gap-8 lg:grid-cols-[1.05fr_.95fr] lg:items-start">
        <div>
          <p className="eyebrow">Why it exists</p>
          <h2 className="section-title mt-4">Your business card should do more than carry a phone number.</h2>
        </div>
        <div className="space-y-5 text-sm leading-8 text-gray-300 sm:text-base">
          <p>
            Connect turns a first meeting, WhatsApp introduction, social profile or QR scan into a branded digital handoff. It keeps the essentials together without forcing someone through a full website before they can contact you.
          </p>
          <p>
            Prime Presence Atelier is the flagship proof environment. The product is built as a reusable system for future client profiles rather than a one-off page rebuilt from zero each time.
          </p>
        </div>
      </div>

      <ConnectPreview />

      <div className="mt-16 grid gap-px overflow-hidden rounded-[var(--radius-md)] bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
        {features.map(([title, body], index) => (
          <article key={title} className="bg-[#080808] p-7 sm:p-8">
            <p className="eyebrow">0{index + 1}</p>
            <h2 className="mt-5 font-[family-name:var(--font-cormorant)] text-2xl text-white">{title}</h2>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{body}</p>
          </article>
        ))}
      </div>

      <div className="mt-16 rounded-[var(--radius-lg)] border border-[#C8A348]/25 bg-[linear-gradient(135deg,rgba(200,163,72,.08),rgba(255,255,255,.02))] p-8 sm:p-10">
        <p className="eyebrow">Best fit</p>
        <h2 className="mt-4 font-[family-name:var(--font-cormorant)] text-3xl text-white sm:text-4xl">For people who sell through relationships.</h2>
        <p className="mt-4 max-w-3xl leading-8 text-gray-300">
          Connect is especially useful for founders, consultants, trades, service businesses and professionals who rely on WhatsApp, referrals, events and direct introductions—and want that first digital touchpoint to look as credible as the work behind it.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Link href="/contact" className="button-primary">Build My Connect Profile</Link>
          <Link href="/services" className="button-secondary">Explore Other Offers</Link>
        </div>
      </div>
    </PageShell>
  );
}

function ConnectPreview() {
  return (
    <section className="relative mt-16 overflow-hidden rounded-[var(--radius-lg)] border border-white/10 bg-[#080807] p-6 sm:p-10 lg:grid lg:grid-cols-[.72fr_1.28fr] lg:items-center lg:gap-12 lg:p-12">
      <div aria-hidden="true" className="absolute -right-28 -top-36 h-[32rem] w-[32rem] rounded-full border border-[#C8A348]/10" />
      <div className="relative z-10 max-w-xl">
        <p className="eyebrow">The handoff</p>
        <h2 className="mt-5 font-[family-name:var(--font-cormorant)] text-4xl leading-none text-white sm:text-5xl">One profile. Several moments.</h2>
        <p className="mt-5 leading-8 text-gray-300">
          A Connect profile is designed to work after a meeting, inside WhatsApp, from a QR scan, in an email signature or as the focused link behind a social profile.
        </p>
        <div className="mt-7 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 text-sm">
          {["Meet", "Scan", "Share", "Save"].map((item, index) => (
            <div key={item} className="bg-[#0b0b09] px-4 py-4 text-gray-300">
              <span className="mr-2 text-[#C8A348]">0{index + 1}</span>{item}
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 mt-10 flex min-h-[34rem] items-center justify-center lg:mt-0">
        <div aria-hidden="true" className="absolute h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(200,163,72,.15),rgba(200,163,72,.03)_42%,transparent_67%)]" />
        <div className="relative w-[17.5rem] rotate-[2deg] rounded-[2.35rem] border border-[#C8A348]/30 bg-[#050505] p-3 shadow-[0_40px_120px_rgba(0,0,0,.8)] sm:w-[19rem]">
          <div className="relative overflow-hidden rounded-[1.85rem] border border-white/10 bg-[linear-gradient(165deg,#11100c,#070707_45%,#050505)] px-5 pb-6 pt-7">
            <div aria-hidden="true" className="absolute inset-x-0 top-0 h-36 bg-[radial-gradient(circle_at_50%_0%,rgba(240,215,136,.2),transparent_65%)]" />
            <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#C8A348]/35 bg-[#0b0a08] font-[family-name:var(--font-cormorant)] text-2xl text-[#F0D788]">PPA</div>
            <div className="relative mt-5 text-center">
              <p className="font-[family-name:var(--font-cormorant)] text-2xl text-white">Prime Presence Atelier</p>
              <p className="mt-1 text-[10px] uppercase tracking-[.24em] text-[#C8A348]">Designed to Be Remembered.</p>
            </div>
            <div className="relative mt-6 grid grid-cols-3 gap-2">
              {["Call", "Email", "Share"].map((action) => (
                <div key={action} className="rounded-xl border border-white/10 bg-white/[.025] px-2 py-3 text-center text-[10px] uppercase tracking-[.12em] text-gray-300">{action}</div>
              ))}
            </div>
            <div className="relative mt-5 grid grid-cols-[1fr_auto] items-center gap-4 rounded-2xl border border-white/10 bg-black/35 p-4">
              <div>
                <p className="text-xs font-semibold text-white">Save the introduction</p>
                <p className="mt-1 text-[10px] leading-4 text-gray-400">QR, vCard and direct contact actions in one branded place.</p>
              </div>
              <div className="grid h-16 w-16 grid-cols-7 gap-[2px] rounded-lg bg-[#F1E6C1] p-2">
                {Array.from({ length: 49 }, (_, index) => (
                  <span key={index} className={(index * 7 + index * index) % 5 < 2 ? "bg-[#111]" : "bg-transparent"} />
                ))}
              </div>
            </div>
            <div className="relative mt-4 rounded-full bg-[#E7CC78] px-4 py-3 text-center text-xs font-bold text-black">Save Contact</div>
          </div>
        </div>
      </div>
    </section>
  );
}
