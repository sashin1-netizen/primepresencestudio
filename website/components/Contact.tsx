"use client";
import { useState } from "react";
import { services, site, whatsappUrl } from "@/content/site";

export default function Contact() {
  const [error, setError] = useState("");
  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); setError("");
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim(), email = String(form.get("email") || "").trim(), details = String(form.get("details") || "").trim();
    if (!name || !/^\S+@\S+\.\S+$/.test(email) || details.length < 20) { setError("Add your name, a valid email, and at least 20 characters about the project."); return; }
    const subject = encodeURIComponent(`Project enquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nBusiness: ${form.get("business")}\nEmail: ${email}\nService: ${form.get("service")}\nBudget: ${form.get("budget")}\nTimeline: ${form.get("timeline")}\n\nProject:\n${details}`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  }
  const field = "mt-2 w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-white focus:border-[#C8A348]";
  return <section id="contact" className="border-t border-white/10 bg-[#060606] px-4 py-20 sm:px-8 lg:px-12"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.75fr_1.25fr]"><div><p className="text-sm uppercase tracking-[.35em] text-[#C8A348]">Start a project</p><h2 className="mt-4 font-[family-name:var(--font-cormorant)] text-4xl sm:text-5xl">Tell us what needs to become memorable.</h2><p className="mt-5 leading-8 text-gray-300">Your answers open a prepared email in your own mail app. Nothing is silently submitted or stored.</p><a className="mt-6 inline-flex text-[#C8A348]" href={whatsappUrl("Hi Prime Presence, I'd like to discuss a project.")} target="_blank" rel="noreferrer">Prefer WhatsApp? {site.phoneDisplay} →</a></div>
  <form onSubmit={submit} noValidate className="grid gap-5 rounded-[2rem] border border-white/10 bg-[#0b0b0b] p-6 sm:grid-cols-2 sm:p-8">
    <label>Name *<input name="name" required autoComplete="name" className={field} aria-describedby="form-error" /></label><label>Business name<input name="business" autoComplete="organization" className={field} /></label><label>Email *<input name="email" required type="email" autoComplete="email" className={field} aria-describedby="form-error" /></label><label>Service<select name="service" className={field}>{services.map(s => <option key={s.slug}>{s.title}</option>)}</select></label><label>Approximate budget<select name="budget" className={field}><option>Not decided yet</option><option>R10,000–R25,000</option><option>R25,000–R50,000</option><option>R50,000+</option></select></label><label>Preferred timeline<select name="timeline" className={field}><option>Flexible</option><option>Within 1 month</option><option>1–3 months</option><option>3+ months</option></select></label><label className="sm:col-span-2">Project details *<textarea name="details" required minLength={20} className={`${field} min-h-36`} aria-describedby="form-error" /></label>
    {error && <p id="form-error" role="alert" className="sm:col-span-2 text-sm text-red-300">{error}</p>}<label className="flex items-start gap-3 text-sm text-gray-300 sm:col-span-2"><input required type="checkbox" className="mt-1 h-5 w-5" />I agree that Prime Presence may use these details to respond to my enquiry.</label><button className="rounded-full bg-[#C8A348] px-6 py-3 font-semibold text-black sm:col-span-2" type="submit">Prepare enquiry email</button>
  </form></div></section>;
}
