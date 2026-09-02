import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const professional = searchParams.get("professional");
  const date = searchParams.get("date");

  if (!professional || !date) {
    return NextResponse.json(
      { message: "Profesional y fecha son obligatorios." },
      { status: 400 },
    );
  }

  const reservations = await prisma.reservation.findMany({
    where: {
      professional,
      date: new Date(`${date}T00:00:00.000Z`),
      bookingKey: {
        not: null,
      },
    },
    select: {
      time: true,
    },
  });

  return NextResponse.json({
    occupiedTimes: reservations.map((reservation) => reservation.time),
  });
}