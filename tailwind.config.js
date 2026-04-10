/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        surface: '#121212',
        accent: '#D4FF00', // Neon chartreuse/yellow
      },
      fontFamily: {
        display: ['"Oswald"', 'sans-serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      cursor: {
        none: 'none',
      }
    },
  },
  plugins: [],
}
