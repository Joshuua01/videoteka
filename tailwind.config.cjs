/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        KronaOne: ["KronaOne", ...defaultTheme.fontFamily.sans],
        InterLight: ["InterLight", ...defaultTheme.fontFamily.sans],
        InterMedium: ["InterMedium", ...defaultTheme.fontFamily.sans],
        InterBold: ["InterBold", ...defaultTheme.fontFamily.sans],
      },
      height: {
        '5p': '5%',
        '10p': '10%',
        '15p': '15%',
      },
    },
    plugins: [],
  },
};
