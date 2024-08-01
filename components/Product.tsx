import { CartItemType } from "@/context/CartContext";
import { ProductType } from "@/context/ProductsContext";
import useCart from "@/hooks/useCart";
import CartButton from "./CartButton";
import Image from "next/image";
import { cn } from "@/utils/utils";

type PropsType = { product: ProductType };

function Product({ product }: PropsType) {
  const { increment, decrement, cart } = useCart();

  const itemInCart = cart.find((item) => item.id === product.id);
  const quantity = itemInCart?.quantity || 0;

  const cartItem: CartItemType = {
    id: product.id,
    name: product.name,
    price: product.price,
    thumbnail: product.image.thumbnail,
    quantity: 1,
  };

  const formatedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(product.price);

  const handleIncrement = () => increment(cartItem);
  const handleDecrement = () => decrement(cartItem);

  return (
    <div className="flex flex-col gap-200">
      <div className="relative mb-[22px]">
        <div
          className={cn(
            "relative h-[212px] w-full overflow-hidden rounded-lg shadow-sm",
            {
              "border-2 border-red": quantity > 0,
            },
          )}
        >
          <Image
            className="h-auto w-full object-cover"
            src={product.image.desktop}
            alt={product.name}
            sizes="(min-width: 1440) 17vw, (min-width: 640) 33vw, 100vw"
            fill
            priority
          />
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
          <CartButton
            quantity={quantity}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
          />
        </div>
      </div>
      <div className="flex flex-col gap-50">
        <p className="text-preset-4 text-rose-500">{product.category}</p>
        <h3 className="text-preset-3 font-semibold text-rose-900">
          {product.name}
        </h3>
        <p className="text-preset-3 font-semibold text-red">{formatedPrice}</p>
      </div>
    </div>
  );
}
export default Product;
