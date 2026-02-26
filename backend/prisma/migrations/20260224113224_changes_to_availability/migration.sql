/*
  Warnings:

  - You are about to drop the column `currentStudents` on the `TutorAvailability` table. All the data in the column will be lost.
  - You are about to drop the column `maxStudents` on the `TutorAvailability` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "TutorAvailability" DROP COLUMN "currentStudents",
DROP COLUMN "maxStudents";
