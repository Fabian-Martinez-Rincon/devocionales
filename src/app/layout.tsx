import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        {children}
      </body>
    </html>
  );
}
