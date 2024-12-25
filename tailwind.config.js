/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        primary: {
          // normal: "#c8a2c8",
          normal: "#1f012a",
          // normal: "#000aff",
          light: "#c8a2c8",
          secondary: "gold",
          black: "#000",
          white: "#fff",
          greyDark: "#141414",
          greyLight: "#6f6f6f",
        },
      },
      spacing: {
        60: "60px",
        90: "90px",
        25: "25px",
      },
      fontFamily: {
        prohibition: ["Prohibition", "sans-serif"],
      },
    },
  },
  plugins: ["tailwindcss", "postcss-preset-env"],
};
