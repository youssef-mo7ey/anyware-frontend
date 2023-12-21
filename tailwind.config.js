/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'header':"#D0F7FA",
        'disabled-text':"#666666",
        "checked":"#397b31"

      }
    },
  },
  plugins: [],
}

