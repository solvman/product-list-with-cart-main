import CartContext, { UseCartContextType } from "@/context/CartContext";
import { useContext } from "react";

function useCart(): UseCartContextType {
  return useContext(CartContext);
}

export default useCart;
