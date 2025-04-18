"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useCartStore } from "@/store/cartStore";

export default function Navbar() {
  const totalItems = useCartStore((state) => state.getTotalItems());

  return (
    <header className="shadow sticky top-0 z-50 bg-white">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          Fincart
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/cart" className="relative">
            <ShoppingCart color="black" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-green-700 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </nav>
    </header>
  );
}
