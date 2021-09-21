module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    groupLevel: 10,
    groupScope: 'scope',
    groupVariants: ['hover', 'focus'],
    extend: {
      colors: {
        darkBlue: '#0B293F',
        paleOrange: '#F2F2F2',
        lightGreen: '#41C9B4',
      },
      padding: {
        '1120px': '1120px',
        '900px': '900px',
        '350px': '350px',
      },
      maxHeight: {
        '500px': '500px',
        '426px': '426px',
      },
      maxWidth: {
        '557px': '557px',
        '487px': '487px',
      },
      height: {
        '750px': '750px',
      },
      lineHeight: {
        '85px': '85px',
        '60px': '60px',
      },
      fontSize: {
        '72px': '72px',
        '48px': '48px',
        '1.5xl': '1.4rem',
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
