/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          ClashDisplay: ['Clash Display', 'sans-serif'],
        },
        backgroundImage: {
            square: 'url("/src/assets/background/bg-square.svg")',
        }
      },
    },
    plugins: [],
}