type PropsType = {
  quantity: number;
  handleIncrement: () => void;
  handleDecrement: () => void;
};

function CartButton({ quantity, handleIncrement, handleDecrement }: PropsType) {
  const isCartEmpty = quantity === 0;

  const addToCartButton = (
    <button
      onClick={handleIncrement}
      className="flex w-40 flex-row items-center justify-center gap-100 rounded-full border border-rose-400 bg-white p-150 hover:border-red hover:text-red"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="20"
        fill="none"
        viewBox="0 0 21 20"
      >
        <g fill="#C73B0F" clipPath="url(#a)">
          <path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z" />
          <path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z" />
        </g>
        <defs>
          <clipPath id="a">
            <path fill="#fff" d="M.333 0h20v20h-20z" />
          </clipPath>
        </defs>
      </svg>
      <p className="text-preset-4-bold font-semibold">Add to Cart</p>
    </button>
  );

  const incrementButton = (
    <div className="flex h-11 w-40 flex-row rounded-full bg-red p-150">
      <button
        className="group flex h-[20px] w-[20px] flex-row items-center justify-center rounded-full border border-white transition-all duration-200 hover:bg-white"
        onClick={handleDecrement}
      >
        <svg
          className="fill-white group-hover:fill-red"
          width="10"
          height="2"
          fill="none"
        >
          <path d="M0 .375h10v1.25H0V.375Z" />
        </svg>
      </button>
      <p className="text-preset-4-bold m-auto font-semibold text-white">
        {quantity}
      </p>
      <button
        className="group flex h-[20px] w-[20px] flex-row items-center justify-center rounded-full border border-white transition-all duration-200 hover:bg-white"
        onClick={handleIncrement}
      >
        <svg
          className="fill-white group-hover:fill-red"
          width="10"
          height="10"
          fill="none"
          viewBox="0 0 10 10"
        >
          <path d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z" />
        </svg>
      </button>
    </div>
  );

  return isCartEmpty ? addToCartButton : incrementButton;
}
export default CartButton;
