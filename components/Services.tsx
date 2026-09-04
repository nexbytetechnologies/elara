const services = [
  {
    number: "01",
    title: "Corte & Styling",
    description:
      "Cortes personalizados, brushing y styling adaptados a tu estilo.",
    price: "Desde $24.990",
  },
  {
    number: "02",
    title: "Coloración",
    description:
      "Color, balayage y técnicas modernas con asesoría personalizada.",
    price: "Desde $44.990",
  },
  {
    number: "03",
    title: "Tratamientos",
    description:
      "Hidratación, reparación y cuidado profundo para recuperar tu cabello.",
    price: "Desde $29.990",
  },
  {
    number: "04",
    title: "Manicure",
    description:
      "Diseño y cuidado de uñas con terminaciones elegantes y duraderas.",
    price: "Desde $18.990",
  },
  {
    number: "05",
    title: "Maquillaje",
    description:
      "Maquillaje profesional para eventos, celebraciones y ocasiones especiales.",
    price: "Desde $34.990",
  },
  {
    number: "06",
    title: "Cejas & Mirada",
    description:
      "Diseño de cejas y tratamientos para realzar tu mirada de forma natural.",
    price: "Desde $16.990",
  },
];

export default function Services() {
  return (
    <section
      id="servicios"
      className="bg-[#EFE7E1] px-6 py-24 text-[#2B2528] transition-colors dark:bg-[#211C1F] dark:text-[#F7F3EE]"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B76E79]">
            Nuestros servicios
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
            Cuidado pensado
            <span className="block text-[#B76E79]">para cada detalle.</span>
          </h2>

          <p className="mt-6 max-w-xl leading-7 text-[#6E6266] dark:text-[#B9ADB1]">
            Cada servicio comienza con una asesoría personalizada para crear una
            experiencia que se adapte a ti.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.number}
              className="group relative overflow-hidden rounded-3xl border border-[#DDD0C8]/80 bg-[#F7F3EE]/70 p-7 shadow-sm backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#B76E79]/70 hover:shadow-2xl hover:shadow-[#B76E79]/15 dark:border-[#3B3236]/80 dark:bg-[#171416]/70"
            >
              {/* Resplandor suave */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#B76E79]/0 blur-3xl transition-all duration-500 group-hover:bg-[#B76E79]/15" />

              {/* Reflejo sutil */}
              <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-white/20 via-transparent to-[#D8C3B5]/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:from-white/5" />

              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-widest text-[#B76E79]">
                    {service.number}
                  </span>

                  <span className="rounded-full border border-[#D8C3B5]/60 bg-white/30 px-3 py-1 text-xs text-[#8C7B80] backdrop-blur-sm dark:border-[#5B4D52]/60 dark:bg-white/5 dark:text-[#B9ADB1]">
                    {service.price}
                  </span>
                </div>

                <h3 className="mt-8 text-xl font-semibold transition-transform duration-300 group-hover:translate-x-1">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#6E6266] dark:text-[#B9ADB1]">
                  {service.description}
                </p>

                <a
                  href="#reservas"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-[#98505D] dark:text-[#CC8490] transition-all duration-300 group-hover:gap-3"
                >
                  Reservar servicio
                  <span>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
