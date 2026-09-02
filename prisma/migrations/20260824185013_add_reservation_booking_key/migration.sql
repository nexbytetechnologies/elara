/*
  Warnings:

  - A unique constraint covering the columns `[bookingKey]` on the table `Reservation` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Reservation" ADD COLUMN     "bookingKey" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Reservation_bookingKey_key" ON "Reservation"("bookingKey");
