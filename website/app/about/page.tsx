import Link from "next/link";
import PageShell from "@/components/PageShell";
import ProofSection from "@/components/ProofSection";

export const metadata = {
  title: "About",
  description: "Prime Presence Atelier is a founder-led creative atelier in Durban helping small businesses build trust through brand identity, digital presence and disciplined creative production.",
  alternates: { canonical: "/about" },
};

export default function Page() {
  return (
    <PageShell
      eyebrow="About"
      title="Premium is a standard of care."
      intro="Prime Presence Atelier is a founder-led creative studio built for smaller businesses that want the polish of a considered brand experience without the distance and overhead of a traditional agency structure."
    >
      <div className="grid gap-10 md:grid-cols-2">
        <h2 className="section-title">Human taste in front. AI-enabled efficiency behind it.</h2>
        <div className="space-y-5 leading-8 text-gray-300">
          <p>
            The atelier combines brand thinking, visual identity, focused digital experiences and launch creative under one promise: help the business make a first impression that feels credible, memorable and consistent.
          </p>
          <p>
            AI supports research, options, production and QA, but it does not replace accountability. Scope, direction, claims, pricing, publication and final visual quality remain human-approved.
          </p>
          <p>
            The model is deliberately founder-led and remote-first from Durban, with controlled scope, direct communication and reusable systems behind the scenes so the visible result can stay custom.
          </p>
          <Link href="/process" className="link-arrow inline-flex">See how the work moves <span aria-hidden="true">→</span></Link>
        </div>
      </div>

      <div className="mt-16 grid gap-px overflow-hidden rounded-[var(--radius-md)] bg-white/10 md:grid-cols-3">
        {[
          ["Precision", "Correct names, links, dimensions, exports and scope before something is called finished."],
          ["Originality", "Reusable systems stay behind the scenes; the visible result is deliberately adapted to the business."],
          ["Integrity", "No invented clients, outcomes, awards or capabilities. Proof must be real and publication must be approved."],
        ].map(([title, body]) => (
          <article key={title} className="bg-[#080808] p-7">
            <h2 className="text-xl">{title}</h2>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{body}</p>
          </article>
        ))}
      </div>
      <ProofSection />
    </PageShell>
  );
}
