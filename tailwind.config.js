/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg1':"url('/img/fernandaromano.webp')",
        'bg2':"url('/img/fernandaromano2.webp')",
      }
    }
  },
  tailwindConfig: './styles/tailwind.config.js',
  plugins: [require("daisyui")],
}
