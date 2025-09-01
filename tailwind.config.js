/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'cinzel': ['Cinzel', 'serif'],
        'crimson': ['Crimson Text', 'serif'],
      },
      colors: {
        'medieval-gold': '#ffd700',
        'medieval-brown': '#8b4513',
        'medieval-dark': '#1a1a2e',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite',
        'pulse-gold': 'pulse-gold 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 215, 0, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(255, 215, 0, 0.6)' },
        },
        'pulse-gold': {
          '0%, 100%': { textShadow: '0 0 5px #ffd700' },
          '50%': { textShadow: '0 0 15px #ffd700, 0 0 25px #ffd700' },
        }
      }
    },
  },
  plugins: [],
}
