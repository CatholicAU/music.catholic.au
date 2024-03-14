import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "subtle-paper": "url('../public/assets/images/subtle-paper-01.jpg')",
        "green-leather": "url('../public/assets/images/green-leather.avif')",
        "dark-green": "url('../public/assets/images/dark-green.png')",
      },
      colors: {
        'primary': {
          100: 'hsla(150,20%,98%,1)',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
};
export default config;
