/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgba(213, 248, 207, 1)",
        secondary: "rgba(11, 164, 45, 1)",
        danger: "rgba(13, 38, 18, 1)",
        success: "rgba(33, 213, 17, 1)",
      },
  },
  plugins: [],
}
}

