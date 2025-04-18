import React from "react";

const ProductSkeleton = () => (
  <div className="bg-white rounded-lg shadow-md p-4 animate-pulse">
    <div className="bg-gray-200 h-64 w-full rounded-md"></div>
    <div className="h-6 bg-gray-200 rounded mt-2 w-3/4"></div>
    <div className="h-4 bg-gray-200 rounded mt-2 w-full"></div>
    <div className="h-4 bg-gray-200 rounded mt-1 w-2/3"></div>
    <div className="flex justify-between items-center mt-4">
      <div className="h-6 bg-gray-200 rounded w-20"></div>
      <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
    </div>
  </div>
);

export default ProductSkeleton;
