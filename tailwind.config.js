/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      transparent: 'transparent',
      primary: {
        100: 'hsl(326, 60%, 80%)',
        200: 'hsl(326, 60%, 60%)',
        300: 'hsl(326, 80%, 32%)',
        400: 'hsl(326, 88%, 26%)',
        500: 'hsl(326, 96%, 20%)',
      },
      secondary: {
        100: 'hsl(140, 60%, 80%)',
        200: 'hsl(140, 60%, 60%)',
        300: 'hsl(140, 71%, 36%)',
        400: 'hsl(140, 80%, 28%)',
        500: 'hsl(140, 96%, 22%)',
      },
      neutral: {
        100: 'hsl(0, 0%, 100%)',
        200: 'hsl(30, 10%, 96%)',
        300: 'hsl(30, 12%, 92%)',
        400: 'hsl(30, 12%, 88%)',
        500: 'hsl(30, 13%, 83%)',
        600: 'hsl(30, 6%, 55%)',
        700: 'hsl(30, 8%, 31%)',
        800: 'hsl(30, 9%, 22%)',
        900: 'hsl(30, 2%, 16%)',
      },
      dark: {
        100: 'hsl(30, 3%, 12%)',
      },
    },
    extend: {},
  },
  plugins: [],
  darkMode: ['class', '.darkmode'],
}
