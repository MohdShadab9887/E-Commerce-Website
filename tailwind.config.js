/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: { min: "120px", max: "639px" },
        md2: { min: "640px", max: "900px" },
      },
    },
  },
  plugins: [],
};
