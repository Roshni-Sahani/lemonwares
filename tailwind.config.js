/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': 'poppins',
        'inter': 'inter',
      },
       animation: {
        'bounce-slow': 'bounce 3s infinite'
      }
    },
  },
  plugins: [],
}