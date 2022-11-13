// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  darkMode: "class",
  theme: {
    extend: {
      spacing: {
        13: "3.25rem",
      },
      fontFamily: {
        inter: ["Inter"],
      },
      colors: {
        koneng: "#ff0",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        oyag: "goyang 1s infinite ease-out",
      },
      // bikin keyframes custom
      keyframes: {
        goyang: {
          "0%, 100%": {
            transform: "rotate(-3deg)",
          },
          "50%": {
            transform: "rotate(3deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
