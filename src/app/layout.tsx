import "./globals.css";
import "./app.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Estúdio Capim - Design e Comunicação - Desde 2018",
  description:
    "Estúdio Capim, contemporâneo, sofisticado e brasileiro. Um espaço criativo e de estratégia que utiliza da lente do design para aproximar comunicação",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
