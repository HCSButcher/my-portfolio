"use client";
import { motion, type Variants } from "framer-motion";

const variants: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

type SectionProps = {
  id: string;
  children: React.ReactNode;
};

export default function Section({ id, children }: SectionProps) {
  return (
    <motion.section
      id={id}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="
       relative
        min-h-[calc(100vh-96px)]
        xl:py-20
        py-10
        scroll-mt-[96px]

      "
    >
      {children}
    </motion.section>
  );
}
