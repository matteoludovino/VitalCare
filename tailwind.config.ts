import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#f0fffe",
          100: "#d4f5f5",
          200: "#a9ecec",
          300: "#70dbdb",
          400: "#56cac4",
          500: "#33cccc",
          600: "#248f8f",
          700: "#196666",
          800: "#0d4040",
          900: "#072020",
        },
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "sans-serif"],
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-left": {
          "0%": { opacity: "0", transform: "translateX(-24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "fade-right": {
          "0%": { opacity: "0", transform: "translateX(24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.65s ease forwards",
        "fade-left": "fade-left 0.65s ease forwards",
        "fade-right": "fade-right 0.65s ease forwards",
        "fade-in": "fade-in 0.5s ease forwards",
      },
    },
  },
  plugins: [],
};

export default config;
