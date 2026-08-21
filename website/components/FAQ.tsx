const faqs = [
  {
    question: "Who is Prime Presence Atelier best suited to?",
    answer: "The strongest early fit is an owner-led or growing business that needs to look established quickly, has a clear decision-maker and can provide timely feedback and the core information required to publish accurately.",
  },
  {
    question: "Do you use AI to create the work?",
    answer: "AI can accelerate research, options, production support and QA, but it does not approve the work. Scope, brand direction, claims, pricing, publication and final visual quality remain human-reviewed.",
  },
  {
    question: "Do projects require a deposit?",
    answer: "Yes. Work begins after the scope and intake are complete and the agreed commencement deposit has been received. External costs such as domains, premium assets, printing or specialist suppliers are funded by the client upfront when required.",
  },
  {
    question: "Can you build a full e-commerce platform or enterprise app?",
    answer: "Not as part of the launch offer. Prime Presence Atelier currently focuses on digital business cards, landing pages, portfolios, branded mini-sites and focused small-business websites. Larger platforms are only considered when the required capability and specialist support are properly scoped.",
  },
  {
    question: "Do you offer ongoing support?",
    answer: "Selective updates and maintenance can be scoped after the initial delivery when capacity, response times and the exact support boundary are clear.",
  },
];

export default function FAQ() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-8 sm:py-24 lg:px-12">
      <div className="mb-12 max-w-3xl">
        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#C8A348]">FAQ</p>
        <h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-white sm:text-5xl">Know how the engagement works before you start.</h2>
      </div>
      <div className="space-y-4">
        {faqs.map((faq) => (
          <details key={faq.question} className="group rounded-2xl border border-white/10 bg-white/5 p-6 open:border-[#C8A348]/25">
            <summary className="cursor-pointer list-none pr-6 text-lg font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C8A348]">
              {faq.question}
            </summary>
            <p className="mt-4 max-w-4xl text-sm leading-7 text-gray-300">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
