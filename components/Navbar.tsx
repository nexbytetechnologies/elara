"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, Moon, Sun, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Recupera el tema guardado al cargar.
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    const shouldUseDark =
      savedTheme === "dark" || (!savedTheme && prefersDark);

    document.documentElement.classList.toggle("dark", shouldUseDark);
  }, []);

  function toggleTheme() {
    const isDark = document.documentElement.classList.toggle("dark");

    localStorage.setItem("theme", isDark ? "dark" : "light");
  }

  return (
    <>
      <header className="fixed top-0 z-50 flex w-full items-center justify-between border-b border-[#DED3CB] bg-[#F7F3EE]/85 px-8 py-4 backdrop-blur-md dark:border-white/10 dark:bg-[#171416]/85">
        <a className="text-lg font-semibold tracking-[0.18em] text-[#2B2528] dark:text-[#F7F3EE]">
          ÉLARA STUDIO
        </a>

        {/* Navegación escritorio */}
        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#inicio"
            className="text-sm font-medium transition hover:opacity-60"
          >
            Inicio
          </a>

          <a
            href="#servicios"
            className="text-sm font-medium transition hover:opacity-60"
          >
            Servicios
          </a>

          <a
            href="#nosotros"
            className="text-sm font-medium transition hover:opacity-60"
          >
            Nosotros
          </a>

          <a
            href="#reservas"
            className="text-sm font-medium transition hover:opacity-60"
          >
            Reservas
          </a>

          <a
            href="#contacto"
            className="text-sm font-medium transition hover:opacity-60"
          >
            Contacto
          </a>

          {/* Modo claro / oscuro */}
          <button
            type="button"
            onClick={toggleTheme}
            className="relative flex h-7 w-14 cursor-pointer items-center rounded-full bg-gray-200 p-1 shadow-inner transition-colors dark:bg-zinc-800"
            aria-label="Cambiar entre modo claro y oscuro"
          >
            <motion.span
              className="flex h-5 w-5 translate-x-0 items-center justify-center rounded-full bg-white shadow-md transition-transform duration-300 dark:translate-x-7 dark:bg-zinc-400"
            >
              <Sun
                size={12}
                className="text-yellow-500 dark:hidden"
              />

              <Moon
                size={12}
                className="hidden text-zinc-900 dark:block"
              />
            </motion.span>
          </button>
        </nav>

        {/* Botón móvil */}
        <button
          type="button"
          className="md:hidden"
          onClick={() => setMenuOpen((current) => !current)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Menú móvil */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed inset-0 z-40 flex flex-col gap-8 bg-white p-8 pt-32 text-4xl font-bold dark:bg-black md:hidden"
          >
            <a href="#inicio" onClick={() => setMenuOpen(false)}>
              Inicio
            </a>

            <a href="#servicios" onClick={() => setMenuOpen(false)}>
              Servicios
            </a>

            <a href="#contacto" onClick={() => setMenuOpen(false)}>
              Contacto
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}