import React from 'react';
import { Box } from '@mui/material';

const BaseLayout = ({ children }) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100%',
      backgroundColor: 'var(--background-default)', // Background from SCSS variables
      color: 'var(--text-primary)', // Text color from SCSS variables
    }}
  >
    <Box
      component="main"
      sx={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        px: 'var(--base-spacing)', // Padding from SCSS variables
        py: 'calc(var(--base-spacing) * 2)', // Responsive spacing
        maxWidth: '1200px', // Ensure content doesn't stretch too wide
        margin: '0 auto', // Center content
      }}
    >
      {children}
    </Box>
  </Box>
);

export default BaseLayout;
