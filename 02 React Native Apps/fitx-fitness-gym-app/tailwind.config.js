/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#E41826",
        secondary: "#1E1E1E",
        lightWhite: "#FDFDFE",
        // button: {
        // bordered: {
        //   background: "transparent",
        //   text: { light: "#2F58BF", dark: "#ECF2FE" },
        //   border: { light: "#2F58BF", dark: "#ECF2FE" },
        // },
        // link: { text: { dark: "#63CDF6", light: "#2F58BF" } },
        // },
        light: {
          100: "#FDFDFE",
          200: "#ECF2FE",
          300: "#DDEAFE",
          400: "#CEDFFE",
          500: "#BAD1FD",
          600: "#A2BFF7",
          700: "#82A5EC",
          800: "#2F58BF",
          900: "#1A2E5A",
        },
        dark: {
          100: "#F9FDFF",
          200: "#DFF5FF",
          300: "#C8F0FE",
          400: "#AEE8FE",
          500: "#8FDDFC",
          600: "#63CDF6",
          700: "#00AFE7",
          800: "#007FB2",
          900: "#003B58",
        },
        neutral: {
          100: "#F7FAFC",
          200: "#EDF2F7",
          300: "#E2E8F0",
          400: "#CBD5E0",
          500: "#A0AEC0",
          600: "#718096",
          700: "#4A5568",
          800: "#2D3748",
          900: "#1A202C",
        },
        bg: {
          default: { light: "#F7FAFC", dark: "#000A1F" },
        },
      },
      // fontFamily: {
      //   satoshi: ["Satoshi", "sans-serif"],
      //   "clash-display": ['"Clash Display"', "sans-serif"],
      // },
    },
  },
  plugins: [],
};
