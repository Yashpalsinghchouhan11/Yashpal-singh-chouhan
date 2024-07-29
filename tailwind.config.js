/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'background': '#1b1b1b',
        'expereince': '#222327'
        // 'background': '#FFFFFF'
      },
      flex: {
        '4': '4 4 0%'
      }
    },
  },
  plugins: [],
}
