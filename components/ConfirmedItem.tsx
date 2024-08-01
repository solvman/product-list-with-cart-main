import Image from "next/image";
import { CartItemType } from "@/context/CartContext";
import { currency } from "@/utils/utils";

type PropsType = {
  item: CartItemType;
};

function ConfirmedItem({ item }: PropsType) {
  const formatedPrice = currency.format(item.price);
  const totalPrice = currency.format(item.price * item.quantity);

  return (
    <div className="flex flex-row items-center gap-200">
      <div className="relative h-12 w-12 overflow-hidden rounded-[4px] shadow-sm">
        <Image
          className="object-cover"
          src={item.thumbnail}
          fill
          alt={item.name}
          sizes="48px"
        />
      </div>
      <div className="text-preset-4 flex flex-col gap-100">
        <p className="font-semibold text-rose-900">{item.name}</p>
        <div className="flex flex-row gap-100">
          <span className="font-semibold text-red">{item.quantity}x</span>
          <span className="font-normal text-rose-400">{`@ ${formatedPrice}`}</span>
        </div>
      </div>
      <div className="text-preset-3 ml-auto font-semibold text-rose-900">
        {totalPrice}
      </div>
    </div>
  );
}
export default ConfirmedItem;
