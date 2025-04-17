"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import type { Product } from "@/types";

export const useProducts = () => {
  const [page, setPage] = useState(0);
  const limit = 3;
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);

  const loadMore = () => {
    if (hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const offset = page * limit;
        const res = await axios.get(
          `https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${limit}`
        );
        if (res.data.length === 0) {
          console.log("No more products");
          setHasMore(false);
        } else {
          setProducts((prevProducts) => [...prevProducts, ...res.data]);
        }
      } catch (err: any) {
        setError(err.message || "Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [page]);

  return { products, loading, error, loadMore, hasMore };
};
