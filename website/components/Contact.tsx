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

  const field = "mt-2.5 w-full min-w-0 border-0 border-b border-white/14 bg-transparent px-0 pb-3 pt-2 text-[15px] text-[#f3eee5] outline-none transition placeholder:text-white/24 hover:border-white/28 focus:border-[#d3a84f]";
  const selectField = `${field} appearance-none pr-8`;
  const Heading = headingLevel;

  return (
    <section id="contact" className="relative overflow-hidden bg-[#040403] px-4 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_14%_12%,rgba(201,154,60,.08),transparent_26rem),radial-gradient(circle_at_88%_82%,rgba(201,154,60,.045),transparent_28rem)]" />
      <div className="relative mx-auto max-w-[1380px]">
        <div className="grid gap-16 lg:grid-cols-[.78fr_1.22fr] lg:gap-24">
          <aside className="min-w-0 lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow flex items-center gap-3"><span className="h-px w-10 bg-[#c99a3c]/70" /> Start a project</p>
            <Heading className="mt-6 max-w-[12ch] font-[family-name:var(--font-cormorant)] text-[clamp(3.15rem,7vw,5.6rem)] leading-[.88] tracking-[-.04em] text-[#f6efe5]">Tell us what needs to make a stronger first impression.</Heading>
            <p className="mt-7 max-w-xl text-base leading-8 text-white/54">You do not need a polished brief. Give us the context, the ambition and what needs to change. We will shape the right next step from there.</p>

            <div className="mt-10 border-t border-white/[.08] pt-7">
              <p className="text-[10px] font-bold uppercase tracking-[.22em] text-[#d4aa52]">What happens next</p>
              <div className="mt-5 space-y-5">
                {[['01','Fit review','We review the brief for fit, scope and urgency.'],['02','Discovery','If it is aligned, we arrange a focused conversation.'],['03','Scope','You receive a written scope with timing, exclusions and commencement terms.']].map(([number,title,body]) => <div key={number} className="grid grid-cols-[38px_1fr] gap-3"><span className="text-[10px] font-bold tracking-[.16em] text-[#c99a3c]">{number}</span><div><p className="font-[family-name:var(--font-cormorant)] text-2xl text-[#eee7dc]">{title}</p><p className="mt-1 text-sm leading-7 text-white/42">{body}</p></div></div>)}
              </div>
            </div>

            <div className="mt-10 grid gap-2.5">
              {contact.email ? <a href={`mailto:${contact.email}`} className="group flex min-h-14 items-center justify-between border-b border-white/[.09] text-sm text-white/72 transition hover:border-[#c99a3c]/45 hover:text-[#efcc75]"><span>Email</span><span className="transition-transform group-hover:translate-x-1">→</span></a> : null}
              {contact.phoneInternational && contact.phoneDisplay ? <a href={buildWhatsAppUrl(contact.phoneInternational, "Hi Prime Presence Atelier, I'd like to discuss a project.")} target="_blank" rel="noreferrer" className="group flex min-h-14 items-center justify-between border-b border-white/[.09] text-sm text-white/72 transition hover:border-[#c99a3c]/45 hover:text-[#efcc75]"><span>WhatsApp</span><span className="transition-transform group-hover:translate-x-1">→</span></a> : null}
              {contact.phoneHref && contact.phoneDisplay ? <a href={contact.phoneHref} className="group flex min-h-14 items-center justify-between border-b border-white/[.09] text-sm text-white/72 transition hover:border-[#c99a3c]/45 hover:text-[#efcc75]"><span>{contact.phoneDisplay}</span><span className="transition-transform group-hover:translate-x-1">Call →</span></a> : null}
            </div>
          </aside>

          <form onSubmit={submit} noValidate className="min-w-0 border-t border-[#c99a3c]/28 bg-[linear-gradient(180deg,rgba(255,255,255,.018),rgba(255,255,255,.004))] px-5 py-7 shadow-[0_42px_120px_rgba(0,0,0,.32)] sm:px-8 sm:py-9 lg:px-10 lg:py-10" aria-label="Project enquiry">
            <FormSection number="01" title="About you" intro="Enough to know who we are speaking with.">
              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="Name" required error={errors.name}><input id="name-field" name="name" required autoComplete="name" className={field} aria-invalid={Boolean(errors.name)} placeholder="Your name" /></Field>
                <Field label="Business name"><input name="business" autoComplete="organization" className={field} placeholder="Business or brand" /></Field>
                <Field label="Email" required error={errors.email}><input id="email-field" name="email" required type="email" autoComplete="email" className={field} aria-invalid={Boolean(errors.email)} placeholder="you@business.com" /></Field>
                <Field label="Telephone"><input name="phone" type="tel" autoComplete="tel" inputMode="tel" className={field} placeholder="Optional" /></Field>
              </div>
            </FormSection>

            <FormSection number="02" title="The project" intro="Where you are now and what you are preparing to change.">
              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="What do you need?"><select name="service" className={selectField}><option>Not sure yet</option>{services.map(service => <option key={service.slug}>{service.title}</option>)}</select></Field>
                <Field label="Budget readiness"><select name="budget" className={selectField}><option>Still defining the budget</option><option>Ready to fund the right scoped project</option><option>Need guidance on what is realistic</option></select></Field>
                <Field label="Preferred timeline" wide><select name="timeline" className={selectField}><option>Flexible</option><option>Within 30 days</option><option>1–3 months</option><option>3+ months</option></select></Field>
              </div>
            </FormSection>

            <FormSection number="03" title="What should change?" intro="This is the most useful part of the brief.">
              <Field label="Project details" required error={errors.details} wide><textarea id="details-field" name="details" required minLength={20} className={`${field} min-h-40 resize-y border border-white/10 bg-black/20 px-4 py-4 focus:border-[#c99a3c]/65`} aria-invalid={Boolean(errors.details)} placeholder="What are you launching or changing? Who needs to trust it? What feels weak, unclear or outdated today?" /><span className="mt-2 block text-xs leading-5 text-white/34">A few useful sentences are enough. No formal brief required.</span></Field>
            </FormSection>

            <div className="mt-9 border-t border-white/[.08] pt-7">
              <label className="flex items-start gap-3 text-sm leading-6 text-white/56"><input id="consent-field" name="consent" value="yes" required type="checkbox" className="mt-1 h-5 w-5 shrink-0 accent-[#c8a348]" />I agree that these details may be used to prepare or respond to my project enquiry.</label>
              {contact.privacyApproved ? <a href="/privacy" className="ml-8 mt-2 inline-flex text-sm text-[#f0d788] underline underline-offset-4">Read the privacy policy</a> : <p className="ml-8 mt-2 text-xs leading-5 text-white/34">Until the privacy policy is approved, this page does not transmit or store your form data.</p>}
              {errors.consent && <p className="mt-2 text-sm text-red-300">{errors.consent}</p>}

              <div className="mt-7 grid gap-3 sm:grid-cols-[1fr_auto] sm:items-center">
                <button className="luxury-cta inline-flex min-h-14 items-center justify-center px-7 text-[10px] font-bold uppercase tracking-[.18em] text-[#efcb73]" type="submit">{liveSubmission ? "Send Project Enquiry" : "Prepare Project Brief"}</button>
                <p className="max-w-xs text-xs leading-5 text-white/32">{liveSubmission ? "Opens in your email app for review before sending." : "Nothing is uploaded or stored. Your brief is copied for direct sending."}</p>
              </div>
              {status ? <p role="status" className="mt-5 border-l border-[#c8a348]/50 bg-[#c8a348]/[.035] px-4 py-3 text-sm leading-6 text-[#ead69a]">{status}</p> : null}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function FormSection({ number, title, intro, children }: { number: string; title: string; intro: string; children: React.ReactNode }) {
  return <section className="border-b border-white/[.08] pb-8 pt-2 first:pt-0 sm:pb-9"><div className="mb-7 grid gap-2 sm:grid-cols-[48px_1fr] sm:gap-4"><p className="text-[10px] font-bold tracking-[.2em] text-[#c99a3c]">{number}</p><div><h3 className="font-[family-name:var(--font-cormorant)] text-3xl leading-none text-[#f2eadf]">{title}</h3><p className="mt-2 text-sm leading-6 text-white/36">{intro}</p></div></div>{children}</section>;
}

function Field({ label, required, error, wide, children }: { label: string; required?: boolean; error?: string; wide?: boolean; children: React.ReactNode }) {
  return <label className={`min-w-0 ${wide ? "sm:col-span-2" : ""}`}><span className="text-[10px] font-bold uppercase tracking-[.13em] text-white/44">{label}{required && <span aria-hidden="true"> *</span>}</span>{children}{error && <span className="mt-2 block text-sm text-red-300">{error}</span>}</label>;
}
