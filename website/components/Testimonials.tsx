const testimonials = [
  {
    quote:
      "Prime Presence gave our brand the sense of authority we had been missing. Every detail felt intentional and elevated.",
    name: "Elena Ruiz",
    role: "Founder, Aurelia House",
  },
  {
    quote:
      "The launch experience was seamless, cinematic and incredibly strategic. Our audience responded instantly.",
    name: "Marcus Vale",
    role: "Creative Director, Orison Studio",
  },
  {
    quote:
      "The final identity felt timeless. It elevated our business from visible to unforgettable.",
    name: "Sophia Leclair",
    role: "Managing Partner, Cinder & Oak",
  },
];

export default function Testimonials() {
  return (
    <section className="border-y border-white/10 bg-[#080808] px-4 py-20 sm:px-8 sm:py-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#C8A348]">
            Testimonials
          </p>
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-white sm:text-5xl">
            Trusted by founders shaping the next era of their industry.
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <blockquote key={item.name} className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <p className="mb-6 text-sm leading-8 text-gray-300">“{item.quote}”</p>
              <footer>
                <p className="font-semibold text-white">{item.name}</p>
                <p className="text-sm text-[#C8A348]">{item.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
