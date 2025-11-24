/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ninja-orange': '#F97316',
        'ninja-black': '#000000',
        'ninja-dark': '#1a1a1a',
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 3s infinite',
        'float': 'float 3s ease-in-out infinite',
        'slash': 'slash 0.5s ease-out',
        'ninja-run': 'ninja-run 0.6s steps(4) infinite',
        'obstacle-move': 'obstacle-move linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slash: {
          '0%': { transform: 'translateX(-100%) scaleX(0)', opacity: '0' },
          '50%': { transform: 'translateX(0) scaleX(1.2)', opacity: '1' },
          '100%': { transform: 'translateX(100%) scaleX(0)', opacity: '0' },
        },
        'ninja-run': {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '-200px 0' },
        },
        'obstacle-move': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100px)' },
        },
      },
      fontFamily: {
        'ninja': ['Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

