import { NextResponse } from "next/server";
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

    // Más adelante aquí guardaremos en la base de datos.
    console.log("Nueva reserva validada:", reservation);

    return NextResponse.json(
      {
        success: true,
        message: "Reserva recibida correctamente.",
      },
      { status: 201 },
    );
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "No fue posible procesar la reserva.",
      },
      { status: 500 },
    );
  }
}