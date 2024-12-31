import React from 'react';
import { Typography, Box } from '@mui/material';
import BaseLayout from '../components/BaseLayout';

const Home = () => (
  <BaseLayout>
    <Box sx={{ textAlign: 'center' }}> {/* Center text content */}
      <Typography variant="h4" gutterBottom>
        Welcome to CryptoFlows.ai
      </Typography>
      <Typography variant="body1">
        We track cryptocurrency volumes and transactions across various decentralized exchanges.
      </Typography>
    </Box>
  </BaseLayout>
);

export default Home;
