/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './{src,pages,components,app}/**/*.{ts,tsx,js,jsx,html}',
    '!./{src,pages,components,app}/**/*.{stories,spec}.{ts,tsx,js,jsx,html}',
    '../../libs/shared-ui/src/**/*.{ts,tsx,js,jsx,html}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
