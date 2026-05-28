import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 40px rgba(249, 115, 22, 0.16)',
        soft: '0 20px 80px rgba(15, 23, 42, 0.14)'
      },
      backgroundImage: {
        'hero-radial': 'radial-gradient(circle at top left, rgba(249,115,22,0.22), transparent 38%), radial-gradient(circle at bottom right, rgba(139,92,246,0.16), transparent 24%)'
      },
      colors: {
        brand: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          500: '#fb923c',
          600: '#f97316'
        }
      }
    }
  },
  plugins: []
};

export default config;
