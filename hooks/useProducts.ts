"use client";

import { useEffect, useState, useCallback, useMemo, useRef } from "react";
import axios, { AxiosError } from "axios";
import type { Product, Cache, CacheEntry } from "@/types";
import { useDebounce } from "@/hooks/useDebounce";

const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

export const useProducts = (initialCategory: string = "") => {
  const [page, setPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState(initialCategory);
  const limit = 6;
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);
  const cache = useRef<Cache>({});

  const debouncedSearch = useDebounce(searchQuery.trim(), 500);

  const getCacheKey = (page: number, search: string, cat: string) =>
    `${page}-${search}-${cat}`;

  const isCacheValid = (entry: CacheEntry) =>
    Date.now() - entry.timestamp < CACHE_DURATION;

  const loadMore = useCallback(() => {
    if (hasMore && !loading) {
      setPage((prevPage) => prevPage + 1);
    }
  }, [hasMore, loading]);

  // Reset page when search or category changes
  useEffect(() => {
    setPage(0);
    setProducts([]);
    setHasMore(true);
  }, [debouncedSearch, category]);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);

      const cacheKey = getCacheKey(page, debouncedSearch, category);
      const cachedData = cache.current[cacheKey];

      if (cachedData && isCacheValid(cachedData)) {
        if (page === 0) {
          setProducts(cachedData.data);
        } else {
          setProducts((prev) => [...prev, ...cachedData.data]);
        }
        setHasMore(cachedData.hasMore);
        setLoading(false);
        return;
      }

      try {
        const offset = page * limit;
        let url = `https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${limit}`;

        if (category) {
          url += `&categoryId=${category}`;
        }

        if (debouncedSearch && debouncedSearch.length > 0) {
          url += `&title=${encodeURIComponent(debouncedSearch)}`;
        }

        const res = await axios.get(url);
        const newData = res.data;

        cache.current[cacheKey] = {
          data: newData,
          timestamp: Date.now(),
          hasMore: newData.length === limit,
        };

        if (page === 0) {
          setProducts(newData);
        } else {
          setProducts((prev) => [...prev, ...newData]);
        }

        setHasMore(newData.length === limit);
      } catch (err: unknown) {
        const error = err as AxiosError;
        setError(error.message || "Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [page, debouncedSearch, category]);

  const filteredProducts = useMemo(() => products, [products]);

  return {
    products: filteredProducts,
    loading,
    error,
    loadMore,
    hasMore,
    setSearchQuery,
    setCategory,
    searchQuery,
    category,
  };
};
