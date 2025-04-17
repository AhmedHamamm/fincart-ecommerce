import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito", "sans-serif"],
      },
      colors: {
        primary: "#2563EB",
        secondary: "#F59E0B",
        accent: "#10B981",
      },
    },
  },
  plugins: [],
};

export default config;
