/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'real-estate': "url('/src/assets/bground.jpg)"
      }
    },
  },
  plugins: [],
}
