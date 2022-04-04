module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      animation: { rotate: "rotate 1.5s ease-in-out infinite" },
      keyframes: {
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "10%": { transform: "rotate(-30deg)" },
          "20%": { transform: "rotate(30deg)" },
          "30%": { transform: "rotate(-30deg)" },
          "40%": { transform: "rotate(30deg)" },
          "50%": { transform: "rotate(-30deg)" },
          "60%": { transform: "rotate(0deg)" },
          "70%": { transform: "rotate(0deg)" },
          "80%": { transform: "rotate(0deg)" },
          "90%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
