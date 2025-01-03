import React from 'react';
import { Typography } from '@mui/material';
import BasePage from '../components/BasePage';
import VolumeData from '../components/VolumeData';

const VolumePage = () => (
  // Pass sx param to base page if there are specific styles needed
  <BasePage>
    <VolumeData />
  </BasePage>
);

export default VolumePage;
