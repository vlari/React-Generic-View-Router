import { createMuiTheme } from '@material-ui/core';

export const defaultTheme = createMuiTheme({
  palette: {
    primary: {
      light: '#ff6675',
      main: '#ff3d51',
      dark: '#ff3347',
      contrastText: '#fff',
    },
    secondary: {
      light: '#f8d687',
      main: '#f6cb63',
      dark: '#f5c656',
      contrastText: '#262626',
    },
    background: {
      paper: '#fff',
      default: '#F3F6FD',
    },
  },
  customStyles: {
    formButtonSubmit: {
      background: '#ff3d51',
      color: '#FFFFFF',
      margin: '10px',
      '&:hover': {
        background: '#ff3347',
      },
    },
    formButtonRemove: {
      background: '#d74242',
      color: '#FFFFFF',
      margin: '10px',
      '&:hover': {
        background: '#d22d2d',
      },
    },
    cardLayout: {
      background: '#FFFFFF',
      boxShadow: '1px 1px 22px -20px rgba(0,0,0,0.64)',
      borderRadius: '22px',
    },
  },
});
