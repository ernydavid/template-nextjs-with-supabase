import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/ui/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background-color)',
        foreground: 'var(--foreground-color)',
        focus: 'rgb(var(--focus-color) / <alpha-value>)',
        primary: {
          50: '#001731',
          100: '#002e62',
          200: '#004493',
          300: '#005bc4',
          400: '#006FEE',
          500: '#338ef7',
          600: '#66aaf9',
          700: '#99c7fb',
          800: '#cce3fd',
          900: '#e6f1fe',
          DEFAULT: '#006FEE'
        },
        secondary: {
          50: '#180828',
          100: '#301050',
          200: '#481878',
          300: '#6020a0',
          400: '#7828c8',
          500: '#9353d3',
          600: '#ae7ede',
          700: '#c9a9e9',
          800: '#e4d4f4',
          900: '#f2eafa',
          DEFAULT: '#9353d3'
        },
        success: {
          50: '#052814',
          100: '#095028',
          200: '#0e793c',
          300: '#12a150',
          400: '#17c964',
          500: '#45d483',
          600: '#74dfa2',
          700: '#a2e9c1',
          800: '#d1f4e0',
          900: '#e8faf0',
          DEFAULT: '#17c964'
        },
        warning: {
          50: '#312107',
          100: '#62420e',
          200: '#936316',
          300: '#c4841d',
          400: '#f5a524',
          500: '#f7b750',
          600: '#f9c97c',
          700: '#fbdba7',
          800: '#fdedd3',
          900: '#fefce8',
          DEFAULT: '#f5a524'
        },
        danger: {
          50: '#310413',
          100: '#610726',
          200: '#920b3a',
          300: '#c20e4d',
          400: '#f31260',
          500: '#f54180',
          600: '#f871a0',
          700: '#faa0bf',
          800: '#fdd0df',
          900: '#fee7ef',
          DEFAULT: '#f31260'
        },
        divider: 'rgb(var(--divider-color) / <alpha-value>)'
      }
    }
  },
  plugins: []
}
export default config
