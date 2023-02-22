/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: 'Poppins',
        poppinsBold: 'PoppinsBold',
        plusJakartaSansBold: 'PlusJakartaSansBold',
      },
      colors: {
        backgroundColor: '#01162D',
        cardGradientFrom: '#213356',
        cardGradientTo: '#0C182F',
        blueOnBackgroud: '#88BFE8',
      },
    },
  },
  plugins: [],
}
