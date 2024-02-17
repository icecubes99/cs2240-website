import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        jimmy: "url('/hero.jpg')",
        howard: "url('/howard-hamlin.jpg')",
        kim: "url('/kim-wexler.jpg')",
        mike: "url('/mike-ehrmentraut.jpg')",
        nacho: "url('/ignacio-vargas.jpg')",
        saul: "url('/jimmy-mcgill.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
