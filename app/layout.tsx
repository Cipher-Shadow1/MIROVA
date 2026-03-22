import type { Metadata } from "next";
import {
  Noto_Serif,
  Manrope,
  Cormorant_Garamond,
  DM_Sans,
} from "next/font/google";
import "./globals.css";
import Footer from "../components/footer";
import Nav from "../components/nav";
import SmoothScrollProvider from "../components/SmoothScrollProvider";

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "MIROVA ATELIER | The Digital Atelier",
  description:
    "Curated furniture and objects for the modern atelier. Crafting silence into form since 2018.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${notoSerif.variable} ${manrope.variable} ${cormorantGaramond.variable} ${dmSans.variable} h-full antialiased light`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-surface text-on-surface selection:bg-secondary/20">
        <SmoothScrollProvider>
          <Nav />
          {children}
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
