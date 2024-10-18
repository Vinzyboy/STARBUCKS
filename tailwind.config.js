/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        banner: "url('../img/hero1.png')",
        mobile: "url('../img/hero-mobile_2021.jpg')",
      },
    },
  },
  plugins: [],
};
