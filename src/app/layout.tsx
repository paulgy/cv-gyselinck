import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CV de Paul Gyselinck",
  description:
    "Curriculum Vitae de Paul Gyselinck - Enseignant et passionné du numérique.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.className} bg-gray-200`}>{children}</body>
    </html>
  );
}
