import { LoaderIcon } from "lucide-react";
import { forwardRef } from "react";

interface LoadMoreBtnProps {
  onClick: () => void;
  isLoading?: boolean;
}

const LoadMoreBtn = forwardRef<HTMLButtonElement, LoadMoreBtnProps>(
  ({ onClick, isLoading }, ref) => {
    return (
      <div className="flex justify-center mt-8">
        <button
          ref={ref}
          onClick={onClick}
          disabled={isLoading}
          className="bg-black text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition flex items-center gap-2 group"
        >
          Load More
          <LoaderIcon className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
        </button>
      </div>
    );
  }
);

LoadMoreBtn.displayName = "LoadMoreBtn";

export default LoadMoreBtn;
