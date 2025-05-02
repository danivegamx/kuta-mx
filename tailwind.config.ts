import { Caveat } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        purple: '#594C81',
        yellow: '#DFA43E',
        blue:'#338EAF',
        lightYellow: '#FFEAC4',
        bgYellow: '#FFE7A7',
        bgPurple: '#CEC8DF',
        lightPink: '#FCF3F3',
        lightBlue: '#D0E8F1',
        lightPurple: "#A69CC4",
        gradientBlue: '#D5EBF3',
        gradientPurple: '#D2C5F9',
      },
      fontFamily: {
        inter: 'var(--font-inter)',
        kulim: 'var(--font-kulim)',
        caveat: 'var(--font-caveat)'
      },
      screens:{
        lg: '1024px',
      }
    },
  },
  plugins: [],
};
export default config;
