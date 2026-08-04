const faqs = [
  {
    question: "What types of brands do you work with?",
    answer:
      "We work with owner-led, new and growing businesses that care about trust, presentation and a coherent brand presence.",
  },
  {
    question: "How long does a typical engagement take?",
    answer:
      "Timing depends on scope, feedback and launch requirements. A realistic schedule is agreed after discovery rather than promised before the project is understood.",
  },
  {
    question: "Do you offer ongoing support?",
    answer:
      "Ongoing support can be scoped where it is useful. Availability and deliverables are confirmed in the project proposal.",
  },
];

export default function FAQ() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-8 sm:py-24 lg:px-12">
      <div className="mb-12 max-w-3xl">
        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#C8A348]">
          FAQ
        </p>
        <h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-white sm:text-5xl">
          Useful answers before starting a project.
        </h2>
      </div>

      <div className="space-y-4">
        {faqs.map((faq) => (
          <details key={faq.question} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <summary className="cursor-pointer list-none text-lg font-semibold text-white">
              {faq.question}
            </summary>
            <p className="mt-4 text-sm leading-7 text-gray-300">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
