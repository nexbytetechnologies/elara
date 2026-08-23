import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { reservationSchema } from "@/lib/validations/reservation";

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

    const createdReservation = await prisma.reservation.create({
      data: {
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


export async function GET() {
  const reservations = await prisma.reservation.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return NextResponse.json(reservations);
}