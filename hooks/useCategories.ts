"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import type { Category, APICategory } from "@/types";

export const useCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const response = await axios.get<APICategory[]>(
          "https://api.escuelajs.co/api/v1/categories"
        );
        const categoriesData = response.data.map((category) => ({
          id: String(category.id),
          name: category.name,
        }));
        setCategories(categoriesData);
        setError(null);
      } catch (err) {
        console.error("Failed to fetch categories:", err);
        setError("Failed to load categories");
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return { categories, loading, error };
};
