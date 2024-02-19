import { type Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--primary)/<alpha-value>)",
        secondary: "rgb(var(--secondary)/<alpha-value>)",
        tertiary: "rgb(var(--tertiary)/<alpha-value>)",
        space: "rgb(var(--space)/<alpha-value>)",
      },
      fontFamily: {
        sans: ["Maven Pro", ...defaultTheme.fontFamily.sans],
      },
      animation: {
        "up-down": "up-down 1s alternate infinite",
        spotlight: "spotlight 2s ease .75s 1 forwards",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
      },
      fontSize: {
        "9xl": "10rem",
        "10xl": "12rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
