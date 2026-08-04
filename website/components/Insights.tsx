import Link from "next/link";
import SectionHeading from "./ui/SectionHeading";

const posts = [
  {
    title: "Creating a Luxury Brand Experience That Converts",
    description: "How premium positioning, thoughtful storytelling and precise UX can lift enquiries and loyalty.",
    href: "/insights",
  },
  {
    title: "What a High-Performance Discovery Process Looks Like",
    description: "A framework for better qualification, faster decisions and stronger client outcomes.",
    href: "/ai",
  },
  {
    title: "Why Modern Brands Need an AI-Enabled Operating Layer",
    description: "The strategic value of automation, analytics and intelligent support across the client lifecycle.",
    href: "/portal",
  },
];

export default function Insights() {
  return (
    <section className="border-y border-white/10 bg-[#070707] px-4 py-20 sm:px-8 sm:py-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Insights"
          title="Strategy, systems and creative direction for the next era of brand growth."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="rounded-[1.5rem] border border-white/10 bg-[#0d0d0d] p-8">
              <h3 className="mb-4 font-[family-name:var(--font-cormorant)] text-2xl text-white">{post.title}</h3>
              <p className="mb-6 text-sm leading-7 text-gray-300">{post.description}</p>
              <Link href={post.href} className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C8A348] hover:text-[#F6E7A3]">
                Read more →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
