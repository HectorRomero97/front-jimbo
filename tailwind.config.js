/** @type {import('tailwindcss').Config} */

import daisyui from "daisyui"
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // Archivos en los que Tailwind aplicará sus estilos
  ],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui,
  ],
}