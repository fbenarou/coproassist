const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash("admin123", 10);

  const copro = await prisma.copropriete.create({
    data: {
      nom: "Résidence Les Lilas",
      adresse: "12 rue des Lilas",
      ville: "Paris",
      codePostal: "75020",
    },
  });

  const lot = await prisma.lot.create({
    data: {
      numero: "A101",
      surface: 60.5,
      coproprieteId: copro.id,
    },
  });

  const coproprietaire = await prisma.coproprietaire.create({
    data: {
      nom: "Jean Martin",
      email: "jean@example.com",
      telephone: "0600000000",
      coproprieteId: copro.id,
    },
  });

  await prisma.appartenance.create({
    data: {
      lotId: lot.id,
      coproprietaireId: coproprietaire.id,
      pourcentage: 100,
    },
  });

  await prisma.user.create({
    data: {
      email: "admin@coproassist.fr",
      password: hashedPassword,
      name: "Admin CoproAssist",
      role: "ADMIN",
    },
  });

  console.log("✅ Données de test insérées avec succès");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
