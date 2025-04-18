"use client";

import { Search } from "lucide-react";
import { memo } from "react";
import { useRenderCount } from "@/hooks/useRenderCount";

interface SearchAndFilterProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  category: string;
  onCategoryChange: (category: string) => void;
  categories: { id: string; name: string }[];
}

const SearchAndFilter = memo(
  ({
    searchQuery,
    onSearchChange,
    category,
    onCategoryChange,
    categories,
  }: SearchAndFilterProps) => {
    useRenderCount("SearchAndFilter");

    return (
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>
        <div className="relative min-w-[200px]">
          <select
            value={category}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="w-full appearance-none p-2 pl-4 pr-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white"
            aria-label="Filter by category"
          >
            <option value="">All Categories</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>
    );
  }
);

SearchAndFilter.displayName = "SearchAndFilter";

export default SearchAndFilter;
