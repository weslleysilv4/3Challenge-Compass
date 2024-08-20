/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#16377D",
        secondary: "#FC5056",
      },
      fontFamily: {
        body: ["Poppins", "sans-serif"],
        secondary: ["Kaushan Script", "cursive"],
      },
    },
  },
  plugins: [],
};
