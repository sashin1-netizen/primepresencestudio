import SectionHeading from "./ui/SectionHeading";
import InfoCard from "./ui/InfoCard";

const sectors = [
  {
    title: "Luxury & Lifestyle",
    description: "Editorial brand systems for premium founders, hospitality brands and elevated retail experiences.",
    eyebrow: "Positioning",
  },
  {
    title: "Fashion & Beauty",
    description: "High-touch identities and launch campaigns designed to feel runway-ready and conversion-led.",
    eyebrow: "Launches",
  },
  {
    title: "Technology & Services",
    description: "Refined positioning, narratives and interfaces for modern companies with bold growth ambitions.",
    eyebrow: "Growth",
  },
];

export default function Industries() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-8 sm:py-24 lg:px-12">
      <SectionHeading
        eyebrow="Industries"
        title="Built for brands that need distinction, speed and strategic clarity."
        description="We tailor every engagement to your sector, stage and ambition so the experience feels elevated and effective."
      />
      <div className="grid gap-6 lg:grid-cols-3">
        {sectors.map((sector) => (
          <InfoCard key={sector.title} {...sector} />
        ))}
      </div>
    </section>
  );
}
