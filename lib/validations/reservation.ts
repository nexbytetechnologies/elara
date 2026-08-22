import { z } from "zod";

export const reservationSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(80),

  email: z
    .string()
    .trim()
    .email("Ingresa un correo válido"),

  phone: z
    .string()
    .trim()
    .min(8, "Ingresa un teléfono válido")
    .max(20),

  service: z
    .string()
    .min(1, "Selecciona un servicio"),

  professional: z
    .string()
    .min(1, "Selecciona un profesional"),

  date: z
    .string()
    .min(1, "Selecciona una fecha"),

  time: z
    .string()
    .min(1, "Selecciona un horario"),
});

export type ReservationInput = z.infer<typeof reservationSchema>;