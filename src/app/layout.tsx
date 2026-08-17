import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hombres de Valor",
  description:
    'Cronograma de devocionales de la serie "Las Parábolas" — orden semanal y quién presenta cada día.',
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
