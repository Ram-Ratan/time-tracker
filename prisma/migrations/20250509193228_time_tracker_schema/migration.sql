/*
  Warnings:

  - You are about to drop the `Manager` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `testDb` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[uid]` on the table `Leave` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `uid` to the `Leave` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `startDate` on the `Leave` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `endDate` on the `Leave` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "organisationType" AS ENUM ('GOOD', 'EVIL');

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_managerIIId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_managerIId_fkey";

-- AlterTable
ALTER TABLE "Leave" ADD COLUMN     "message" TEXT,
ADD COLUMN     "uid" TEXT NOT NULL,
DROP COLUMN "startDate",
ADD COLUMN     "startDate" TIMESTAMP(3) NOT NULL,
DROP COLUMN "endDate",
ADD COLUMN     "endDate" TIMESTAMP(3) NOT NULL;

-- DropTable
DROP TABLE "Manager";

-- DropTable
DROP TABLE "User";

-- DropTable
DROP TABLE "testDb";

-- CreateTable
CREATE TABLE "organisation" (
    "orgId" TEXT NOT NULL,
    "type" "organisationType" NOT NULL DEFAULT 'GOOD'
);

-- CreateTable
CREATE TABLE "UserCategoryLinkUp" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "uid" TEXT NOT NULL,
    "categoryId" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserCategoryLinkUp_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserLeaves" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "uid" TEXT NOT NULL,
    "sickLeaves" DECIMAL(5,2) NOT NULL,
    "vacationLeaves" DECIMAL(5,2) NOT NULL,
    "parentalLeaves" DECIMAL(5,2) NOT NULL,
    "maternityLeaves" DECIMAL(5,2) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserLeaves_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LeavePolicy" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "categoryId" UUID NOT NULL,
    "sickLeaves" DECIMAL(5,2) NOT NULL,
    "vacationLeaves" DECIMAL(5,2) NOT NULL,
    "parentalLeaves" DECIMAL(5,2) NOT NULL,
    "maternityLeaves" DECIMAL(5,2) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LeavePolicy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserSchedule" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "workingDay" TEXT NOT NULL,
    "startTime" TEXT NOT NULL,
    "endTime" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserSchedule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TimeEntry" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "loginTime" TIMESTAMP(3),
    "logoutTime" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TimeEntry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Break" (
    "id" TEXT NOT NULL,
    "timeEntryId" TEXT NOT NULL,
    "breakStart" TIMESTAMP(3) NOT NULL,
    "breakEnd" TIMESTAMP(3),

    CONSTRAINT "Break_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "organisation_orgId_key" ON "organisation"("orgId");

-- CreateIndex
CREATE UNIQUE INDEX "UserCategoryLinkUp_uid_key" ON "UserCategoryLinkUp"("uid");

-- CreateIndex
CREATE INDEX "UserCategoryLinkUp_categoryId_idx" ON "UserCategoryLinkUp"("categoryId");

-- CreateIndex
CREATE UNIQUE INDEX "UserLeaves_uid_key" ON "UserLeaves"("uid");

-- CreateIndex
CREATE UNIQUE INDEX "LeavePolicy_categoryId_key" ON "LeavePolicy"("categoryId");

-- CreateIndex
CREATE INDEX "LeavePolicy_categoryId_idx" ON "LeavePolicy"("categoryId");

-- CreateIndex
CREATE UNIQUE INDEX "UserSchedule_userId_workingDay_key" ON "UserSchedule"("userId", "workingDay");

-- CreateIndex
CREATE UNIQUE INDEX "TimeEntry_userId_date_key" ON "TimeEntry"("userId", "date");

-- CreateIndex
CREATE UNIQUE INDEX "Leave_uid_key" ON "Leave"("uid");

-- AddForeignKey
ALTER TABLE "UserCategoryLinkUp" ADD CONSTRAINT "UserCategoryLinkUp_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "UserCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LeavePolicy" ADD CONSTRAINT "LeavePolicy_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "UserCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Break" ADD CONSTRAINT "Break_timeEntryId_fkey" FOREIGN KEY ("timeEntryId") REFERENCES "TimeEntry"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
