"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";

export default function Navbar() {
  return (
    <header className="shadow sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          Fincart
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/cart" className="relative">
            <ShoppingCart color="black" />
          </Link>
        </div>
      </nav>
    </header>
  );
}
