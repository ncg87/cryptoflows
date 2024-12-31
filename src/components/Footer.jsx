import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => (
  <Box
    component="footer"
    sx={{
      width: '100vw',
      backgroundColor: 'var(--background-default)', // Use SCSS variable for background
      color: 'var(--text-secondary)', // Use SCSS variable for text color
      textAlign: 'center',
      py: 'var(--base-spacing)', // Use SCSS variable for spacing
      mt: 'auto', // Ensure the footer is pushed to the bottom
      borderTop: '1px solid var(--text-secondary)', // Optional: subtle border
    }}
  >
    <Typography variant="body2">
      &copy; 2024 CryptoFlows.ai. All rights reserved.
    </Typography>
  </Box>
);

export default Footer;
