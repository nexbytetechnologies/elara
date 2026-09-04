import ReservationForm from "@/components/ReservationForm";

export default function Reservations() {
  return (
    <section
      id="reservas"
      className="bg-[#F7F3EE] px-6 py-24 text-[#2B2528] transition-colors dark:bg-[#171416] dark:text-[#F7F3EE]"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-2">
          {/* Información */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#98505D] dark:text-[#CC8490]">
              Reserva tu momento
            </p>

            <h2 className="mt-5 max-w-xl text-4xl font-semibold tracking-tight md:text-5xl">
              Tu próxima experiencia
              <span className="block text-[#98505D] dark:text-[#CC8490]">
                comienza aquí.
              </span>
            </h2>

            <p className="mt-6 max-w-lg leading-7 text-[#6E6266] dark:text-[#B9ADB1]">
              Selecciona tu servicio, profesional y horario. Disfruta una
              experiencia de reserva simple y personalizada.
            </p>

            <div className="mt-10 space-y-4 text-sm text-[#6E6266] dark:text-[#B9ADB1]">
              <p>✓ Confirmación de reserva</p>
              <p>✓ Horarios disponibles en tiempo real</p>
              <p>✓ Bloqueo automático de horarios ocupados</p>
              <p>✓ Validación de fechas y horarios</p>
            </div>
          </div>

          <ReservationForm />
        </div>
      </div>
    </section>
  );
}