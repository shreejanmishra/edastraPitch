/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#e5c302',
          dark: '#c4a602',
          light: '#f5d532',
        },
        dark: {
          DEFAULT: '#000000',
          lighter: '#1a1a1a',
          light: '#2d2d2d',
        },
      },
    },
  },
  plugins: [],
}
