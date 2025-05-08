#!/bin/bash

echo "📦 CoproAssist - Vérification stack technique"

# Étape 1 : Vérification .env.local
echo ""
echo "📁 Vérification du fichier .env.local..."
if [ -f .env.local ]; then
  grep DATABASE_URL .env.local
  grep NEXTAUTH_SECRET .env.local
else
  echo "⚠️  Fichier .env.local introuvable"
fi

# Étape 2 : Vérification de la connexion à la base de données
echo ""
echo "🟢 Test de connexion à la base de données avec Prisma..."
pnpm dlx prisma db pull && echo "✅ Connexion DB OK" || echo "❌ Erreur de connexion à la DB"

# Étape 3 : Génération du client Prisma
echo ""
echo "⚙️ Regénération de Prisma Client..."
pnpm prisma generate

# Étape 4 : Lancement de Prisma Studio
echo ""
echo "📊 Lancement de Prisma Studio (Ctrl+C pour quitter)..."
pnpm prisma studio
