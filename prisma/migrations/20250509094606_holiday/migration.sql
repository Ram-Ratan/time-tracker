/*
  Warnings:

  - You are about to drop the column `userId` on the `Manager` table. All the data in the column will be lost.
  - Added the required column `categoryId` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `managerIIId` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `managerIId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "HolidayType" AS ENUM ('OPTIONAL', 'MANDATORY');

-- CreateEnum
CREATE TYPE "LeaveType" AS ENUM ('SICK', 'VACATION', 'PARENTAL', 'MATERNITY');

-- CreateEnum
CREATE TYPE "LeaveStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED');

-- DropForeignKey
ALTER TABLE "Manager" DROP CONSTRAINT "Manager_userId_fkey";

-- AlterTable
ALTER TABLE "Manager" DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "categoryId" UUID NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "managerIIId" UUID NOT NULL,
ADD COLUMN     "managerIId" UUID NOT NULL;

-- CreateTable
CREATE TABLE "UserCategory" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Holiday" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "type" "HolidayType" NOT NULL DEFAULT 'MANDATORY',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Holiday_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Leave" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "type" "LeaveType" NOT NULL,
    "startDate" TEXT NOT NULL,
    "endDate" TEXT NOT NULL,
    "status" "LeaveStatus" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Leave_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_UserCategoryHoliday" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_UserCategoryHoliday_AB_unique" ON "_UserCategoryHoliday"("A", "B");

-- CreateIndex
CREATE INDEX "_UserCategoryHoliday_B_index" ON "_UserCategoryHoliday"("B");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "UserCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_managerIId_fkey" FOREIGN KEY ("managerIId") REFERENCES "Manager"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_managerIIId_fkey" FOREIGN KEY ("managerIIId") REFERENCES "Manager"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserCategoryHoliday" ADD CONSTRAINT "_UserCategoryHoliday_A_fkey" FOREIGN KEY ("A") REFERENCES "Holiday"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserCategoryHoliday" ADD CONSTRAINT "_UserCategoryHoliday_B_fkey" FOREIGN KEY ("B") REFERENCES "UserCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;
