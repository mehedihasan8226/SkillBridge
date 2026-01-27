-- CreateEnum
CREATE TYPE "UserStatus" AS ENUM ('ban', 'unban');

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "status" "UserStatus" NOT NULL DEFAULT 'unban';
