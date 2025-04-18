export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
};

export interface Category {
  id: string;
  name: string;
}

export interface APICategory {
  id: number;
  name: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface CartStore {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

export interface SearchAndFilterProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  category: string;
  onCategoryChange: (category: string) => void;
  categories: Category[];
}

export interface ProductCardProps {
  product: Product;
}

export interface LoadMoreBtnProps {
  onClick: () => void;
  isLoading?: boolean;
}

export interface CartItemProps {
  item: CartItem;
}

export interface CacheEntry {
  data: Product[];
  timestamp: number;
  hasMore: boolean;
}

export interface Cache {
  [key: string]: CacheEntry;
}
