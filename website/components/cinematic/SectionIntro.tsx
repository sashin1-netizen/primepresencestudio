export default function SectionIntro({ eyebrow, title, body, align = "left" }: { eyebrow: string; title: string; body?: string; align?: "left" | "center" }) {
  return <header className={`max-w-4xl ${align === "center" ? "mx-auto text-center" : ""}`}><p className="eyebrow">{eyebrow}</p><h2 className="section-title mt-5 text-balance">{title}</h2>{body && <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">{body}</p>}</header>;
}
