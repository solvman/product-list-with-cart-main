import { ButtonHTMLAttributes } from "react";

type PropsType = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
  children: React.ReactNode;
};

function Button({ children, ...props }: PropsType) {
  return (
    <button className="overflow-hidden rounded-full bg-red" {...props}>
      <div className="text-preset-3 flex flex-row items-center justify-center px-300 py-200 font-semibold text-white transition-colors duration-200 hover:bg-black/25">
        {children}
      </div>
    </button>
  );
}
export default Button;
