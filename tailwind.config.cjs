/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      keyframes: {
        showNav: {
          "0%": { translate: "-100% 0" },
          "100%": { translate: "0 0" },
        },
        hideNav: {
          "0%": { translate: "0 0" },
          "100%": { translate: "-100% 0" },
        },
      },
      animation: {
        showNav: "showNav 1s ease-in-out forwards",
        hideNav: "hideNav 1s ease-in-out forwards",

        fadeIn: "fadeIn 1.5s",
        bounce:
          "bounce 0.5s alternate cubic-bezier(0.95, 0.05, 0.795, 0.035) infinite",
        slideUp: "slideUp 0.5s",
        slideUpEaseInOut: "slideUp 0.5s ease-in-out",
        slideUpCubiBezier: "slideUp 1s cubic-bezier(0.165, 0.84, 0.44, 1)",
      },
      animationDelay: {
        0: "0s",
        2: "0.2s",
        4: "0.4s",
        6: "0.6s",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        slideUp: {
          from: { transform: "translateY(100%)" },
          to: { transform: "translateY(0)" },
        },
        bounce: {
          from: { transform: "translateY(10px)" },
          to: { transform: "translateY(0)" },
        },
      },
      colors: {
        primary: "#6087c3",
        secondary: "#143573",
        base: "#c7e4ff",
        line: "#817A5D",
        dark: {
          primary: "#143573",
          secondary: "white",
        },
      },
      fontFamily: {
        dance: ["Dancing Script", "cursive"],
        poppins: ["Poppins", "sans-serif"],
        mont: ["Montserrat", "sans-serif"],
        arimo: ["Arimo", "sans-serif"],
      },
      backgroundImage: {
        wall: "url('./src/assets/design.svg')",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      smm: "920px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
