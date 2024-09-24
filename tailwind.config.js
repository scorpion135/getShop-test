/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,jsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./shared/components/**/*.{js,jsx}",
    "./shared/sections/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    screens: {
      sm: "321px",
      md: "769px",
      lg: "1440px",
    },
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["14px", "24px"],
      base: ["16px", "32px"],
      lg: ["18px", "22px"],
      xl: ["22px", "32px"],
      "2xl": ["24px", "32px"],
      "3xl": ["32px", "120px"],
      "4xl": ["80px", "110px"],
      "8xl": ["96px", "106px"],
    },
    extend: {
      fontFamily: {
        onest: ["var(--font-onest)"],
      },
      colors: {
        primary: "#E8EDEC",
        white: "#FFFFFF",
        gray1: "#A4ADAC",
        gray2: "#D6DBDB",
        gray3: "#E8EDEE",
        gray4: "#F2F6F6",
        black: "#1D1D1B",
        orange: "#FF5900",
        darkOrange: "#E0570E",
        error: "#FF4026",
      },
    },
  },
  plugins: [],
};
