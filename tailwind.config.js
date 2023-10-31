/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1280px",
      lxl: "1440px",
    },
    extend: {
      colors: {
        skin: "#ECE3CE",
        darkGreen: "#3A4D39",
        midGreen: "4F6F52",
        lightGreen: "#4F6F52",
        orangishRed: "#ee4c30",
        yell: "#f8cd5b",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        primary: ["Montserrat", "sans-serif"],
        secondary: ["Montserrat Alternates", "sans-serif"],
        cursive: ["Indie Flower", "cursive"],
      },
    },
  },
  plugins: [],
};
