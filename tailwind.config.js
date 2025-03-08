/** @type {import('tailwindcss').Config} */
import {heroui} from "@heroui/react";
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
    "./app/**/*.{js,jsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};
