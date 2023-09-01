/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      clipPath: {
        polygon: "polygon(100% 0, 0 0, 100% 100%)",
      },
      colors: {
        custom: "rgb(31, 41, 55)",
      },
    },
  },
  plugins: [],
};
