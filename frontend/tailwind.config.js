/** @type {import('tailwindcss').Config} */
export default {
  content: [
    '.index.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      colors: {
        'primary': '#1aac83',
        'error': '#e7195a',
      },
    },
  },
  plugins: [],
}

