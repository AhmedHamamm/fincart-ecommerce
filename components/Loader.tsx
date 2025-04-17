interface LoaderProps {
  type?: "overlay" | "inline";
}

export default function Loader({ type = "overlay" }: LoaderProps) {
  return (
    <div
      className={`${
        type === "overlay"
          ? "fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50"
          : "flex items-center justify-center"
      }`}
    >
      <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
    </div>
  );
}
