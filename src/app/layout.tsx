import type { Metadata } from "next";
import { Cinzel } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-cinzel",
});

export const metadata: Metadata = {
  title: "Hombres de Valor",
  description:
    'Cronograma de devocionales de la serie "Las Parábolas" — orden semanal y quién presenta cada día.',
};

const THEME_INIT_SCRIPT = `
try {
  if (localStorage.getItem('hdv-theme') === 'dark') {
    document.documentElement.dataset.theme = 'dark';
  }
} catch (e) {}
`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`h-full antialiased ${cinzel.variable}`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        {children}
      </body>
    </html>
  );
}
