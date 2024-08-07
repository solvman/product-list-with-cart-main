import { createContext, ReactElement, ReactNode, useState } from "react";
import data from "@/data/data.json" with { type: "json" };

export type ProductType = {
  image: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
  name: string;
  category: string;
  price: number;
  id: string;
};

const initState: ProductType[] = data.map((product) => {
  const productWithId = { ...product, id: crypto.randomUUID() };
  return productWithId;
});

export type UseProductsContextType = { products: ProductType[] };

const initContextState: UseProductsContextType = { products: [] };
const ProductsContext = createContext<UseProductsContextType>(initContextState);

type ChildrenProps = { children: ReactNode };

export function ProductsContextProvider({
  children,
}: ChildrenProps): ReactElement {
  const [products, _] = useState<ProductType[]>(initState);

  return <ProductsContext.Provider value={{ products }}>{children}</ProductsContext.Provider>
}

export default ProductsContext;