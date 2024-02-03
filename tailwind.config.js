/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        glow: [
          "0 0px 5px rgba(255,255, 255, 0.5)",
          "0 0px 15px rgba(255, 255,255, 0.7)",
        ],
      },
    },
    fontFamily: {
      raleway: ["Raleway-Regular", "sans-serif"],
      ralewayBold: ["Raleway-Bold", "sans-serif"],
      ralewaySemibold: ["Raleway-Semibold", "sans-serif"],
    },
  },
  plugins: [],
};
