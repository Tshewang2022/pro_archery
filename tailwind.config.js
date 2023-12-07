/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#080A16",
        lightBlue: "#2E3043",
      },
    },
  },
  plugins: [],
};
