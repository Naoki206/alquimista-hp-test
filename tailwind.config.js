module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    groupLevel: 10,
    groupScope: 'scope',
    groupVariants: ['hover', 'focus'],
    extend: {
      colors: {
        darkBlue: '#0A293E',
        paleOrange: '#F2F2F2',
        lightGreen: '#41C9B4',
      },
      padding: {
        '1120px': '1120px',
      },
      maxHeight: {
        '500px': '500px',
      },
      height: {
        '750px': '750px',
      },
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'group-hover', 'group-focus'],
    textColor: ['responsive', 'hover', 'focus', 'group-hover', 'group-focus'],
    extend: {},
  },
  // eslint-disable-next-line global-require
  plugins: [require('tailwindcss-nested-groups')],
};
