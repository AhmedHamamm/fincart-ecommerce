"use client";

import Image from "next/image";
import type { ProductCardProps } from "@/types";
import { useCartStore } from "@/store/cartStore";
import { ShoppingCart } from "lucide-react";
import { memo } from "react";

const ProductCard = memo(
  ({ product }: ProductCardProps) => {
    const addItem = useCartStore((state) => state.addItem);
    const items = useCartStore((state) => state.items);

    const isInCart = items.some((item) => item.id === product.id);

    return (
      <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition">
        <div className="relative">
          <Image
            src={product.images[0]}
            alt={product.title}
            width={300}
            height={300}
            className="object-cover h-100 w-full rounded-xl shadow-sm"
            loading="lazy"
          />
          {isInCart && (
            <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs">
              <span className="font-bold mr-1">
                {items.find((item) => item.id === product.id)?.quantity}
              </span>
              In Cart
            </div>
          )}
        </div>
        <h2 className="font-bold text-lg mt-2 line-clamp-1">{product.title}</h2>
        <p className="text-gray-600 mt-1 line-clamp-2">{product.description}</p>
        <div className="flex justify-between items-center mt-4">
          <p className="text-primary font-semibold">${product.price}</p>
          <button
            onClick={() => addItem(product)}
            className={`px-4 py-2 cursor-pointer rounded-full transition-all duration-200 flex items-center gap-2 font-medium ${
              isInCart
                ? "bg-green-100 text-green-600 hover:bg-green-200 hover:scale-105"
                : "bg-gray-200 text-black hover:bg-gray/90 hover:scale-105 active:scale-95"
            }`}
          >
            {isInCart ? "In Cart" : "Add to Cart"}
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
    );
  },
  (prevProps, nextProps) => {
    return prevProps.product.id === nextProps.product.id;
  }
);

ProductCard.displayName = "ProductCard";

export default ProductCard;
