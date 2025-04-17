"use client";

import React from "react";
import { useProducts } from "@/hooks/useProducts";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { products, loading, error, loadMore, hasMore } = useProducts();

  if (loading && products.length === 0) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      <div className="col-span-full flex justify-center mt-4">
        {hasMore && !loading ? (
          <button
            onClick={loadMore}
            className="bg-black text-white cursor-pointer px-4 py-2 rounded hover:bg-white hover:text-black hover:border transition"
          >
            Load More
          </button>
        ) : (
          <p className="text-gray-500">
            {loading ? "Loading more products..." : "No More Products"}
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
