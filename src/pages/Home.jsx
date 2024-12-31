import React from 'react';
import { Typography } from '@mui/material';
import BasePage from '../components/BasePage';

const Home = () => (
  <BasePage>
    <Typography variant="h4" gutterBottom>
      Welcome to CryptoFlows.ai
    </Typography>
    <Typography variant="body1">
      We track cryptocurrency volumes and transactions across various decentralized exchanges.
    </Typography>
  </BasePage>
);

export default Home;
