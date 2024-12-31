import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme } from './theme';
import './styles/global.css';
import './styles/variables.scss';

const container = document.getElementById('root');
const root = createRoot(container); // Create the root

root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
