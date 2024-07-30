"use client";

import { ProductType } from "@/context/ProductsContext";
import useProducts from "@/hooks/useProducts";
import Product from "./Product";

function ProductList() {
  const { products } = useProducts();

  return (
    <section>
      <h2 className="sr-only">Menu</h2>
      <ul className="m-auto flex flex-col gap-300">
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
