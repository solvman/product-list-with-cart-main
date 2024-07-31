"use client";
import { CartItemType } from "@/context/CartContext";
import useCart from "@/hooks/useCart";
import CartItem from "./CartItem";

function Cart() {
  const { cart, totalPrice } = useCart();

  return (
    <section className="w-full self-start rounded-xl bg-white p-300 shadow-sm lg:w-[35%]">
      <h2 className="">Cart</h2>
      <ul className="flex flex-col">
        {cart.map((item: CartItemType) => {
          return (
            <li key={item.id}>
              <CartItem item={item} />
            </li>
          );
        })}
      </ul>
      <p>Total: {totalPrice}</p>
    </section>
  );
}
export default Cart;
