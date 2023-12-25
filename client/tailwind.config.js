/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,jsx,js}",
    './node_modules/preline/preline.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('preline/plugin'),
    // eslint-disable-next-line no-undef
    require("daisyui")
  ],
  daisyui: {
    themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "light", // name of one of the included themes for dark mode
    base: false, // applies background color and foreground color for root element by default

  },
}

