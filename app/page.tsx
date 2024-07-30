import Cart from "@/components/Cart";
import ProductList from "@/components/ProductList";

export default function Home() {
  return (
    <main className="flex flex-col gap-400 p-300">
      <h1 className="text-preset-1">Desserts</h1>
      <ProductList />
      <Cart />
    </main>
  );
}
