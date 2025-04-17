"use client";

import React from "react";
import { useProducts } from "@/hooks/useProducts";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { products, loading, error } = useProducts(0, 10);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
