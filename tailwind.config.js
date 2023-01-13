/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      "5xl": "2.25rem",
      "6xl": "3rem",
    },
    colors: {
      "white": "#c8c9cb",
      "petrol-blue": "#334752",
      "petrol-blue-border": "#293540",
      "gray": "#777c82",
      "school-gray": "#7b7e84",
      "school-petrol": "#36404f",
    },
  },
  plugins: [],
};
