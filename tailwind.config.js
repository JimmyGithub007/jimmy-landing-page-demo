module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        opacity: {
          '0%': { opacity: '0', transform: 'translateY(-25%)' },
          '100%': { opacity: '100', transform: 'translateY(0)' },
        },
      },
      animation: {
        opacity: 'opacity 2s',
      }
    },
  },
  plugins: [],
}