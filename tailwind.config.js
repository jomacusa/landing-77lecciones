/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          verdeOscuro: "#0d1f1a",
          dorado: "#d4af37",
        },
      },
    },
    plugins: [],
  }