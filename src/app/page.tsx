import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function HomePage() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/dashboard");
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center space-y-6">
      <h1 className="text-4xl font-bold">Bienvenue sur CoproAssist 🏢</h1>
      <p className="text-lg text-gray-600">
        Simplifiez la gestion de votre copropriété avec notre application
        dédiée.
      </p>
      <div className="space-x-4">
        <a
          href="/auth/register"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
        >
          S'inscrire
        </a>
        <a
          href="/auth/login"
          className="inline-block border border-blue-600 text-blue-600 px-6 py-3 rounded hover:bg-blue-50"
        >
          Se connecter
        </a>
      </div>
    </div>
  );
}
