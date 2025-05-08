-- CreateTable
CREATE TABLE "Copropriete" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,

    CONSTRAINT "Copropriete_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Lot" (
    "id" SERIAL NOT NULL,
    "numero" TEXT NOT NULL,
    "surface" DOUBLE PRECISION,
    "coproprieteId" INTEGER NOT NULL,

    CONSTRAINT "Lot_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Coproprietaire" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "email" TEXT,
    "telephone" TEXT,

    CONSTRAINT "Coproprietaire_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Appartenance" (
    "id" SERIAL NOT NULL,
    "lotId" INTEGER NOT NULL,
    "coproprietaireId" INTEGER NOT NULL,
    "pourcentage" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Appartenance_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Appartenance_lotId_coproprietaireId_key" ON "Appartenance"("lotId", "coproprietaireId");

-- AddForeignKey
ALTER TABLE "Lot" ADD CONSTRAINT "Lot_coproprieteId_fkey" FOREIGN KEY ("coproprieteId") REFERENCES "Copropriete"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appartenance" ADD CONSTRAINT "Appartenance_lotId_fkey" FOREIGN KEY ("lotId") REFERENCES "Lot"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appartenance" ADD CONSTRAINT "Appartenance_coproprietaireId_fkey" FOREIGN KEY ("coproprietaireId") REFERENCES "Coproprietaire"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
