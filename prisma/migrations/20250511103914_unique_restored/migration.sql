/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `UserLeaves` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "UserLeaves_userId_key" ON "UserLeaves"("userId");
