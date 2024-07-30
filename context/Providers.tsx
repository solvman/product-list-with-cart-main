"use client";

import { ReactNode } from "react";
import { ProductsContextProvider } from "./ProductsContext";
import { CartContextProvider } from "./CartContext";

type ChildrenProps = { children: ReactNode };

export default function Providers({ children }: ChildrenProps) {
  return (
    <ProductsContextProvider>
      <CartContextProvider>{children}</CartContextProvider>
    </ProductsContextProvider>
  );
}
