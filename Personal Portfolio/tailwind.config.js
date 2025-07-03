export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        firacode: ['Fira Code', 'monospace'],
      },
      colors: {
        neon: '#00fff7',
        purple: '#8a2be2',
        greenish: '#39ff14',
        lightGray: '#e0e0e0',
        darkBg: '#0d0d0d',
      },
      boxShadow: {
        glow: '0 0 10px #00fff7, 0 0 20px #8a2be2',
      },
    },
  },
  plugins: [],
}
