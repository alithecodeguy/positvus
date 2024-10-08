// libraries
import { createThemes } from 'tw-colors';

// types
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    colors: {},
    screens: {
      mobile: '320px',
      desktop: '1440px'
    },
    extend: {
      fontFamily: {
        space_grotesk: ['var(--font-space-grotesk)']
      }
    }
  },
  plugins: [
    createThemes({
      light: {
        primary: {
          green: '#B9FF66',
          black: '#191A23',
          gray: '#F3F3F3'
        }
      }
    })
  ]
};
export default config;
