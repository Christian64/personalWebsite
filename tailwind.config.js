/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["var(--font-roboto)"],
        ptSerif: ["var(--font-ptSerif)"],
      },
    },
  },
  plugins: [require("daisyui"), "tailwindcss", "autoprefixer"],
  daisyui: {
    themes: ["cupcake"],
  },
};
