"use client";

import { useState, useEffect } from "react";
import axios from "axios";

interface Category {
  id: string;
  name: string;
}

interface APICategory {
  id: number;
  name: string;
}

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
        const categoriesData = response.data.map((cat) => ({
          id: String(cat.id),
          name: cat.name,
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
