/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#051036",
        secondary: "#FC5056",
        tertiary: "#A9AFBB",
      },
      fontFamily: {
        body: ["Poppins", "sans-serif"],
        secondary: ["Kaushan Script", "cursive"],
      },
    },
  },
  plugins: [],
};
