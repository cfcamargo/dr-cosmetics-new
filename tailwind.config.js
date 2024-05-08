/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        'pink': '#FFEAEC',
        'gold': '#D8AD6C',
        'rose' : '#D1A59E',
        'ligth' : '#767676'
      },
      screens : {
        'xs' : '320px'
      },
    },
  },
  plugins: [],
}

