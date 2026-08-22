"use client";

import { motion } from "motion/react";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#F7F3EE] px-6 pt-32 pb-20 text-center text-[#2B2528] transition-colors dark:bg-[#171416] dark:text-[#F7F3EE]"
    >
      {/* Luz rosa */}
      <div className="absolute top-[-12%] left-[-10%] h-[45%] w-[45%] rounded-full bg-[#B76E79]/15 blur-[120px]" />

      {/* Luz champagne */}
      <div className="absolute right-[-10%] bottom-[-10%] h-[45%] w-[45%] rounded-full bg-[#D8C3B5]/25 blur-[120px] dark:bg-[#B76E79]/10" />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-6 text-xs font-semibold tracking-[0.35em] text-[#B76E79]"
      >
        ÉLARA STUDIO
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="mb-8 max-w-5xl text-5xl font-semibold tracking-tight md:text-8xl"
      >
        Tu estilo.
        <br />

        <span className="bg-linear-to-r from-[#B76E79] via-[#A88A7D] to-[#7D5F66] bg-clip-text text-transparent dark:from-[#D9A7AE] dark:via-[#D8C3B5] dark:to-[#F0DDD5]">
          Tu momento.
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.3,
          duration: 1,
        }}
        className="mb-10 max-w-2xl text-lg leading-relaxed text-[#6E6266] md:text-xl dark:text-[#B9ADB1]"
      >
        Belleza, cuidado y detalle en una experiencia diseñada para ti.
        Descubre servicios personalizados en un espacio donde cada momento
        importa.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        className="flex flex-wrap justify-center gap-4"
      >
        <a
          href="#reservas"
          className="rounded-full bg-[#2B2528] px-8 py-4 font-medium text-white transition-all hover:scale-105 hover:bg-[#B76E79] active:scale-95 dark:bg-[#F7F3EE] dark:text-[#2B2528]"
        >
          Reservar hora
        </a>

        <a
          href="#servicios"
          className="rounded-full border border-[#D8C3B5] bg-white/30 px-8 py-4 font-medium transition-all hover:border-[#B76E79] hover:bg-[#EFE7E1] dark:border-[#5B4D52] dark:bg-transparent dark:hover:bg-[#241F22]"
        >
          Ver servicios
        </a>
      </motion.div>
    </section>
  );
}