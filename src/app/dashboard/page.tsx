import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Spinner from "../components/Spinner";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/auth/login");
  }

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 border rounded-xl shadow text-center">
      <h1 className="text-2xl font-bold mb-6">
        Bienvenue dans votre espace CoproAssist !
      </h1>

      {!session.user ? (
        <Spinner />
      ) : (
        <div className="space-y-4">
          <p>
            <strong>Nom :</strong> {session.user?.name || "Utilisateur inconnu"}
          </p>
          <p>
            <strong>Email :</strong> {session.user?.email}
          </p>
        </div>
      )}
    </div>
  );
}
