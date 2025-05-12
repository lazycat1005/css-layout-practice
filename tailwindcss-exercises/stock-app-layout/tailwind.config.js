/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        card: "#1e1e26",
        dark: "#14151a",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
