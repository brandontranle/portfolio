/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        glow: [
          "0 0px 5px rgb(106, 100, 170, 0.5)",
          "0 0px 15px rgb(135, 129, 196, 0.5)",
        ],
      },
    },
    fontFamily: {
      raleway: ["Raleway-Regular", "sans-serif"],
      ralewayBold: ["Raleway-Bold", "sans-serif"],
      ralewaySemibold: ["Raleway-Semibold", "sans-serif"],
    },
  },
  safelist: [
    "!duration-[0ms]",
    "!delay-[0ms]",
    'html.js :where([class*="taos:"]:not(.taos-init))',
  ],

  plugins: ["taos/plugin"],
};
