export const site = {
  name: "Prime Presence",
  tagline: "Designed to Be Remembered.",
  description:
    "A South African branding and digital experience studio creating memorable identities, brand reveals and premium websites.",
  email: "hello@primepresence@gmail.com",
  phoneDisplay: "+27 71 154 7161",
  phoneInternational: "27711547161",
  hours: "Monday–Friday, 09:00–17:00 SAST",
} as const;

export const services = [
  { slug: "brand-strategy", title: "Brand Strategy", summary: "Clarify the position, audience and message your identity needs to express.", deliverables: "Positioning, audience direction, messaging and creative brief." },
  { slug: "logo-design", title: "Logo Design", summary: "Build a distinctive mark with the craft and flexibility to work everywhere.", deliverables: "Primary logo, responsive variations, colourways and export suite." },
  { slug: "brand-identity", title: "Brand Identity", summary: "Create a coherent visual language that makes every touchpoint feel intentional.", deliverables: "Logo system, colour, typography, art direction and brand guidelines." },
  { slug: "brand-reveal", title: "Brand Reveal", summary: "Introduce a new identity through a considered, cinematic launch moment.", deliverables: "Reveal concept, motion direction and launch-ready video assets." },
  { slug: "social-assets", title: "Social Brand Assets", summary: "Give your team a consistent system for showing up confidently online.", deliverables: "Platform templates, profile assets and launch graphics." },
  { slug: "websites", title: "Premium Websites", summary: "Turn your positioning into a fast, accessible digital experience built to earn trust.", deliverables: "Strategy, UX, responsive design, development and launch support." },
  { slug: "cinematic-web", title: "Cinematic Web Experiences", summary: "Use purposeful motion and media to make a high-value launch or story memorable.", deliverables: "Motion direction, interactive storytelling and lightweight fallbacks." },
] as const;

export const whatsappUrl = (message: string) =>
  `https://wa.me/${site.phoneInternational}?text=${encodeURIComponent(message)}`;
