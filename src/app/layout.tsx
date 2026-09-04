import { Outfit, Syne } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Portfólio Gabriella Severo",
    template: "%s | Portfólio Gabriella Severo",
  },
  description:
    "Portfólio de Gabriella Marques Severo, Design Lead na Natura &Co. Product Design, liderança de UX e experiências digitais para finanças, beleza e marcas de escala.",
  openGraph: {
    title: "Portfólio Gabriella Severo",
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
      // Lets Next.js jump straight to the top on route changes while the
      // in-page anchor nav keeps its smooth scroll.
      data-scroll-behavior="smooth"
      className={`${outfit.variable} ${syne.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
