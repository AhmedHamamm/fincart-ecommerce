"use client";

import { useCartStore } from "@/store/cartStore";
import Link from "next/link";
import { MoveRight, Trash2 } from "lucide-react";
import CartItem from "@/components/cart/CartItem";

export default function Cart() {
  const { items, getTotalPrice, clearCart } = useCartStore();

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
        <p className="text-gray-600 mb-6">Your cart is currently empty.</p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-white bg-green-700 hover:bg-green-800 px-6 py-3 rounded-lg transition-colors group font-medium"
        >
          Continue Shopping
          <MoveRight className="transform group-hover:translate-x-1 transition-transform duration-200" />
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Your Cart</h1>
        <button
          onClick={clearCart}
          className="flex items-center gap-2 px-4 py-2 text-red-500 cursor-pointer hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          aria-label="Delete all items"
        >
          <Trash2 size={20} />
          Delete All
        </button>
      </div>
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="divide-y">
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <div className="mt-6 pt-6 border-t space-y-4">
            <div className="flex justify-between items-center text-lg font-semibold">
              <span>Total</span>
              <span>${getTotalPrice().toFixed(2)}</span>
            </div>
            <button className="w-full bg-green-700 text-white py-3.5 rounded-lg cursor-pointer hover:bg-green-800 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:outline-none transition-all duration-200 font-medium text-lg shadow-sm hover:shadow">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
