import { createTheme } from '@mui/material/styles';

//custom theme allows to modify the default styling of components at a global level
export const theme = createTheme({
  palette: {
    primary: {
      main: '#1D5692',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'white',
          boxShadow: 'none',
        },
      },
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 400,
      marginBottom: '1rem',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 200,
      marginBottom: '0.8rem',
    },
    h3: {
      fontSize: '1.8rem',
      fontWeight: 200,
      marginBottom: '0.6rem',
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 200,
      marginBottom: '0.4rem',
    },
    h5: {
      fontSize: '1.2rem',
      fontWeight: 200,
      marginBottom: '0.2rem',
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 200,
      marginBottom: '0.2rem',
    },
  },
});

