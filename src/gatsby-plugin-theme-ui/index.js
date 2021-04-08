const theme = {
  colors: {
    text: '#000000',
    background: '#f7f7f7',
    lightGrey: '#dddddd',
    white: '#ffffff',
    primary: '#3300cc',
    error: '#ff0000',
    lemon: '#3c82f0',
    desktopFirst: '#FEE46D'
  },

  breakpoints: ['576px', '768px', '992px', '1200px', '1400px'],

  fonts: {
    body: 'system-ui, "arial"',
    heading: 'system-ui, "arial"'
  },

  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700
  },

  lineHeights: {
    body: 1.5,
    heading: 1.125
  },

  shadows: [
    '0px 0px 25px -10px rgba(0,0,0,0.20)',
    '0px 0px 50px -10px rgba(0,0,0,0.20)'
  ],

  radii: [0, 8],

  sizes: {
    container: 840
  },

  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontSize: 1
    },
    a: {
      color: 'primary',
      cursor: 'pointer'
    },
    p: {
      code: {
        p: 1,
        borderRadius: 1,
        backgroundColor: 'lightGrey',
        fontSize: 0
      }
    },
    back: {
      variant: 'style.a'
    },
    main: {
      mt: 5
    },
    header: {
      p: 3,
      boxShadow: 0,
      a: {
        variant: 'style.a',
        textDecoration: 'none',
        color: 'text'
      }
    },
    hr: {
      color: 'background',
      my: 4
    }
  },
  layout: {
    container: {
      p: 3
    }
  },

  buttons: {
    primary: {
      cursor: 'pointer',
      fontWeight: 'bold',
      fontSize: 0
    }
  },

  cards: {
    default: {
      overflow: 'hidden',
      borderRadius: 1,
      boxShadow: 1
    },
    primary: {
      variant: 'cards.default',
      img: {
        borderRadius: '100%',
        overflow: 'hidden'
      },
      a: {
        textDecoration: 'none',
        color: 'text'
      },
      transition: '.15s cubic-bezier(0.47, 0, 0.75, 0.72) transform',
      ':hover': {
        transform: 'translateY(-3px)'
      }
    },
    secondary: {
      variant: 'cards.default'
    },
    body: {
      p: 4
    }
  }
};

export default theme;
