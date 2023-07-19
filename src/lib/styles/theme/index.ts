import { ComponentStyleConfig, extendTheme } from '@chakra-ui/react';

const Button: ComponentStyleConfig = {
  baseStyle: {
    fontWeight: 700,
    opacity: 1,
    _disabled: {
      opacity: 1,
    },
  },
  variants: {
    active: {
      bg: '#085494',
      color: '#fff',
    },
    blurred: {
      bg: '#fff',
      color: '#085494',
      opacity: 0.8,
      _hover: {
        opacity: 1,
      },
    },
  },
};

const Select: ComponentStyleConfig = {
  baseStyle: {
    fontWeight: 700,
    opacity: 1,
    _disabled: {
      opacity: 1,
    },
  },
  variants: {
    active: {
      bg: '#085494',
      color: '#fff',
    },
    blurred: {
      bg: '#fff',
      color: '#085494',
      opacity: 0.8,
      _hover: {
        opacity: 1,
      },
    }
  }
}

const theme = extendTheme({
  components: {
    Button,
    Select
  },
  styles: {
    global: {
      'html, body, #__next': {
        height: '100%',
      },
      'canvas': {
        height: '100% !important',
        width: '100% !important',
      }
    },
  },
  breakpoints: {
    xs: '375px',
    sm: '480px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
  boxShadow: {
    navbar: '0px 1px 0px rgba(0, 0, 0, 0.08);',
  },
  colors: {
    transparent: 'transparent',
    white: '#FFFFFF',
    black: '#000000',
    aquamarine: {
      100: '#DAFFEF',
      500: '#004734',
    },
    indigo: {
      100: '#F3F3FF',
      200: '#DEDDFF',
      300: '#657EFF',
      400: '#0061FC',
    },
    gray: {
      100: '#F6F6F6',
      200: '#E2E2E2',
      300: '#8B8B8B',
      400: '#6F6F6F',
      500: '#3E3E3E',
      600: '#222222',
    },
    orange: {
      200: '#FFDED1',
      300: '#FD4D00',
      400: '#CD3C00',
    },
    southpole: {
      primary: '#085494',
      secondary: '#b6dcfb',

      // Blue sidebar styles
      sidebar: {
        // background: 'linear-gradient(70deg, rgba(0,30,95,1) 0%, #005091 40%)',
        background: '#005091',
        header: 'rgb(255,255,255,0.8)',
        text: 'white',
        subheader: 'rgb(255,255,255,0.6)',
        link: 'rgb(255,255,255,0.9)',
        border: 'rgb(255,255,255,0.2)',
        active: 'rgba(255,255,255,0.2)',
        hover: 'rgba(255,255,255,0.1)',
        supplier:
        {
          active: 'rgba(255,255,255,0.3)',
          background: 'rgba(255,255,255,0.1)'
        },
        button: {
          500: "#005091", // background
          600: "#2769a6", // hovering
          700: '#5d90bc', // clicking	
        },
      },

      button: {
        500: "#005091", // background
        600: "#2769a6", // hovering
        700: '#5d90bc', // clicking	
      },
      'button-white': {
        500: "white", // background
        600: "#F6F6F6", // hovering
        700: '#E2E2E2', // clicking	
      }
    },
  },
  radii: {
    none: '0',
    sm: '2px',
    base: '4px',
    md: '4px',
    lg: '6px',
    xl: '8px',
    '2xl': '16px',
    full: '9999px',
  },
  fonts: {
    body: 'DM Sans, system-ui, sans-serif',
    heading: 'DM Sans, system-ui, sans-serif',
    mono: 'Menlo, monospace',
  },
  fontSizes: {
    xs: '10px',
    sm: '12px',
    md: '14px',
    lg: '16px',
    xl: '18px',
    '2xl': '20px',
    '3xl': '22px',
    '4xl': '24px',
    '5xl': '26px',
    '6xl': '28px',
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 700,
  },
  transition: 'all 0.15s ease-in-out',
});

export default theme;