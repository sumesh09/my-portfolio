export const darkMode = 'class';
export const content = [
  "./index.html",
  "./src/**/*.{js,jsx,ts,tsx,html}"
];
export const theme = {
  extend: {
    colors: {
      // Bold palette (tweak if you want)
      indigo: {
        500: '#6366F1',
        600: '#4F46E5'
      }
    },
    fontFamily: {
      sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial'],
    },
    borderRadius: {
      '2xl': '1rem'
    }
  },
};
export const plugins = [];
