/*
  Warnings:

  - You are about to drop the column `endTime` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `sessionDate` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `startTime` on the `Booking` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[tutorAvailabilityId]` on the table `Booking` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `tutorAvailabilityId` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Booking` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Booking" DROP CONSTRAINT "Booking_studentId_fkey";

-- AlterTable
ALTER TABLE "Booking" DROP COLUMN "endTime",
DROP COLUMN "sessionDate",
DROP COLUMN "startTime",
ADD COLUMN     "tutorAvailabilityId" TEXT NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL,
ALTER COLUMN "studentId" DROP NOT NULL;

-- CreateTable
CREATE TABLE "TutorAvailability" (
    "id" TEXT NOT NULL,
    "tutorId" TEXT NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3) NOT NULL,
    "isBooked" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "TutorAvailability_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Booking_tutorAvailabilityId_key" ON "Booking"("tutorAvailabilityId");

-- AddForeignKey
ALTER TABLE "TutorAvailability" ADD CONSTRAINT "TutorAvailability_tutorId_fkey" FOREIGN KEY ("tutorId") REFERENCES "TutorProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_tutorAvailabilityId_fkey" FOREIGN KEY ("tutorAvailabilityId") REFERENCES "TutorAvailability"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE SET NULL ON UPDATE CASCADE;
