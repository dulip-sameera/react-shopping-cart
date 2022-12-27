/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "762px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        customBlack: "#0B0C10",
        customDarkGrey: "#1F2833",
        customLightGrey: "#C5C6C7",
        customCyan: "#66FCF1",
        customDarkCyan: "#45A29E",
      },
    },
  },
  plugins: [],
};
