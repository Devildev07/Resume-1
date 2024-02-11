const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        ".btn": {
          padding: ".5rem 1rem",
          borderRadius: ".25rem",
          fontWeight: "600",
        },
        ".btn-blue": {
          // backgroundColor: "#3490dc",
          color: "#fff",
          "&:hover": {
            // backgroundColor: '#2779bd'
          },
        },
      });
    }),
  ],

  darkMode: "class",
  
};
