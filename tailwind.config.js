/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      fontFamily:{
        pop:"Poppins"
      },
      colors:{
        textPrimary:"#333333",
        textSecondary:"#B88E2F"
      }
    },
  },
  plugins: [],
}