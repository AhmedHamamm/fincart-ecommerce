import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";

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
      <body className={` ${nunito.className}`}>
        <main className="container mx-auto px-4 py-8">{children}</main>
      </body>
    </html>
  );
}
