/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html", "./images/*.*"],
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
      backgroundImage: {
        gradient: "url('/images/bg-main-desktop.png')",
        gradientM: "url('/images/bg-main-mobile.png')",
        cardFront: "url('/images/bg-card-front.png')",
        cardBack: "url('/images/bg-card-back.png')",
      },
    },
  },
  plugins: [],
};
