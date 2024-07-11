-- CreateEnum
CREATE TYPE "Status" AS ENUM ('OVERDUE', 'ON_TIME', 'PAID', 'CANCELLED');

-- CreateTable
CREATE TABLE "Client" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "cpfCnpj" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "contractNumber" TEXT NOT NULL,
    "contractDate" TIMESTAMP(3) NOT NULL,
    "contractValue" DOUBLE PRECISION NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'ON_TIME',

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Client_cpfCnpj_key" ON "Client"("cpfCnpj");
