"use client";

import Image from "next/image";
import { Minus, Plus, Trash2 } from "lucide-react";
import { memo } from "react";
import type { Product } from "@/types";
import { useCartStore } from "@/store/cartStore";

interface CartItemType extends Product {
  quantity: number;
}

const CartItem = memo(({ item }: { item: CartItemType }) => {
  const { updateQuantity, removeItem } = useCartStore();

  return (
    <div className="flex items-center gap-4 p-4 border-b hover:bg-gray-50 transition-colors">
      <Image
        src={item.images[0]}
        alt={item.title}
        width={100}
        height={100}
        className="object-cover rounded-lg shadow-sm"
      />
      <div className="flex-1">
        <h3 className="font-semibold text-lg line-clamp-1">{item.title}</h3>
        <p className="text-gray-600">${item.price}</p>
        <div className="flex items-center gap-2 mt-2">
          <button
            onClick={() =>
              updateQuantity(item.id, Math.max(0, item.quantity - 1))
            }
            className="p-1.5 cursor-pointer hover:bg-gray-100 rounded-md transition-colors"
            aria-label="Decrease quantity"
          >
            <Minus size={16} />
          </button>
          <span className="w-8 text-center font-medium">{item.quantity}</span>
          <button
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
            className="p-1.5 cursor-pointer hover:bg-gray-100 rounded-md transition-colors"
            aria-label="Increase quantity"
          >
            <Plus size={16} />
          </button>
        </div>
      </div>
      <button
        onClick={() => removeItem(item.id)}
        className="p-2 cursor-pointer hover:bg-red-50 rounded-md text-red-500 ml-2 transition-colors"
        aria-label="Remove item"
      >
        <Trash2 size={18} />
      </button>
    </div>
  );
});

CartItem.displayName = "CartItem";

export default CartItem;
