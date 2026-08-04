"use client";

import { motion } from "framer-motion";

interface RevealSectionProps {
  children: React.ReactNode;
  className?: string;
}

export default function RevealSection({ children, className = "" }: RevealSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
