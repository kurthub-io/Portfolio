import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeDown: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeLeft: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeRight: {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.8s ease-in-out forwards",
        fadeOut: "fadeOut 0.8s ease-in-out forwards",
        fadeUp: "fadeUp 0.8s ease-in-out forwards",
        fadeDown: "fadeDown 0.8s ease-in-out forwards",
        fadeLeft: "fadeLeft 0.8s ease-in-out forwards",
        fadeRight: "fadeRight 0.8s ease-in-out forwards",
      },
      colors: {
        primary: "#00bcd4",
      },
      scrollBehavior: ["smooth"],
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        mydark: {
          primary: "#00bcd4",
          secondary: "#1c1c28",
          accent: "#37cdbe",
          neutral: "#2a2e37",
          "base-100": "#0d0d14",
          "base-200": "#13131c",
          "base-300": "#1a1a24",
          info: "#3abff8",
          success: "#36d399",
          warning: "#fbbd23",
          error: "#f87272",
        },
      },
      {
        mylight: {
          primary: "#00bcd4",
          secondary: "#e2e2e2",
          accent: "#37cdbe",
          neutral: "#f5f5f5",
          "base-100": "#ffffff",
          "base-200": "#f9f9f9",
          "base-300": "#e6e6e6",
          info: "#3abff8",
          success: "#36d399",
          warning: "#fbbd23",
          error: "#f87272",
        },
      },
    ],
  },
};
