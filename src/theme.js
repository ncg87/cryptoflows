import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Primary blue
    },
    secondary: {
      main: '#dc004e', // Secondary red
    },
    background: {
      default: '#f5f5f5', // Light gray
      paper: '#ffffff', // White for cards and containers
    },
    text: {
      primary: '#000000', // Black
      secondary: '#6d6d6d', // Gray
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    body1: {
      fontSize: '1rem',
    },
  },
  spacing: 8, // Default spacing (1 unit = 8px)
});

export default theme;
