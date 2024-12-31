import React from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navbar = () => (
  <AppBar
    position="static"
    sx={{
      backgroundColor: 'var(--primary-color)', // Use SCSS variable
      color: 'var(--text-primary)', // Use SCSS variable
      width: '100%',
    }}
  >
    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', px: 'var(--base-spacing)' }}>
      <Box>
        <Button
          sx={{
            color: 'var(--text-primary)', // Use text color from SCSS variable
            fontWeight: 600,
          }}
          component={Link}
          to="/"
        >
          Home
        </Button>
        <Button
          sx={{
            color: 'var(--text-primary)', // Use text color from SCSS variable
            fontWeight: 600,
          }}
          component={Link}
          to="/volume"
        >
          Volume
        </Button>
      </Box>
      <ThemeToggle /> {/* Add the toggle button here */}
    </Toolbar>
  </AppBar>
);

export default Navbar;
