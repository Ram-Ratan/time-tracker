-- CreateTable
CREATE TABLE "testDb" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT NOT NULL,

    CONSTRAINT "testDb_pkey" PRIMARY KEY ("id")
);
