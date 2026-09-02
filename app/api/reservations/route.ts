import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { reservationSchema } from "@/lib/validations/reservation";

function isPastReservation(date: string, time: string) {
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat("en-CA", {
      timeZone: "America/Santiago",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hourCycle: "h23",
    })
      .formatToParts(new Date())
      .map(({ type, value }) => [type, value]),
  );

  const today = `${parts.year}-${parts.month}-${parts.day}`;
  const currentMinutes = Number(parts.hour) * 60 + Number(parts.minute);

  if (date < today) return true;
  if (date > today) return false;

  const [hours, minutes] = time.split(":").map(Number);
  const reservationMinutes = hours * 60 + minutes;

  return reservationMinutes <= currentMinutes;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const result = reservationSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Los datos de la reserva no son válidos.",
          errors: result.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    const reservation = result.data;

    if (isPastReservation(reservation.date, reservation.time)) {
  return NextResponse.json(
    {
      success: false,
      message: "No puedes reservar una fecha u hora que ya pasó.",
    },
    { status: 400 },
  );
}

    const bookingKey = `${reservation.professional}|${reservation.date}|${reservation.time}`;

    const createdReservation = await prisma.reservation.create({
      data: {
        bookingKey,
        name: reservation.name,
        email: reservation.email,
        phone: reservation.phone,
        service: reservation.service,
        professional: reservation.professional,
        date: new Date(`${reservation.date}T00:00:00.000Z`),
        time: reservation.time,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Reserva creada correctamente.",
        reservation: {
          id: createdReservation.id,
          status: createdReservation.status,
        },
      },
      { status: 201 },
    );
  } catch (error) {
    if (
      typeof error === "object" &&
      error !== null &&
      "code" in error &&
      error.code === "P2002"
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Ese horario ya no está disponible. Selecciona otro.",
        },
        { status: 409 },
      );
    }

    console.error("Error al crear reserva:", error);

    return NextResponse.json(
      {
        success: false,
        message: "No fue posible procesar la reserva.",
      },
      { status: 500 },
    );
  }
}
