"use client";

import React, { useCallback, useEffect, useRef } from "react";
import { useProducts } from "@/hooks/useProducts";
import { useCategories } from "@/hooks/useCategories";
import ProductCard from "./ProductCard";
import SearchAndFilter from "./SearchAndFilter";
import { Loader as LoaderIcon } from "lucide-react";
import ProductSkeleton from "../skeletons/ProductSkeleton";

export default function ProductList() {
  const loadMoreRef = useRef<HTMLButtonElement>(null);

  const { categories } = useCategories();
  const {
    products,
    loading,
    error,
    loadMore,
    hasMore,
    searchQuery,
    setSearchQuery,
    category,
    setCategory,
  } = useProducts();

  const handleSearch = useCallback(
    (query: string) => {
      setSearchQuery(query);
    },
    [setSearchQuery]
  );

  const handleCategoryChange = useCallback(
    (category: string) => {
      setCategory(category);
    },
    [setCategory]
  );

  useEffect(() => {
    if (!loading && loadMoreRef.current) {
      loadMoreRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [loading, products.length]);

  const renderProducts = () => {
    if (loading && products.length === 0) {
      return Array.from({ length: 6 }).map((_, index) => (
        <ProductSkeleton key={`skeleton-${index}`} />
      ));
    }

    return products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ));
  };

  const renderEmptyState = () => {
    if (loading) return null;

    let message = "No products found";
    if (searchQuery && category) {
      message = `No products found matching "${searchQuery}" in this category`;
    } else if (searchQuery) {
      message = `No products found matching "${searchQuery}"`;
    } else if (category) {
      message = "No products found in this category";
    }

    return (
      <div className="col-span-full text-center py-10">
        <div className="inline-block p-6 bg-white rounded-lg shadow-sm">
          <p className="text-gray-500 mb-2">{message}</p>
          {products.length !== 0 && (
            <button
              onClick={() => {
                setSearchQuery("");
                setCategory("");
              }}
              className="text-primary hover:underline text-sm"
            >
              Clear all filters
            </button>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <SearchAndFilter
        searchQuery={searchQuery}
        onSearchChange={handleSearch}
        category={category}
        onCategoryChange={handleCategoryChange}
        categories={categories}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {renderProducts()}
        {loading && products.length > 0 && (
          <div className="col-span-full flex justify-center py-8">
            <LoaderIcon className="animate-spin" />
          </div>
        )}
        {products.length === 0 && renderEmptyState()}
      </div>

      {!loading && hasMore && products.length > 0 && (
        <div className="flex justify-center mt-8">
          <button
            ref={loadMoreRef}
            onClick={loadMore}
            className="bg-black text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition flex items-center gap-2 group"
          >
            Load More
            <LoaderIcon className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        </div>
      )}

      {!hasMore && products.length > 0 && (
        <div className="text-center mt-8 py-4 border-t">
          <p className="text-gray-500">
            You&apos;ve reached the end of the list
          </p>
        </div>
      )}
    </div>
  );
}
