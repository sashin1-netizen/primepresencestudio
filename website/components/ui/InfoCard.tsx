interface InfoCardProps {
  title: string;
  description: string;
  eyebrow?: string;
}

export default function InfoCard({ title, description, eyebrow }: InfoCardProps) {
  return (
    <article className="rounded-[1.5rem] border border-white/10 bg-[#0d0d0d] p-8 shadow-[0_0_40px_rgba(200,163,72,0.04)]">
      {eyebrow ? <p className="mb-3 text-sm uppercase tracking-[0.25em] text-[#C8A348]">{eyebrow}</p> : null}
      <h3 className="mb-4 font-[family-name:var(--font-cormorant)] text-2xl text-white">{title}</h3>
      <p className="text-sm leading-7 text-gray-300">{description}</p>
    </article>
  );
}
