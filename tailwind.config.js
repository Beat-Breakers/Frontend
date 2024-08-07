/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./{src,Pages,Utils,Components}/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}