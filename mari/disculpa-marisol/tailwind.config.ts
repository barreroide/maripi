import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./content/**/*.ts"],
  theme: {
    extend: {
      colors: {
        blush: { 50: "#fff6f6", 100: "#ffe9ec", 200: "#fbd3da", 300: "#f4b6c2" },
        cream: { 50: "#fffcf7", 100: "#fbf5ea", 200: "#f3e9d6" },
        cherry: { 500: "#b3213f", 600: "#9a1a36", 700: "#7d1429" },
        gold: { 300: "#e6cf95", 400: "#d4b062", 500: "#b8913f" },
        ink: "#4a2a31",
      },
      fontFamily: {
        serif: ["var(--font-display)", "Georgia", "serif"],
        hand: ["var(--font-hand)", "cursive"],
      },
    },
  },
  plugins: [],
};
export default config;
