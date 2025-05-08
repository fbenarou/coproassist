"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const res = await signIn("credentials", {
      email: form.email,
      password: form.password,
      redirect: false,
    });

    if (res?.error) setError("❌ Identifiants incorrects");
    else router.push("/dashboard");
  };

  const handleOAuth = async (provider: "google" | "facebook") => {
    await signIn(provider, { callbackUrl: "/dashboard" });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-xl shadow">
      <h1 className="text-2xl font-bold mb-4">Connexion</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Mot de passe"
          value={form.password}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
        >
          Se connecter
        </button>
        {error && <p className="text-sm text-red-600">{error}</p>}
      </form>

      <div className="mt-6 border-t pt-4 space-y-2">
        <button
          onClick={() => handleOAuth("google")}
          className="w-full bg-white border text-gray-800 px-4 py-2 rounded hover:bg-gray-50"
        >
          Se connecter avec Google
        </button>
        <button
          onClick={() => handleOAuth("facebook")}
          className="w-full bg-[#1877f2] text-white px-4 py-2 rounded hover:bg-[#145ecb]"
        >
          Se connecter avec Facebook
        </button>
      </div>
    </div>
  );
}
