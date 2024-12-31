import React from 'react';
import BaseLayout from '../components/BaseLayout';
import { Typography } from '@mui/material';

const VolumePage = ({ volumeData }) => (
  <BaseLayout>
      <Typography variant="h4" gutterBottom>
        Volume Page
      </Typography>
      <Typography variant="body1">
        Displays the volume of transactions across various decentralized exchanges.
      </Typography>
  </BaseLayout>
);

export default VolumePage;
