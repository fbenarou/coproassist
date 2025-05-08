/*
  Warnings:

  - Added the required column `coproprieteId` to the `Coproprietaire` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Coproprietaire" ADD COLUMN     "coproprieteId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Copropriete" ADD COLUMN     "adresse" TEXT,
ADD COLUMN     "codePostal" TEXT,
ADD COLUMN     "ville" TEXT;

-- AddForeignKey
ALTER TABLE "Coproprietaire" ADD CONSTRAINT "Coproprietaire_coproprieteId_fkey" FOREIGN KEY ("coproprieteId") REFERENCES "Copropriete"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
