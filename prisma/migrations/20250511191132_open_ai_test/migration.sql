/*
  Warnings:

  - The primary key for the `NlqSqlMapping` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `embedding` on the `NlqSqlMapping` table. All the data in the column will be lost.
  - The `id` column on the `NlqSqlMapping` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "NlqSqlMapping" DROP CONSTRAINT "NlqSqlMapping_pkey",
DROP COLUMN "embedding",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL DEFAULT gen_random_uuid(),
ADD CONSTRAINT "NlqSqlMapping_pkey" PRIMARY KEY ("id");

-- CreateTable
CREATE TABLE "NqlFunctionMapping" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "nlq" TEXT NOT NULL,
    "function" TEXT NOT NULL,
    "input" JSONB NOT NULL,

    CONSTRAINT "NqlFunctionMapping_pkey" PRIMARY KEY ("id")
);
