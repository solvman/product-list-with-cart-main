import { motion } from "framer-motion";
import { CartItemType } from "@/context/CartContext";
import useCart from "@/hooks/useCart";

type PropType = {
  item: CartItemType;
};

function CartItem({ item }: PropType) {
  const { remove } = useCart();

  const handleRemove = () => remove(item);
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(item.price);
  const totalPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(item.price * item.quantity);

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{
        duration: 0.125,
        type: "spring",
        stiffness: 100,
        damping: 20,
      }}
      className="flex flex-row items-center"
    >
      <div className="flex flex-col gap-100">
        <h3 className="text-preset-3 font-semibold">{item.name}</h3>
        <div className="text-preset-4 flex flex-row gap-100">
          <span className="font-semibold text-red">{item.quantity}x</span>
          <span className="font-normal text-rose-500">{`@ ${formattedPrice}`}</span>
          <span className="font-semibold text-rose-500">{totalPrice}</span>
        </div>
      </div>
      <button
        onClick={handleRemove}
        className="group ml-auto flex h-5 w-5 flex-col items-center justify-center rounded-full border border-rose-400 transition-colors duration-200 hover:border-rose-900"
      >
        <svg
          width="10"
          height="10"
          className="fill-rose-400 transition-colors duration-200 group-hover:fill-rose-900"
        >
          <path d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z" />
        </svg>
      </button>
    </motion.div>
  );
}
export default CartItem;
