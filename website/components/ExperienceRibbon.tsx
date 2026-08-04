"use client";

import { motion } from "framer-motion";

const items = [
  "Brand strategy",
  "Identity systems",
  "Cinematic brand reveals",
  "Premium websites",
];

export default function ExperienceRibbon() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-6 sm:px-8 lg:px-12">
      <div className="overflow-hidden rounded-full border border-white/10 bg-[#0c0c0c]/90">
        <motion.div
          className="flex items-center gap-8 whitespace-nowrap px-6 py-4 text-sm uppercase tracking-[0.3em] text-[#F6E7A3]"
          animate={{ x: [0, -1200] }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        >
          {items.concat(items).map((item, index) => (
            <span key={`${item}-${index}`} className="opacity-90">
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
