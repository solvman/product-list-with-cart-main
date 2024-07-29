import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    colors: {
      white: "hsl(0, 0%, 100%)",
      black: "hsl(0, 0%, 0%)",
      red: "hsl(14, 86%, 42%)",
      green: "hsl(159, 69%, 38%)",
      rose: {
        50: "hsl(20, 50%, 98%)",
        100: "hsl(13, 31%, 94%)",
        300: "hsl(14, 25%, 72%)",
        400: "hsl(7, 20%, 60%)",
        500: "hsl(12, 20%, 44%)",
        900: "hsl(14, 65%, 9%)",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-red-hat-text)"]
      },
      spacing: {
        50: "4px",
        100: "8px",
        150: "12px",
        200: "16px",
        300: "24px",
        400: "32px",
        500: "40px",
        1100: "88px",
      },
    },
  },
  plugins: [],
};
export default config;
