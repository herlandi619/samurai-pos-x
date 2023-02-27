/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'font-family': ['Poppins', 'sans-serif'],
      'font-family': ['Roboto', 'sans-serif'],
      'karsha': ['karsha','cursive'],
    },
    extend: {
      backgroundImage: {
        'bg': 'url(./img/bg.png)',
      }
    },
  },
  plugins: [],
}