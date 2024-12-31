import React from 'react';
import { Typography } from '@mui/material';
import BasePage from '../components/BasePage';
import VolumeData from '../components/VolumeData';

const VolumePage = () => (
  // Pass sx param to base page if there are specific styles needed
  <BasePage>
    <Typography variant="h4" gutterBottom>
      Volume Page
    </Typography>
    <Typography variant="body1">
      Displays the volume of transactions across various decentralized exchanges.
    </Typography>
    <VolumeData />
  </BasePage>
);

export default VolumePage;
