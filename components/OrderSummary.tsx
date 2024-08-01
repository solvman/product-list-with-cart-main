import { CartItemType } from "@/context/CartContext";
import ConfirmedItem from "./ConfirmedItem";

type PropsType = {
  cart: CartItemType[];
  totalPrice: string;
};

function OrderSummary({ cart, totalPrice }: PropsType) {
  return (
    <div className="rounded-lg bg-rose-50 p-300">
      <ul>
        {cart.map((item: CartItemType) => {
          return (
            <li
              className="border-b border-b-rose-100 py-200 first:pt-0 last:border-none last:pb-0"
              key={item.id}
            >
              <ConfirmedItem item={item} />
            </li>
          );
        })}
      </ul>
      <hr className="my-300 w-full border-rose-100" />
      <div className="flex flex-row items-center">
        <span className="text-preset-4 font-normal">Order total:</span>
        <span className="text-preset-2 ml-auto font-bold">{totalPrice}</span>
      </div>
    </div>
  );
}
export default OrderSummary;
