/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
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
  darkMode: "class",
  plugins: [nextui()],
};
