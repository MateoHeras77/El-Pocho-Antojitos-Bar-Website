/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f7f9e9',
          100: '#e9efc7',
          200: '#d5e29a',
          300: '#bbd066',
          400: '#a3be3f', // avocado green
          500: '#84a022',
          600: '#648119',
          700: '#496016',
          800: '#324015',
          900: '#213010',
        },
        secondary: {
          50: '#fef2f2',
          100: '#fde3e3',
          200: '#fcc8c8',
          300: '#f99f9f',
          400: '#f56565', // vibrant red
          500: '#e53e3e',
          600: '#c53030',
          700: '#9b2c2c',
          800: '#822727',
          900: '#6a2121',
        },
        accent: {
          50: '#fff8f1',
          100: '#feecdc',
          200: '#fcd9bd',
          300: '#fbbd90',
          400: '#f8a366', // warm orange
          500: '#ed8936',
          600: '#dd6b20',
          700: '#c05621',
          800: '#9c4221',
          900: '#7b341e',
        },
        copper: {
          50: '#faf6f3',
          100: '#f0e7df',
          200: '#e0cdc1',
          300: '#cda998',
          400: '#b3876f', // copper
          500: '#9d6b55',
          600: '#8d5742',
          700: '#7c4735',
          800: '#6a3a2f',
          900: '#5d3428',
        },
        charcoal: {
          50: '#f7f7f7',
          100: '#e3e3e3',
          200: '#c8c8c8',
          300: '#a4a4a4',
          400: '#818181',
          500: '#666666',
          600: '#515151',
          700: '#434343',
          800: '#383838', // deep charcoal
          900: '#121212',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'warm': '0 4px 14px 0 rgba(255, 255, 255, 0.1)',
      },
      backgroundImage: {
        'texture': "url('/images/texture.webp')",
      },
    },
  },
  plugins: [],
};