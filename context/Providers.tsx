'use client';

import { ReactNode } from "react";
import { ProductsContextProvider } from "./ProductsContext";

type ChildrenProps = { children: ReactNode };

export default function Providers({ children }: ChildrenProps) {
  return <ProductsContextProvider>{children}</ProductsContextProvider>;
}
