import type { Metadata } from "next";
import "./globals.css";

// Configuration des métadonnées pour le SEO et l'onglet du navigateur
export const metadata: Metadata = {
  title: "CV de Paul Gyselinck | Candidature Référent Numérique & IA",
  description:
    "CV en ligne de Paul Gyselinck pour la mission de référent départemental numérique et IA au sein du SRANE.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // On spécifie que la langue de la page est le français
    <html lang="fr">
      <body className="bg-gray-100">{children}</body>
    </html>
  );
}
