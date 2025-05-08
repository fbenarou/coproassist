import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import Navbar from "@/app/components/Navbar";
import Providers from "./components/Providers";

export const metadata = {
  title: "CoproAssist",
  description: "Gestion simplifiée de votre copropriété",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 min-h-screen`}
      >
        <Providers>
          <Navbar />
          <main className="p-4">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
