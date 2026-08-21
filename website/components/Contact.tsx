"use client";

import { useState } from "react";
import { services } from "@/content/services";
import { buildWhatsAppUrl } from "@/lib/contact-url.mjs";
import { buildEnquiryMailto, validateEnquiry } from "@/lib/enquiry.mjs";

type Errors = Partial<Record<"name" | "email" | "details" | "consent", string>>;
type ContactDetails = { email: string | null; phoneDisplay: string | null; phoneHref: string | null; phoneInternational: string | null; contactReady: boolean; privacyApproved: boolean; };

export default function Contact({ headingLevel = "h2", contact }: { headingLevel?: "h1" | "h2"; contact: ContactDetails }) {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState("");
  const liveSubmission = Boolean(contact.contactReady && contact.email && contact.privacyApproved);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const input = {
      name: String(form.get("name") || ""), business: String(form.get("business") || ""), email: String(form.get("email") || ""), phone: String(form.get("phone") || ""), service: String(form.get("service") || ""), budget: String(form.get("budget") || ""), timeline: String(form.get("timeline") || ""), details: String(form.get("details") || ""), consent: form.get("consent") === "yes",
    };
    const next: Errors = validateEnquiry(input);
    if (Object.keys(next).length) {
      setErrors(next); setStatus("");
      requestAnimationFrame(() => document.getElementById(`${Object.keys(next)[0]}-field`)?.focus());
      return;
    }
    setErrors({});
    if (liveSubmission && contact.email) {
      window.location.href = buildEnquiryMailto(contact.email, input);
      return;
    }
    const brief = [`Prime Presence Atelier — Project Brief`,`Name: ${input.name}`,`Business: ${input.business || "Not supplied"}`,`Email: ${input.email}`,`Telephone: ${input.phone || "Not supplied"}`,`Service: ${input.service}`,`Budget readiness: ${input.budget}`,`Timeline: ${input.timeline}`,``,input.details].join("\n");
    try {
      await navigator.clipboard.writeText(brief);
      setStatus("Project brief copied. Send it by email or WhatsApp using the direct contact options on this page.");
    } catch {
      setStatus("Your project brief is ready. Select and copy the details from the form, then send them by email or WhatsApp.");
    }
  }

  const field = "mt-2 w-full min-w-0 rounded-[var(--radius-sm)] border border-white/15 bg-black/35 px-4 py-3.5 text-white transition-colors placeholder:text-white/30 hover:border-white/25 focus:border-[#C8A348]";
  const Heading = headingLevel;

  return (
    <section id="contact" className="section-space border-t border-white/10 bg-[#060606] px-4 sm:px-8">
      <div className="mx-auto grid min-w-0 max-w-7xl gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-16">
        <div className="min-w-0 lg:sticky lg:top-28 lg:self-start">
          <p className="eyebrow">Start a project</p>
          <Heading className="section-title mt-5 text-balance">Tell us what needs to make a stronger first impression.</Heading>
          <p className="mt-6 max-w-xl leading-8 text-gray-300">You do not need a polished brief. Share what the business is launching, changing or trying to improve, who needs to trust it and when it matters.</p>
          <div className="mt-8 border-l border-[#c8a348]/50 pl-5"><p className="font-semibold text-white">What happens next</p><p className="mt-2 leading-7 text-[var(--muted)]">The enquiry is reviewed for fit first. If the atelier can help, the next step is a short discovery followed by a written scope, exclusions, timing and commencement deposit.</p></div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {contact.email ? <a href={`mailto:${contact.email}`} className="flex min-h-14 items-center justify-between border border-[#c8a348]/30 bg-[#c8a348]/[.035] px-5 text-sm text-[#efd178] transition hover:border-[#c8a348]/60"><span>Email</span><span className="text-white/55">→</span></a> : null}
            {contact.phoneInternational && contact.phoneDisplay ? <a href={buildWhatsAppUrl(contact.phoneInternational, "Hi Prime Presence Atelier, I'd like to discuss a project.")} target="_blank" rel="noreferrer" className="flex min-h-14 items-center justify-between border border-white/12 bg-white/[.025] px-5 text-sm text-white/80 transition hover:border-[#c8a348]/45"><span>WhatsApp</span><span className="text-[#d8ad55]">→</span></a> : null}
            {contact.phoneHref && contact.phoneDisplay ? <a href={contact.phoneHref} className="flex min-h-14 items-center justify-between border border-white/12 bg-white/[.025] px-5 text-sm text-white/80 transition hover:border-[#c8a348]/45 sm:col-span-2 lg:col-span-1 xl:col-span-2"><span>{contact.phoneDisplay}</span><span className="text-[#d8ad55]">Call →</span></a> : null}
          </div>
        </div>

        <form onSubmit={submit} noValidate className="grid min-w-0 gap-5 rounded-[var(--radius-lg)] border border-white/10 bg-[linear-gradient(145deg,#0d0c0b,#080808)] p-6 shadow-[0_32px_100px_rgba(0,0,0,.28)] sm:grid-cols-2 sm:p-8" aria-label="Project enquiry">
          <Field label="Name" required error={errors.name}><input id="name-field" name="name" required autoComplete="name" className={field} aria-invalid={Boolean(errors.name)} /></Field>
          <Field label="Business name"><input name="business" autoComplete="organization" className={field} /></Field>
          <Field label="Email" required error={errors.email}><input id="email-field" name="email" required type="email" autoComplete="email" className={field} aria-invalid={Boolean(errors.email)} /></Field>
          <Field label="Telephone"><input name="phone" type="tel" autoComplete="tel" inputMode="tel" className={field} /></Field>
          <Field label="What do you need?"><select name="service" className={field}><option>Not sure yet</option>{services.map(service => <option key={service.slug}>{service.title}</option>)}</select></Field>
          <Field label="Budget readiness"><select name="budget" className={field}><option>Still defining the budget</option><option>Ready to fund the right scoped project</option><option>Need guidance on what is realistic</option></select></Field>
          <Field label="Preferred timeline"><select name="timeline" className={field}><option>Flexible</option><option>Within 30 days</option><option>1–3 months</option><option>3+ months</option></select></Field>
          <div className="hidden sm:block" aria-hidden="true" />
          <Field label="Project details" required error={errors.details} wide><textarea id="details-field" name="details" required minLength={20} className={`${field} min-h-40 resize-y`} aria-invalid={Boolean(errors.details)} /><span className="mt-2 block text-xs leading-5 text-[var(--muted)]">What are you launching or changing? Who is it for? What is not working today?</span></Field>
          <div className="sm:col-span-2">
            <label className="flex items-start gap-3 text-sm leading-6 text-gray-300"><input id="consent-field" name="consent" value="yes" required type="checkbox" className="mt-1 h-5 w-5 shrink-0 accent-[#c8a348]" />I agree that these details may be used to prepare or respond to my project enquiry.</label>
            {contact.privacyApproved ? <a href="/privacy" className="ml-8 mt-2 inline-flex text-sm text-[#f0d788] underline underline-offset-4">Read the privacy policy</a> : <p className="ml-8 mt-2 text-xs leading-5 text-white/40">Until the privacy policy is approved, this page does not transmit or store your form data.</p>}
            {errors.consent && <p className="mt-2 text-sm text-red-300">{errors.consent}</p>}
          </div>
          <button className="button-primary sm:col-span-2" type="submit">{liveSubmission ? "Send Project Enquiry" : "Copy Project Brief"}</button>
          {status ? <p role="status" className="rounded-lg border border-[#c8a348]/20 bg-[#c8a348]/[.04] p-4 text-center text-sm leading-6 text-[#ead69a] sm:col-span-2">{status}</p> : null}
          <p className="text-center text-xs leading-5 text-[var(--muted)] sm:col-span-2">{liveSubmission ? "Your enquiry opens in your default email app so you can review it before sending." : "Nothing is uploaded or stored. Copy the brief, then send it directly by email or WhatsApp."}</p>
        </form>
      </div>
    </section>
  );
}

function Field({ label, required, error, wide, children }: { label: string; required?: boolean; error?: string; wide?: boolean; children: React.ReactNode }) {
  return <label className={`min-w-0 ${wide ? "sm:col-span-2" : ""}`}><span className="text-sm font-medium text-gray-200">{label}{required && <span aria-hidden="true"> *</span>}</span>{children}{error && <span className="mt-2 block text-sm text-red-300">{error}</span>}</label>;
}
