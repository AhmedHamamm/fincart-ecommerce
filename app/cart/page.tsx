"use client";

import { useCartStore } from "@/store/cartStore";
import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2, MoveRight } from "lucide-react";
import { memo } from "react";
import type { Product } from "@/types";

interface CartItemType extends Product {
  quantity: number;
}

const CartItem = memo(({ item }: { item: CartItemType }) => {
  const { updateQuantity, removeItem } = useCartStore();

  return (
    <div className="flex items-center gap-4 py-4 border-b">
      <Image
        src={item.images[0]}
        alt={item.title}
        width={100}
        height={100}
        className="object-cover rounded"
      />
      <div className="flex-1">
        <h3 className="font-semibold">{item.title}</h3>
        <p className="text-gray-600">${item.price}</p>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={() =>
            updateQuantity(item.id, Math.max(0, item.quantity - 1))
          }
          className="p-1 hover:bg-gray-100 rounded"
          aria-label="Decrease quantity"
        >
          <Minus size={16} />
        </button>
        <span className="w-8 text-center">{item.quantity}</span>
        <button
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
          className="p-1 hover:bg-gray-100 rounded"
          aria-label="Increase quantity"
        >
          <Plus size={16} />
        </button>
        <button
          onClick={() => removeItem(item.id)}
          className="p-1 hover:bg-gray-100 rounded text-red-500 ml-2"
          aria-label="Remove item"
        >
          <Trash2 size={16} />
        </button>
      </div>
    </div>
  );
});

CartItem.displayName = "CartItem";

export default function Cart() {
  const { items, getTotalPrice } = useCartStore();

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
        <p className="text-gray-600">Your cart is currently empty.</p>
        <Link
          href="/"
          className="mt-4 flex items-center gap-2 text-primary hover:text-primary/80 transition-colors group"
        >
          Continue Shopping
          <MoveRight className="transform group-hover:translate-x-1 transition-transform duration-200" />
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">Your Cart</h1>
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow p-6">
          {items.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <div className="mt-6 pt-6 border-t">
            <div className="flex justify-between items-center text-lg font-semibold">
              <span>Total</span>
              <span>${getTotalPrice().toFixed(2)}</span>
            </div>
            <button className="w-full mt-4 bg-primary text-white py-3 rounded-lg hover:bg-primary/90 transition">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
