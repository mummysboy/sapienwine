import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        wine: {
          50: '#fdf2f2',
          100: '#fce7e7',
          200: '#f9d1d1',
          300: '#f4abab',
          400: '#ed7878',
          500: '#e24f4f',
          600: '#d03030',
          700: '#ae2525',
          800: '#902323',
          900: '#782323',
        },
      },
    },
  },
  plugins: [],
}
export default config

