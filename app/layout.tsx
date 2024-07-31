import type { Metadata } from "next";
import { Red_Hat_Text } from "next/font/google";
import "./globals.css";
import Providers from "@/context/Providers";

const redHatText = Red_Hat_Text({
  subsets: ["latin"],
  variable: "--font-red-hat-text",
});

export const metadata: Metadata = {
  title: "Product list with cart challenge on Frontend Mentor",
  description:
    "This is a solution to the Product list with cart challenge on Frontend Mentor at https://www.frontendmentor.io/challenges/product-list-with-cart-5MmqLVAp_d. Frontend Mentor challenges help you improve your coding skills by building realistic projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body
          className={`${redHatText.variable} min-w-[375px] bg-rose-50 font-sans`}
        >
          {children}
        </body>
      </Providers>
    </html>
  );
}
