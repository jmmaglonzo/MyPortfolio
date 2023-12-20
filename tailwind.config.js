/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryRed: "#fd0037",
        secondaryGrey: "#abb2bf",
        bodyColor: " #13141f",
        lightMode: "#EBEBEB",
        formColor: "#161925",
        cardsColor: "#2b2c35",
        footerColor: "#13141f",
      },
      fontFamily: {
        sans: ["Fira Code", "monospace"],
      },
    },
    container: {
      center: true,
      padding: "1rem",
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
  },
  plugins: [],
};
