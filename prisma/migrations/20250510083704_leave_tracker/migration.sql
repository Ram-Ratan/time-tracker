/*
  Warnings:

  - You are about to drop the column `uid` on the `Leave` table. All the data in the column will be lost.
  - You are about to drop the column `uid` on the `UserCategoryLinkUp` table. All the data in the column will be lost.
  - You are about to drop the column `uid` on the `UserLeaves` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `Leave` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId]` on the table `UserCategoryLinkUp` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId]` on the table `UserLeaves` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `Leave` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `UserCategoryLinkUp` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `UserLeaves` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Leave_uid_key";

-- DropIndex
DROP INDEX "UserCategoryLinkUp_uid_key";

-- DropIndex
DROP INDEX "UserLeaves_uid_key";

-- AlterTable
ALTER TABLE "Leave" DROP COLUMN "uid",
ADD COLUMN     "userId" UUID NOT NULL;

-- AlterTable
ALTER TABLE "UserCategory" ADD COLUMN     "optionalHolidays" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "UserCategoryLinkUp" DROP COLUMN "uid",
ADD COLUMN     "userId" UUID NOT NULL;

-- AlterTable
ALTER TABLE "UserLeaves" DROP COLUMN "uid",
ADD COLUMN     "userId" UUID NOT NULL;

-- CreateTable
CREATE TABLE "UserHoliday" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "userId" UUID NOT NULL,
    "holidayId" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserHoliday_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "UserHoliday_userId_idx" ON "UserHoliday"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Leave_userId_key" ON "Leave"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "UserCategoryLinkUp_userId_key" ON "UserCategoryLinkUp"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "UserLeaves_userId_key" ON "UserLeaves"("userId");

-- AddForeignKey
ALTER TABLE "UserHoliday" ADD CONSTRAINT "UserHoliday_holidayId_fkey" FOREIGN KEY ("holidayId") REFERENCES "Holiday"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
