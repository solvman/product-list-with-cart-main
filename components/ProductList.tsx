"use client";

import { ProductType } from "@/context/ProductsContext";
import useProducts from "@/hooks/useProducts";
import Product from "./Product";

function ProductList() {
  const { products } = useProducts();

  return (
    <section>
      <h2 className="sr-only">Menu</h2>
      <ul className="m-auto flex max-w-[800px] flex-col gap-300 min-[400px]:grid min-[400px]:grid-cols-2 sm:grid-cols-3">
        {products.map((product: ProductType) => (
          <li key={product.id}>
            <Product product={product} />
          </li>
        ))}
      </ul>
    </section>
  );
}
export default ProductList;
