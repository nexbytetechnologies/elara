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
  metadataBase: new URL("https://elara-nexbyte.vercel.app"),

  title: "ÉLARA Studio | Tu estilo. Tu momento.",

  description:
    "Experiencia digital de reservas para servicios de belleza. Selecciona tu servicio, profesional, fecha y horario de forma simple y rápida.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "ÉLARA Studio | Tu estilo. Tu momento.",
    description:
      "Reserva servicios de belleza de forma simple, rápida y con disponibilidad en tiempo real.",
    url: "https://elara-nexbyte.vercel.app",
    siteName: "ÉLARA Studio",
    locale: "es_CL",
    type: "website",

    images: [
      {
        url: "/og-elara.webp",
        width: 1200,
        height: 630,
        alt: "ÉLARA Studio - Tu estilo. Tu momento.",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "ÉLARA Studio | Tu estilo. Tu momento.",
    description:
      "Reserva servicios de belleza de forma simple, rápida y con disponibilidad en tiempo real.",
    images: ["/og-elara.webp"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}