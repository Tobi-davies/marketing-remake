/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
    extend: {
      colors: {
        orange: "#fb8e0b",
        white: "#ffffff",
        dark: "#1b1c20",
        defaultText: "#383a47",
        gray: "#797b89",
        defaultOrange: "#fd6003",
        grayBg: "#f8f8fa",
        lightGray: "#d4d4d8",
      },
      maxWidth: {
        128: "1180px",
      },
    },
  },
  plugins: [],
};
