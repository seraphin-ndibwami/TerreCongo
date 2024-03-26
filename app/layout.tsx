import type { Metadata } from "next";
import "./globals.css";
import { Montserrat_Alternates } from "./font";

export const metadata: Metadata = {
  title: "Blockchain Foncier Goma",
  description: `Nous mettons en place un registre distribué basée sur la blockchain pour
  l'enregistrements de titres et transactions fonciers`,
};

export default function RootLayout({
  children, 
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${Montserrat_Alternates.className} w-screen`}>{children}</body>
    </html>
  );
}
