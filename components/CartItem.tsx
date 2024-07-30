import { CartItemType } from "@/context/CartContext";
import useCart from "@/hooks/useCart";

type PropType = {
  item: CartItemType;
};

function CartItem({ item }: PropType) {
  const { remove } = useCart();

  const handleRemove = () => remove(item);

  return (
    <>
      <h3>{item.name}</h3>
      <p>${item.price}</p>
      <p>Quantity: {item.quantity}</p>
      <button onClick={handleRemove}>Remove</button>
    </>
  );
}
export default CartItem;
