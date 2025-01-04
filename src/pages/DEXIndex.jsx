import React from 'react';
import { Typography } from '@mui/material';
import BasePage from '../components/BasePage';
import DEXData from '../components/lists/DEXData';

const DEXIndex = () => (
  // Pass sx param to base page if there are specific styles needed
  <BasePage>
    <Typography variant="h4" gutterBottom>DEX Data</Typography>
    <Typography variant="body1">
        Displays the total volume of transactions in USD of tracked decentralized exchanges.
    </Typography>
    <DEXData />
  </BasePage>
);

export default DEXIndex;
