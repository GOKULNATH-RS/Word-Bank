/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#03001C",
      secondary: "#301E67",
      tertiary: "#5B8FB9",
      quaternary: "#88f6d5",
      dark: "#232323",
      white: "#DFDFD6",
      glass: "rgba(255,255,255,0.1)",
      glasshover: "rgba(255,255,255,0.15)",
    },
    extend: {},
  },
  plugins: [],
};
