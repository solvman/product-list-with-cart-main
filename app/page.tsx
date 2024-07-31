import Cart from "@/components/Cart";
import ProductList from "@/components/ProductList";

export default function Home() {
  return (
    <main className="flex max-w-[1216px] flex-col gap-400 p-300 md:p-500 lg:m-auto lg:py-1100">
      <div className="flex flex-col gap-400 lg:flex-row">
        <div className="flex flex-col gap-400 lg:w-[65%]">
          <h1 className="text-preset-1 font-bold">Desserts</h1>
          <ProductList />
        </div>
        <Cart />
      </div>
    </main>
  );
}
