/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '320px',
        // => @media (min-width: 365px) { ... }

        md: '768px',
        // => @media (min-width: 768px) { ... }

        lg: '1024px',
        // => @media (min-width: 1024px) { ... }

        xl: '1440px',
        // => @media (min-width: 1440px) { ... }
      },
      spacing: {
        1: '8px',
        2: '12px',
        3: '16px',
        4: '24px',
        5: '32px',
        6: '48px',
      },
      colors: {
        tomato: 'hsla(0, 79%, 63%, 1)',
        grey: '#BDBDBD',
        blueShade: '#2F80ED',
        black: 'hsla(0, 0%, 20%, 1)',
      },
      fontFamily: {
        roboto: ['Roboto'],
        serif: ['Merriweather', 'serif'],
      },
      borderRadius: {
        none: '0',
        sm: '.125rem', //2px
        DEFAULT: '.25rem', // 4px
        md: '.375rem', //'6px'
        lg: '.5rem', //'8px'
        full: '9999px',
      },
    },
  },
  plugins: [],
}
