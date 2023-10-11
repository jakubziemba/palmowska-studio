/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      lightblue: "var(--color-lightblue)",
      dark: "var(--color-dark)",
      gray: "var(--color-gray)",
      lightbrown: "var(--color-lightbrown)",
      black: "var(--color-black)",
      white: "var(--color-white)",
      pink: "var(--color-pink)",
      washedgreen: "var(--color-washedgreen)",
      pastelgreen: "var(--color-pastelgreen)",
      charcoal: "var(--color-charcoal)",
      lilac: "var(--color-lilac)",
      projects: "var(--color-projects)",
    },
    fontSize: {
      xs: "var(--fs-xs)",
      sm: "var(--fs-sm)",
      base: "var(--fs-base)",
      md: "var(--fs-md)",
      lg: "var(--fs-lg)",
      xl: "var(--fs-xl)",
      h3: "var(--fs-h3)",
      h2: "var(--fs-h2)",
      h1: "var(--fs-h1)",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        serif: ["var(--font-serif)", "serif"],
      },
      spacing: {
        "page-mobile": "var(--page-padding-mobile)",
        "page-desktop": "var(--page-padding-desktop)",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
