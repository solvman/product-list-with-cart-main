import ProductsContext, { UseProductsContextType } from "@/context/ProductsContext"
import { useContext } from "react"


function useProducts():UseProductsContextType {
  return useContext(ProductsContext)  
}
export default useProducts