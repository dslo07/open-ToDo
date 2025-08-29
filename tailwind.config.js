/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    animations,
     require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}
