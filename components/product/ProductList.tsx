"use client";

import React, { useCallback } from "react";
import { useProducts } from "@/hooks/useProducts";
import { useCategories } from "@/hooks/useCategories";
import ProductCard from "./ProductCard";
import SearchAndFilter from "./SearchAndFilter";
import { Loader as LoaderIcon } from "lucide-react";
import ProductSkeleton from "../skeletons/ProductSkeleton";
import LoadMoreBtn from "../ui/loadMoreBtn";

export default function ProductList() {
  const { categories } = useCategories();
  const {
    products,
    loading,
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

    const message =
      searchQuery && category
        ? `No products found matching "${searchQuery}" in this category`
        : searchQuery
        ? `No products found matching "${searchQuery}"`
        : category
        ? "No products found in this category"
        : "No products found";

    return (
      <div className="col-span-full text-center py-10">
        <div className="inline-block p-6 bg-white rounded-lg shadow-sm">
          <p className="text-gray-500 mb-2">{message}</p>
          <button
            onClick={() => {
              setSearchQuery("");
              setCategory("");
            }}
            className="text-primary cursor-pointer hover:underline text-sm"
          >
            Clear all filters
          </button>
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
        <LoadMoreBtn onClick={loadMore} isLoading={loading} />
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
