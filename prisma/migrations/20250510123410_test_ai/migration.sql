/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Holiday` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `UserCategory` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "NlqSqlMapping" (
    "id" SERIAL NOT NULL,
    "nlq" TEXT NOT NULL,
    "sql" TEXT NOT NULL,
    "embedding" BYTEA,

    CONSTRAINT "NlqSqlMapping_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Holiday_name_key" ON "Holiday"("name");

-- CreateIndex
CREATE UNIQUE INDEX "UserCategory_name_key" ON "UserCategory"("name");
