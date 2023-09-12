-- CreateTable
CREATE TABLE "Praticas" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(255) NOT NULL,
    "beneficios" TEXT,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Praticas_pkey" PRIMARY KEY ("id")
);
