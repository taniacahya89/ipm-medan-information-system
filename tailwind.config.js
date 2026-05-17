/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        teal: { DEFAULT: '#1D9E75', light: '#E1F5EE', mid: '#5DCAA5', dark: '#0F6E56', deep: '#085041' },
        blue: { DEFAULT: '#185FA5', light: '#E6F1FB' },
        amber: { DEFAULT: '#BA7517', light: '#FAEEDA' },
        purple: { DEFAULT: '#534AB7', light: '#EEEDFE' },
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        dm: ['"DM Sans"', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
