import ProductList from "@/components/product/ProductList";
export default function Home() {
  return (
    <div>
      <h1 className="bg-primary text-secondary p-4">
        <ProductList />
      </h1>
    </div>
  );
}
