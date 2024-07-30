import { CartItemType } from "@/context/CartContext";
import { ProductType } from "@/context/ProductsContext";
import useCart from "@/hooks/useCart";

type PropsType = { product: ProductType };

function Product({ product }: PropsType) {
  const { increment, decrement, cart } = useCart();

  const itemInCart = cart.find((item) => item.id === product.id);
  const quantity = itemInCart?.quantity || 0;
  const isInCart = quantity > 0;

  const cartItem: CartItemType = {
    id: product.id,
    name: product.name,
    price: product.price,
    thumbnail: product.image.thumbnail,
    quantity: 1,
  };

  const handleIncrement = () => increment(cartItem);
  const handleDecrement = () => decrement(cartItem);

  return (
    <>
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      {!isInCart && <button onClick={handleIncrement}>Add to Cart</button>}
      {isInCart && (
        <div className="flex flex-row items-center justify-around rounded-full border border-rose-500 bg-rose-300">
          <button
            onClick={handleDecrement}
            className="font-3xl full h-10 w-10 rounded-full border bg-rose-900 text-white hover:bg-rose-900/50"
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            onClick={handleIncrement}
            className="font-3xl full h-10 w-10 rounded-full border bg-rose-900 text-white hover:bg-rose-900/50"
          >
            +
          </button>
        </div>
      )}
    </>
  );
}
export default Product;
