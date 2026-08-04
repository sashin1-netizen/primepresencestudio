interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({ eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "text-left";

  return (
    <div className={`mb-10 max-w-3xl ${alignment}`}>
      <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#C8A348]">{eyebrow}</p>
      <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? <p className="mt-5 text-lg leading-8 text-gray-300">{description}</p> : null}
    </div>
  );
}
