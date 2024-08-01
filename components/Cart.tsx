"use client";
import { CartItemType } from "@/context/CartContext";
import useCart from "@/hooks/useCart";
import CartItem from "@/components/CartItem";
import Button from "@/components/Button";
import useModal from "@/hooks/useModal";
import ConfirmOrder from "@/components/ConfirmOrder";
import Image from "next/image";
import emptyCartImg from "@/public/images/illustration-empty-cart.svg";

function Cart() {
  const { cart, totalPrice, totalItems } = useCart();
  const { openModal } = useModal();

  const handleClick = () => openModal(<ConfirmOrder />);

  const cartWithItems = (
    <>
      <ul className="flex flex-col">
        {cart.map((item: CartItemType) => {
          return (
            <li
              key={item.id}
              className="border-b border-b-rose-100 py-200 first:pt-0 last:border-none last:pb-0"
            >
              <CartItem item={item} />
            </li>
          );
        })}
      </ul>
      <hr className="w-full border-rose-100" />
      <p className="flex flex-row items-center">
        <span className="text-preset-4 font-normal text-rose-900">
          Order total:
        </span>{" "}
        <span className="text-preset-2 ml-auto font-bold text-rose-900">
          {totalPrice}
        </span>
      </p>
      <p className="text-preset-4 flex flex-row items-center justify-center gap-100 rounded-lg bg-rose-50 p-200 font-normal">
        <svg width="21" height="20" fill="none">
          <path
            fill="#1EA575"
            d="M8 18.75H6.125V17.5H8V9.729L5.803 8.41l.644-1.072 2.196 1.318a1.256 1.256 0 0 1 .607 1.072V17.5A1.25 1.25 0 0 1 8 18.75Z"
          />
          <path
            fill="#1EA575"
            d="M14.25 18.75h-1.875a1.25 1.25 0 0 1-1.25-1.25v-6.875h3.75a2.498 2.498 0 0 0 2.488-2.747 2.594 2.594 0 0 0-2.622-2.253h-.99l-.11-.487C13.283 3.56 11.769 2.5 9.875 2.5a3.762 3.762 0 0 0-3.4 2.179l-.194.417-.54-.072A1.876 1.876 0 0 0 5.5 5a2.5 2.5 0 1 0 0 5v1.25a3.75 3.75 0 0 1 0-7.5h.05a5.019 5.019 0 0 1 4.325-2.5c2.3 0 4.182 1.236 4.845 3.125h.02a3.852 3.852 0 0 1 3.868 3.384 3.75 3.75 0 0 1-3.733 4.116h-2.5V17.5h1.875v1.25Z"
          />
        </svg>
        This is a <em className="font-bold not-italic">carbon-neutral</em>{" "}
        delivery
      </p>
      <Button onClick={handleClick}>Confirm Order</Button>
    </>
  );

  const emptyCart = (
    <>
      <div className="flex flex-col gap-200 py-200">
        <div className="mx-auto">
          <Image
            src={emptyCartImg}
            alt="Illustration of empty cart"
            width={128}
            height={128}
          />
        </div>
        <p className="text-preset-4 text-center font-semibold text-rose-500">
          Your added items will appear here
        </p>
      </div>
    </>
  );

  return (
    <section className="flex w-full flex-col gap-300 self-start rounded-xl bg-white p-300 shadow-sm lg:w-[35%]">
      <h2 className="text-preset-2 font-bold text-red">{`Your cart (${totalItems})`}</h2>
      {totalItems === 0 ? emptyCart : cartWithItems}
    </section>
  );
}
export default Cart;
