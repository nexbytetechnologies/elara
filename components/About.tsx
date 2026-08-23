import { Heart, Sparkles, Users } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Atención personalizada",
    text: "Cada experiencia se adapta a tus necesidades y preferencias.",
  },
  {
    icon: Users,
    title: "Profesionales especializados",
    text: "Un equipo comprometido con brindar una atención de calidad.",
  },
  {
    icon: Sparkles,
    title: "Una experiencia diferente",
    text: "Un espacio pensado para que te desconectes y disfrutes tu momento.",
  },
];

export default function About() {
  return (
    <section
      id="nosotros"
      className="relative overflow-hidden bg-[#F7F3EE] px-6 py-28 text-[#2B2528] transition-colors dark:bg-[#171416] dark:text-[#F7F3EE]"
    >
      {/* Decoración */}
      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#B76E79]/10 blur-[120px]" />
      <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-[#B76E79]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Texto principal */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B76E79]">
              Sobre Elara
            </span>

            <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-5xl">
              Más que un servicio,
              <span className="block text-[#B76E79]">
                una experiencia para ti.
              </span>
            </h2>

            <p className="mt-7 max-w-xl text-lg leading-relaxed text-[#6E6266] dark:text-[#B9ADB1]">
              En Elara creemos que cada visita debe sentirse especial.
              Combinamos atención personalizada, profesionales especializados y
              un ambiente diseñado para que disfrutes cada momento.
            </p>
          </div>

          {/* Valores */}
          <div className="space-y-5">
            {values.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="group rounded-2xl border border-[#DDD0C8]/80 bg-white/50 p-6 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-[#B76E79] hover:shadow-lg hover:shadow-[#B76E79]/10 dark:border-[#3B3236] dark:bg-[#211C1F]/70"
              >
                <div className="flex gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#EFE7E1] text-[#B76E79] dark:bg-[#241F22]">
                    <Icon size={21} />
                  </div>

                  <div>
                    <h3 className="font-semibold">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#6E6266] dark:text-[#B9ADB1]">
                      {text}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
