"use client";

import { ReactNode } from "react";
import { ProductsContextProvider } from "./ProductsContext";
import { CartContextProvider } from "./CartContext";
import { ModalContextProvider } from "./ModalContext";

type ChildrenProps = { children: ReactNode };

export default function Providers({ children }: ChildrenProps) {
  return (
    <ModalContextProvider>
      <ProductsContextProvider>
        <CartContextProvider>{children}</CartContextProvider>
      </ProductsContextProvider>
    </ModalContextProvider>
  );
}
