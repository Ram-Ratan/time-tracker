-- CreateTable
CREATE TABLE "RequestAdjustment" (
    "id" TEXT NOT NULL,
    "timeEntryId" TEXT NOT NULL,
    "updateLoginTime" TIMESTAMP(3),
    "updateLogoutTime" TIMESTAMP(3),
    "reason" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RequestAdjustment_pkey" PRIMARY KEY ("id")
);
