/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      flexBasis: {
        20: "20%",
        80: "80%",
      },
      height: {
        90: "90%",
      },
      colors: {
        SidemenuBg: "#2D41A7",
        bodybg: "#FFFFFF",
        titlecolor: "#000000",
        hovercolor: "#CFDCEC",
        textColor: "#FFFFFF",
        colorone: "#f6eff4",
        colortwo: "#fbf0ef",
        colorthree: "#f1fcf0",
        colorfour: "#fcf8ef",
        gradient: "linear-gradient(rgb(56,194,166),rgb(124,83,151))",
      },

      
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
};
