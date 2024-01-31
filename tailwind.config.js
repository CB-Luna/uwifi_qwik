/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundColor: {
        "primary-green": "#00c207",
        "secondary-purple": "#7C47DD",
        "button-green": "#01c938",
      },
      gradientColorStops: {
        "primary-green": "#00c207",
        "secondary-purple": "#7C47DD",
        "button-green": "#01c938",
      },
      colors: {
        "primary-green": "#00c207",
        "secondary-purple": "#7C47DD",
        "button-green": "#01c938",
      },
      borderColor: {
        "primary-green": "#00c207",
        "secondary-purple": "#7C47DD",
        "button-green": "#00c207",
      },
    },
  },
  plugins: [],
};
