import {createMuiTheme} from '@material-ui/core';

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1360,
      xl: 1960,
      xxl: 2480
    }
  },
  overrides: {
    MuiButton: {
      root: {
        fontSize: '1.6rem',
        lineHeight: '1.9rem',
        fontWeight: 'bold',
        textTransform: 'none',
        text: {
          color: '#FFFCFE'
        },
        borderRadius: '0.5rem'
      }
    },
    MuiAvatar: {
      root: {
        width: '5rem',
        height: '5rem'
      }
    },
    MuiPaginationItem: {
      root: {
        width: '3rem',
        height: '3rem',
        margin: '0 0.45rem',
        backgroundColor: '#E2E8F0',
        color: '#2C5282',
        fontSize: '1.6rem',
        lineHeight: '1.9rem',
        fontWeight: 'bold'
      }
    },
    MuiAppBar: {
      root: {
        padding: '1.5rem 3.8rem 1.5rem 7rem'
      }
    }
  },
  props: {
    MuiTypography: {
      variantMapping: {
        h1: 'h1',
        h2: 'h2',
        h3: 'h3',
        h4: 'h4',
        h5: 'h5',
        h6: 'h6',
        body1: 'span',
        body2: 'span',
        subtitle1: 'span'
      }
    }
  },
  typography: {
    fontFamily: 'Roboto',
    htmlFontSize: 10,
    h1: {
      fontSize: '1.8rem',
      fontWeight: 'normal'
    },
    h2: {
      fontSize: '1.6rem'
    },
    h3: {
      fontSize: '1.4rem'
    },
    body1: {
      fontSize: '1.8rem',
      lineHeight: '2.1rem'
    },
    subtitle1: {
      fontSize: '1.6rem',
      lineHeight: '1.9rem'
    },
    body2: {
      fontSize: '1.4rem',
      lineHeight: '1.6rem'
    },
    h6: {
      fontSize: '1.8rem',
      lineHeight: '2.1rem'
    }
  },
  palette: {
    primary: {
      main: '#2A4365'
    },
    secondary: {
      main: '#2C5282'
    },
    action: {
      selected: '#2A4365'
    },
    text: {
      secondary: '#A0AEC0',
      primary: '#4299E1'
    },
    error:{
      main: '#FC8181'
    },
    success:{
      main: '#9AE6B4'
    },
    warning:{
      main: '#FBD38D'
    }
  }
});

export default theme;
