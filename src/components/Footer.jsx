import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => (
  <Box
    component="footer"
    sx={{
        width: '100%',
        textAlign: 'center',
        py: 2,
        mt: 'auto', // Push footer to the bottom
        borderTop: '1px solid', // Add a subtle border
        borderColor: 'var(--text-secondary)', // Use theme's text color for the border
    }}
  >
    <Typography variant="body2">
      &copy; 2024 CryptoFlows.ai. All rights reserved.
    </Typography>
  </Box>
);

export default Footer;
