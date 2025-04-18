import { LoaderIcon } from "lucide-react";
import type { LoadMoreBtnProps } from "@/types";

const LoadMoreBtn = ({ onClick, isLoading }: LoadMoreBtnProps) => {
  return (
    <div className="flex justify-center mt-8">
      <button
        onClick={onClick}
        disabled={isLoading}
        className="bg-black cursor-pointer text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition flex items-center gap-2 group"
      >
        Load More
        <LoaderIcon className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
      </button>
    </div>
  );
};

LoadMoreBtn.displayName = "LoadMoreBtn";

export default LoadMoreBtn;
