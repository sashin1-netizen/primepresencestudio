import PageShell from "@/components/PageShell";

const steps = [
  ["Qualification", "Confirm the business need, decision-maker, timing, budget readiness and whether the project fits the atelier."],
  ["Intake", "Collect the goals, audience, exact public information, assets, licences, deadline and the person who can approve the work."],
  ["Scope & deposit", "Document inclusions, exclusions, price, revision allowance, timeline and payment before production starts."],
  ["Direction", "Define the message, visual territory and success criteria the work must satisfy before expanding into full production."],
  ["Production", "Build the agreed identity, Connect profile, launch assets or website with version control and bounded AI-assisted support."],
  ["Internal QA", "Check spelling, links, dimensions, responsiveness, accessibility basics, claims, licences and publication state before client review."],
  ["Controlled review", "Send the agreed preview, collect feedback in one channel and apply only the included revision rounds."],
  ["Approval & handover", "Record final approval, collect the outstanding balance and deliver organised files, links, guidance and the support boundary."],
] as const;

export const metadata = {
  title: "Process",
  description: "The Prime Presence Atelier client journey from qualification and scope through production, QA, approval and handover.",
  alternates: { canonical: "/process" },
};

export default function Page() {
  return (
    <PageShell
      eyebrow="Process"
      title="A premium experience is controlled from the first conversation."
      intro="The workflow is designed to protect clarity, quality and momentum. AI can assist with research, options, production and checks; final judgement and client-facing approval remain human."
    >
      <ol className="grid gap-px overflow-hidden rounded-[var(--radius-md)] bg-white/10 md:grid-cols-2">
        {steps.map(([title, text], index) => (
          <li key={title} className="bg-[#080808] p-8 sm:p-9">
            <span className="text-xs tracking-[.3em] text-[#C8A348]">0{index + 1}</span>
            <h2 className="mt-5 font-[family-name:var(--font-cormorant)] text-3xl">{title}</h2>
            <p className="mt-3 leading-7 text-gray-300">{text}</p>
          </li>
        ))}
      </ol>

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {[
          ["One approval path", "Feedback stays consolidated so conflicting directions do not quietly enter the work."],
          ["Versioned production", "Important drafts, decisions and final exports are kept identifiable rather than overwritten blindly."],
          ["Manual fallback", "Critical delivery should still be recoverable when a tool, model or automation is unavailable."],
        ].map(([title, body]) => (
          <article key={title} className="surface p-7">
            <h2 className="text-xl">{title}</h2>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{body}</p>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
