"use client";

import { motion } from "motion/react";

const features = [
  {
    title: "Rápido",
    description: "Optimizado para la web del futuro.",
  },
  {
    title: "Minimalista",
    description: "Menos ruido, más impacto visual.",
  },
  {
    title: "Responsivo",
    description: "Se adapta a cada pixel de tu pantalla.",
  },
];

export default function Features() {
  return (
    <section
      id="servicios"
      className="grid gap-12 bg-white p-12 md:grid-cols-3 md:px-24 dark:bg-[#0e0e0e]"
    >
      {features.map((feature, index) => (
        <motion.article
          key={feature.title}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: index * 0.1,
            duration: 0.8,
          }}
          className="group border-l border-zinc-200 py-4 pl-8 dark:border-zinc-800"
        >
          <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-zinc-400">
            0{index + 1}
          </span>

          <h2 className="mb-3 text-2xl font-semibold tracking-tight transition-transform group-hover:translate-x-2">
            {feature.title}
          </h2>

          <p className="font-light italic leading-relaxed text-zinc-500 dark:text-zinc-400">
            {feature.description}
          </p>
        </motion.article>
      ))}
    </section>
  );
}