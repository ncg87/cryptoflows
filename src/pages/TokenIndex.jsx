import React from 'react';
import { Typography } from '@mui/material';
import BasePage from '../components/BasePage';
import TokenData from '../components/lists/TokenData';

const TokenIndex = () => (
  // Pass sx param to base page if there are specific styles needed
  <BasePage>
    <TokenData />
  </BasePage>
);

export default TokenIndex;
