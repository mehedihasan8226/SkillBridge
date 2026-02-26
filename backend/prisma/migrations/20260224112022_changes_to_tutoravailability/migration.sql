-- AlterTable
ALTER TABLE "TutorAvailability" ADD COLUMN     "currentStudents" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "maxStudents" INTEGER NOT NULL DEFAULT 5;
