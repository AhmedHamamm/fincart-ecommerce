import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export const metadata: Metadata = {
  title: "Fincart E-commerce",
  description:
    "Fincart is an e-commerce platform where you can purchase amazing products at great prices.",
};

const nunito = Nunito({ subsets: ["latin"], weight: ["400", "600", "700"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`min-h-screen ${nunito.className}`}>
        <Navbar />
        <main className="container mx-auto mb-12 px-4 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
