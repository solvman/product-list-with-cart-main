"use client";

import { ProductType } from "@/context/ProductsContext";
import useProducts from "@/hooks/useProducts";
import Product from "./Product";

function Menu() {
  const { products } = useProducts();

  return (
    <section>
      <h2 className="sr-only">Menu</h2>
      <ul className="grid grid-cols-4">
        {products.map((product: ProductType) => (
          <li
            key={product.id}
            className="rounded2xl border border-red/50 shadow-md"
          >
            <Product product={product} />
          </li>
        ))}
      </ul>
    </section>
  );
}
export default Menu;
