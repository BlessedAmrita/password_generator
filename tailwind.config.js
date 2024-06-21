/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brown: {
          dark: "#190b28",
          light: "#685762",
          lightest: "#f5d6ba",
        },
        hushedblue: "#9dd1f1",
      },
      fontFamily: {
        customFont1: "Comfortaa",
      },
    },
  },
  plugins: [],
};
