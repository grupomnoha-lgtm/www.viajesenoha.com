import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Viajes Enoha | Turismo en Guinea Ecuatorial",
    template: "%s | Viajes Enoha",
  },
  description: "Descubre Guinea Ecuatorial con Viajes Enoha. Expertos en turismo en Malabo, Bata, Isla de Bioko y Annobón. Reservas de viajes, safaris y aventuras africanas.",
  keywords: ["viajar a Guinea Ecuatorial", "turismo Guinea Ecuatorial", "Malabo", "Bata", "Isla de Bioko", "playas de Corisco", "Viajes Enoha", "mejores viajes África"],
  authors: [{ name: "Viajes Enoha" }],
  openGraph: {
    title: "Viajes Enoha - El Corazón de África",
    description: "La mejor agencia para explorar Guinea Ecuatorial. Naturaleza fresca, cultura vibrante y playas vírgenes.",
    url: "https://viajesenoha.com",
    siteName: "Viajes Enoha",
    images: [
      {
        url: "/amanecer.jpeg",
        width: 1200,
        height: 630,
        alt: "Viajes Enoha Turismo Guinea Ecuatorial",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Viajes Enoha | Viajar a Guinea Ecuatorial",
    description: "Tu guía perfecta para descubrir los secretos de Guinea Ecuatorial.",
    images: ["/amanecer.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
