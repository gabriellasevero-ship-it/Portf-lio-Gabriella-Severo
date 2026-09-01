import { Cormorant_Garamond, Figtree } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Gabriella Marques Severo — Design Lead",
  description:
    "Portfólio de Gabriella Marques Severo, Design Lead na Natura &Co. Product Design, liderança de UX e experiências digitais para finanças, beleza e marcas de escala.",
  openGraph: {
    title: "Gabriella Marques Severo — Design Lead",
    description:
      "Product Designer e Design Lead com mais de 15 anos criando experiências digitais centradas em pessoas e negócios.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${figtree.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
