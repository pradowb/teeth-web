import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
  weight: "variable",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const siteUrl = "https://www.auriaodontologia.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Auria Odontologia | Odontologia Avançada e Estética em São Paulo",
    template: "%s | Auria Odontologia",
  },
  description:
    "Clínica odontológica premium especializada em odontologia estética, implantes e ortodontia digital. Atendimento humanizado, tecnologia de ponta e sorrisos que inspiram confiança.",
  keywords: [
    "clínica odontológica",
    "dentista São Paulo",
    "odontologia estética",
    "implante dentário",
    "clareamento dental",
    "ortodontia invisível",
  ],
  openGraph: {
    title: "Auria Odontologia | Odontologia Avançada e Estética",
    description:
      "Tecnologia de ponta, cuidado humanizado e resultados que transformam sorrisos. Agende sua avaliação.",
    url: siteUrl,
    siteName: "Auria Odontologia",
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${fraunces.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
