import React from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navbar = () => (
  <AppBar position="static" sx={{ backgroundColor: 'var(--primary-color)', color: 'var(--text-color)' }}>
    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Box>
        <Button component={Link} to="/" sx={{ color: 'var(--text-color)', fontWeight: 600 }}>
          Home
        </Button>
        <Button component={Link} to="/volume" sx={{ color: 'var(--text-color)', fontWeight: 600 }}>
          Volume
        </Button>
      </Box>
      <ThemeToggle />
    </Toolbar>
  </AppBar>
);

export default Navbar;
