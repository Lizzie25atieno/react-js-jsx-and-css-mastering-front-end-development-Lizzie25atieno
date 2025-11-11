/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],  
  darkMode: 'class', // we'll control dark mode via a class on <html> or <body>
  theme: {
    extend: {
      // add custom colors or animation here if needed later
    },
  },
  plugins: [],
}

