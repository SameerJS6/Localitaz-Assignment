/** @type {import('tailwindcss').Config} */

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        shoeGray: withOpacity("--shoeGray"),
        shoeDark: withOpacity("--shoeDark"),
        shoeDarkBrown: withOpacity("--shoeDarkBrown"),
        shoeBrown: withOpacity("--shoeBrown"),
        shoeOrange: withOpacity("--shoeOrange"),
        shoeLightOrange: withOpacity("--shoeLightOrange"),
        shoeBackground: withOpacity("--shoeBackground"),
      },
    },
  },
  plugins: [],
};
