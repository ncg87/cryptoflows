import React from 'react';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppRoutes from './router/AppRoutes';

const App = () => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      minWidth: '100vw',
    }}
  >
    <Navbar />
    <Box
      component="main"
      sx={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <AppRoutes />
    </Box>
    <Footer />
  </Box>
);

export default App;
