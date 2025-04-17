"use client";

import Image from "next/image";
import type { Product } from "@/types";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition">
      <Image
        src={product.images[0]}
        alt={product.title}
        width={300}
        height={300}
        className="object-cover h-64 w-full rounded-md"
      />
      {/* TODO: add: add to cart btn with f() */}
      <h2 className="font-bold text-lg mt-2">{product.title}</h2>
      <p className="text-gray-600 mt-1">{product.description}</p>
      <p className="text-primary font-semibold">${product.price}</p>
    </div>
  );
}
