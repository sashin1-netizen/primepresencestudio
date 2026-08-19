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
