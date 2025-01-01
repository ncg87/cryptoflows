import React from 'react';
import { Box } from '@mui/material';

const BasePage = ({ children, sx = {} }) => (
  <Box
    component="main"
    sx={{
      boxSizing: 'border-box', // Include padding and border in the element's total width and height
      flex: 1, // Ensure the main content takes up the full height of the container
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
