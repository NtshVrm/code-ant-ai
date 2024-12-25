/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // screens: {
    //   'mobile': '400px',
    // },
    extend: {
      boxShadow: {
        custom: "0 0 24px 0 rgba(8, 23, 53, 0.16)",
      },
    },
  },
  plugins: [],
};
