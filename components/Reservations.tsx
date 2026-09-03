"use client";

import { useState, type FormEvent } from "react";

const services = [
  "Corte & Styling",
  "Coloración",
  "Tratamientos",
  "Manicure",
  "Maquillaje",
  "Cejas & Mirada",
];

const professionals = ["Sofía", "Valentina", "Camila"];

const times = ["09:00", "10:30", "12:00", "14:30", "16:00", "17:30"];

type FieldErrors = Partial<
  Record<
    "name" | "email" | "phone" | "service" | "professional" | "date" | "time",
    string[]
  >
>;

type ApiResponse = {
  success: boolean;
  message: string;
  errors?: FieldErrors;
};

export default function Reservations() {
  const [selectedTime, setSelectedTime] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  const [selectedProfessional, setSelectedProfessional] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [occupiedTimes, setOccupiedTimes] = useState<string[]>([]);
  const [isLoadingTimes, setIsLoadingTimes] = useState(false);
  const [availabilityError, setAvailabilityError] = useState("");

  function getToday() {
    const now = new Date();

    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }

  async function loadAvailability(professional: string, date: string) {
    setSelectedTime("");
    setAvailabilityError("");

    if (!professional || !date) {
      setOccupiedTimes([]);
      return;
    }

    setIsLoadingTimes(true);

    try {
      const params = new URLSearchParams({
        professional,
        date,
      });

      const response = await fetch(
        `/api/reservations/availability?${params.toString()}`,
      );

      if (!response.ok) {
        throw new Error();
      }

      const data: { occupiedTimes: string[] } = await response.json();

      setOccupiedTimes(data.occupiedTimes);
    } catch {
      setOccupiedTimes(times);
      setAvailabilityError(
        "No pudimos consultar los horarios. Intenta nuevamente.",
      );
    } finally {
      setIsLoadingTimes(false);
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;

    setSuccessMessage("");
    setErrorMessage("");
    setFieldErrors({});

    if (!selectedTime) {
      setFieldErrors({
        time: ["Selecciona un horario"],
      });

      return;
    }

    const formData = new FormData(form);

    const reservation = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      service: String(formData.get("service") ?? ""),
      professional: String(formData.get("professional") ?? ""),
      date: String(formData.get("date") ?? ""),
      time: selectedTime,
    };

    try {
      setIsSubmitting(true);

      const response = await fetch("/api/reservations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reservation),
      });

      const data: ApiResponse = await response.json();

      if (!response.ok) {
        setErrorMessage(data.message);
        setFieldErrors(data.errors ?? {});
        return;
      }

      setSuccessMessage(data.message);

      setTimeout(() => {
        setSuccessMessage("");
      }, 4000);

      form.reset();
      setSelectedTime("");
    } catch {
      setErrorMessage(
        "Ocurrió un problema al conectar con el servidor. Intenta nuevamente.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      id="reservas"
      className="bg-[#F7F3EE] px-6 py-24 text-[#2B2528] transition-colors dark:bg-[#171416] dark:text-[#F7F3EE]"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-2">
          {/* Información */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B76E79]">
              Reserva tu momento
            </p>

            <h2 className="mt-5 max-w-xl text-4xl font-semibold tracking-tight md:text-5xl">
              Tu próxima experiencia
              <span className="block text-[#B76E79]">comienza aquí.</span>
            </h2>

            <p className="mt-6 max-w-lg leading-7 text-[#6E6266] dark:text-[#B9ADB1]">
              Selecciona tu servicio, profesional y horario. Estamos
              construyendo una experiencia de reserva simple y personalizada.
            </p>

            <div className="mt-10 space-y-4 text-sm text-[#6E6266] dark:text-[#B9ADB1]">
              <p>✓ Confirmación de reserva</p>
              <p>✓ Horarios disponibles en tiempo real</p>
              <p>✓ Gestión de profesionales</p>
              <p>✓ Historial de reservas</p>
            </div>
          </div>

          {/* Formulario */}
          <div className="rounded-3xl border border-[#DDD0C8]/80 bg-white/50 p-7 shadow-xl shadow-[#B76E79]/5 backdrop-blur-xl dark:border-[#3B3236] dark:bg-[#211C1F]/70 md:p-9">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nombre */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium"
                >
                  Nombre
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  minLength={2}
                  maxLength={80}
                  autoComplete="name"
                  placeholder="Tu nombre"
                  className="w-full rounded-2xl border border-[#D8C3B5] bg-[#F7F3EE] px-4 py-3 outline-none transition focus:border-[#B76E79] dark:border-[#4A3E43] dark:bg-[#171416]"
                />

                {fieldErrors.name?.[0] && (
                  <p className="mt-2 text-xs text-[#B76E79]">
                    {fieldErrors.name[0]}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium"
                >
                  Correo electrónico
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="correo@ejemplo.cl"
                  className="w-full rounded-2xl border border-[#D8C3B5] bg-[#F7F3EE] px-4 py-3 outline-none transition focus:border-[#B76E79] dark:border-[#4A3E43] dark:bg-[#171416]"
                />

                {fieldErrors.email?.[0] && (
                  <p className="mt-2 text-xs text-[#B76E79]">
                    {fieldErrors.email[0]}
                  </p>
                )}
              </div>

              {/* Teléfono */}
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-medium"
                >
                  Teléfono
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  placeholder="+56 9 1234 5678"
                  className="w-full rounded-2xl border border-[#D8C3B5] bg-[#F7F3EE] px-4 py-3 outline-none transition focus:border-[#B76E79] dark:border-[#4A3E43] dark:bg-[#171416]"
                />

                {fieldErrors.phone?.[0] && (
                  <p className="mt-2 text-xs text-[#B76E79]">
                    {fieldErrors.phone[0]}
                  </p>
                )}
              </div>

              {/* Servicio */}
              <div>
                <label
                  htmlFor="service"
                  className="mb-2 block text-sm font-medium"
                >
                  Servicio
                </label>

                <select
                  id="service"
                  name="service"
                  required
                  defaultValue=""
                  className="w-full rounded-2xl border border-[#D8C3B5] bg-[#F7F3EE] px-4 py-3 outline-none transition focus:border-[#B76E79] dark:border-[#4A3E43] dark:bg-[#171416]"
                >
                  <option value="" disabled>
                    Selecciona un servicio
                  </option>

                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>

                {fieldErrors.service?.[0] && (
                  <p className="mt-2 text-xs text-[#B76E79]">
                    {fieldErrors.service[0]}
                  </p>
                )}
              </div>

              {/* Profesional */}
              <div>
                <label
                  htmlFor="professional"
                  className="mb-2 block text-sm font-medium"
                >
                  Profesional
                </label>

                <select
                  id="professional"
                  name="professional"
                  defaultValue=""
                  required
                  onChange={(event) => {
                    const professional = event.target.value;

                    setSelectedProfessional(professional);
                    void loadAvailability(professional, selectedDate);
                  }}
                  className="w-full rounded-2xl border border-[#D8C3B5] bg-[#F7F3EE] px-4 py-3 outline-none transition focus:border-[#B76E79] dark:border-[#4A3E43] dark:bg-[#171416]"
                >
                  <option value="" disabled>
                    Selecciona una profesional
                  </option>
                  {professionals.map((professional) => (
                    <option key={professional} value={professional}>
                      {professional}
                    </option>
                  ))}
                </select>
              </div>

              {/* Fecha */}
              <div>
                <label
                  htmlFor="date"
                  className="mb-2 block text-sm font-medium"
                >
                  Fecha
                </label>

                <input
                  id="date"
                  name="date"
                  type="date"
                  min={getToday()}
                  required
                  onChange={(event) => {
                    const date = event.target.value;

                    setSelectedDate(date);
                    void loadAvailability(selectedProfessional, date);
                  }}
                  className="w-full rounded-2xl border border-[#D8C3B5] bg-[#F7F3EE] px-4 py-3 outline-none transition focus:border-[#B76E79] dark:border-[#4A3E43] dark:bg-[#171416]"
                />

                {fieldErrors.date?.[0] && (
                  <p className="mt-2 text-xs text-[#B76E79]">
                    {fieldErrors.date[0]}
                  </p>
                )}
              </div>

              {/* Horario */}
              <div>
                <p className="mb-3 text-sm font-medium">Horario</p>

                {isLoadingTimes && (
                  <p className="mb-3 text-sm text-[#6E6266] dark:text-[#B9ADB1]">
                    Consultando horarios disponibles...
                  </p>
                )}

                {availabilityError && (
                  <p className="mb-3 text-sm text-[#B76E79]">
                    {availabilityError}
                  </p>
                )}
                {!isLoadingTimes &&
                  !availabilityError &&
                  selectedProfessional &&
                  selectedDate &&
                  times.filter((time) => {
                    if (occupiedTimes.includes(time)) return false;

                    if (selectedDate !== getToday()) return true;

                    const [hours, minutes] = time.split(":").map(Number);

                    const now = new Date();
                    const slotTime = new Date();
                    slotTime.setHours(hours, minutes, 0, 0);

                    return slotTime > now;
                  }).length === 0 && (
                    <p className="mb-3 text-sm text-[#B76E79]">
                      No quedan horarios disponibles para esta fecha.
                    </p>
                  )}
                <div className="grid grid-cols-3 gap-3">
                  {times
                    .filter((time) => {
                      if (occupiedTimes.includes(time)) {
                        return false;
                      }

                      if (selectedDate !== getToday()) {
                        return true;
                      }

                      const [hours, minutes] = time.split(":").map(Number);

                      const now = new Date();
                      const slotTime = new Date();

                      slotTime.setHours(hours, minutes, 0, 0);

                      return slotTime > now;
                    })
                    .map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => {
                          setSelectedTime(time);

                          setFieldErrors((current) => ({
                            ...current,
                            time: undefined,
                          }));
                        }}
                        className={`rounded-xl border px-3 py-2 text-sm transition ${
                          selectedTime === time
                            ? "border-[#B76E79] bg-[#B76E79] text-white"
                            : "border-[#D8C3B5] hover:border-[#B76E79] dark:border-[#4A3E43]"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                </div>

                {fieldErrors.time?.[0] && (
                  <p className="mt-2 text-xs text-[#B76E79]">
                    {fieldErrors.time[0]}
                  </p>
                )}
              </div>

              {/* Mensajes */}
              {successMessage && (
                <div className="rounded-2xl border border-green-700/20 bg-green-700/10 px-4 py-3 text-sm">
                  ✓ {successMessage}
                </div>
              )}

              {errorMessage && (
                <div className="rounded-2xl border border-[#B76E79]/30 bg-[#B76E79]/10 px-4 py-3 text-sm text-[#8F4F59] dark:text-[#E3ADB5]">
                  {errorMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-full bg-[#2B2528] px-6 py-4 font-medium text-white transition hover:bg-[#B76E79] disabled:cursor-not-allowed disabled:opacity-60 dark:bg-[#F7F3EE] dark:text-[#2B2528] dark:hover:bg-[#D8C3B5]"
              >
                {isSubmitting ? "Procesando reserva..." : "Confirmar reserva"}
              </button>

              <p className="text-center text-xs text-[#8C7B80]">
                Demo en desarrollo — los datos aún no se almacenan en una base
                de datos.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
