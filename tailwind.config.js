// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Enable dark mode via a "dark" class on an element, e.g. <html class="dark"> or <body class="dark">
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // ...other paths as needed
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
