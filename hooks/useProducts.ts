import { useContext } from "react"
import ProductsContext, { UseProductsContextType } from "@/context/ProductsContext"


function useProducts():UseProductsContextType {
  return useContext(ProductsContext)  
}
export default useProducts