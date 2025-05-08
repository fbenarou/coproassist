"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="flex items-center justify-between p-4 bg-gray-100 border-b">
      <div className="text-xl font-bold">
        <Link href="/">CoproAssist</Link>
      </div>

      <div className="flex items-center space-x-4">
        {session ? (
          <>
            <span className="text-gray-700">
              Bienvenue, <strong>{session.user?.name || "Utilisateur"}</strong>
            </span>
            <Link href="/dashboard" className="hover:underline">
              Dashboard
            </Link>
            <button
              onClick={() => signOut({ callbackUrl: "/auth/login" })}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
            >
              Déconnexion
            </button>
          </>
        ) : (
          <>
            <Link href="/auth/login" className="hover:underline">
              Connexion
            </Link>
            <Link href="/auth/register" className="hover:underline">
              Inscription
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
