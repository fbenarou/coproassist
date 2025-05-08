"use client";

import { useState } from "react";

export default function NouvelleCopropriete() {
  const [nom, setNom] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    const res = await fetch("/api/copropriete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nom }),
    });

    if (res.ok) {
      const data = await res.json();
      setMessage(
        `✅ Copropriété "${data.nom}" créée avec succès (ID: ${data.id})`
      );
      setNom("");
    } else {
      const err = await res.json();
      setMessage(`❌ Erreur : ${err.error}`);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-xl shadow">
      <h1 className="text-2xl font-bold mb-4">Nouvelle Copropriété</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Nom de la copropriété"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Créer
        </button>
        {message && <p className="mt-4">{message}</p>}
      </form>
    </div>
  );
}
