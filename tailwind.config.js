/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
        serif: ['var(--font-serif)', 'serif'],
      },
      colors: {
        lightblue: 'var(--color-lightblue)',
      },
      spacing: {
        'page-mobile': 'var(--page-padding-mobile)',
        'page-desktop': 'var(--page-padding-desktop)',
      },
    },
  },
  plugins: [],
};
