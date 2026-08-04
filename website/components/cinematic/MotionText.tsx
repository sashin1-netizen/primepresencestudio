"use client";
import { motion, useReducedMotion } from "framer-motion";
export default function MotionText({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  return <motion.div initial={reduced ? false : { opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .35 }} transition={{ duration: .75, ease: [.22, 1, .36, 1] }} className={className}>{children}</motion.div>;
}
