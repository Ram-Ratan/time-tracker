-- AlterTable
ALTER TABLE "NlqSqlMapping" ADD COLUMN     "cases" JSONB NOT NULL DEFAULT '{}';

-- AlterTable
ALTER TABLE "NqlFunctionMapping" ADD COLUMN     "cases" JSONB NOT NULL DEFAULT '{}';
