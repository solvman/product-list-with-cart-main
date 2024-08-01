import { clsx, ClassArray } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...classes: ClassArray) {
  return twMerge(clsx(classes));
}

export const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
