/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'greenery': '#16a34a',
        'meadows': '#22c55e',
        'shadow': '#344054',
        'shade': '#98A2B3'
      }
    },
  },
  plugins: [],
}