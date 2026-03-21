import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VitalCare — Clínica Médica",
  description:
    "Amor por você, paixão pela saúde. Agende sua consulta na VitalCare e conte com especialistas comprometidos com o seu bem-estar.",
  keywords: ["clínica médica", "especialistas", "saúde", "VitalCare", "consulta médica"],
  openGraph: {
    title: "VitalCare — Clínica Médica",
    description: "Amor por você, paixão pela saúde.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
