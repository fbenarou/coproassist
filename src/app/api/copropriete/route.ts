import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  const body = await request.json();

  try {
    const copro = await prisma.copropriete.create({
      data: {
        nom: body.nom,
      },
    });

    return NextResponse.json(copro);
  } catch (error) {
    console.error("Erreur POST /api/copropriete :", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
