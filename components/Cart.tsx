"use client";
import { CartItemType } from "@/context/CartContext";
import useCart from "@/hooks/useCart";
import CartItem from "./CartItem";

function Cart() {
  const { cart, totalPrice } = useCart();

  return (
    <section>
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
