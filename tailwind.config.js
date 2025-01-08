/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#9F2CBF",
        secondary: "#5FA0D9",
        bg: "#15216B",
      },
      animation: {
        fadeIn: "fadeIn 1.5s ease-in-out",
        slideIn: "slideIn 1.2s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideIn: {
          "0%": { transform: "translateY(50px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
    },
    plugins: [],
  },
};
