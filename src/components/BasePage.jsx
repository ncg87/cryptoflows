import React from 'react';
import { Box } from '@mui/material';

const BasePage = ({ children, sx = {} }) => (
  <Box
    component="main"
    sx={{
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      padding: '2rem',
      width: '100%', // Ensure full-width layout
      ...sx, // Allow additional custom styles
    }}
  >
    {children}
  </Box>
);

export default BasePage;
