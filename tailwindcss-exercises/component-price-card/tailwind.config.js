/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary-dark": "#423aaa",
        primary: "#4f3cc9",
        secondary: "#ffffff",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
