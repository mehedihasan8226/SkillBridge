/*
  Warnings:

  - A unique constraint covering the columns `[bookingId,userId]` on the table `Review` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `Review` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_studentId_fkey";

-- DropIndex
DROP INDEX "Review_bookingId_studentId_key";

-- AlterTable
ALTER TABLE "Review" ADD COLUMN     "userId" TEXT NOT NULL,
ALTER COLUMN "studentId" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Review_bookingId_userId_key" ON "Review"("bookingId", "userId");

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE SET NULL ON UPDATE CASCADE;
