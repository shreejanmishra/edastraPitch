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
          DEFAULT: '#103A5A',
          dark: '#0A263C',
          light: '#1B5D8F',
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
