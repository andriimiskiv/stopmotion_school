// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: ["./src/**/*.js"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        red: "#FF9C9C",
        green: "#C5FF98",
        blue: "#A5EFFF",
        yellow: "#FFE485",
        gray: "#273238",
        white: "#FFFFFF",
      },
      fontFamily: {
        display: ["IBM Plex Mono", "monospace"],
      },
    },
  },
  variants: {},
  // https://github.com/tailwindcss/custom-forms
  plugins: [require("@tailwindcss/custom-forms")],
};
