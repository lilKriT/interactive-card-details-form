/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        gradientOne: "hsl(249, 99%, 64%)",
        gradientTwo: "hsl(278, 94%, 30%)",
        red: "hsl(0, 100%, 66%)",
        white: "hsl(0, 0%, 100%)",
        lightGrayishViolet: "hsl(270, 3%, 87%)",
        darkGrayishViolet: "hsl(279, 6%, 55%)",
        veryDarkViolet: "hsl(278, 68%, 11%)",
      },
    },
  },
  plugins: [],
};
