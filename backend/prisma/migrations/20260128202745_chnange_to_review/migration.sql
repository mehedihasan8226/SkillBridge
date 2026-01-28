/*
  Warnings:

  - A unique constraint covering the columns `[bookingId,studentId]` on the table `Review` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Review_bookingId_studentId_key" ON "Review"("bookingId", "studentId");
