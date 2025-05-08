import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const coproprietes = await prisma.copropriete.findMany({
      include: {
        lots: {
          include: {
            appartenances: {
              include: {
                coproprietaire: true,
              },
            },
          },
        },
      },
    });

    return NextResponse.json(coproprietes);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
