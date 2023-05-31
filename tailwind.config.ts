import { type Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
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
      },
      fontSize: {
        "9xl": "10rem",
        "10xl": "12rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
