import React from 'react';
import { Typography } from '@mui/material';
import BasePage from '../components/BasePage';
import TokenData from '../components/lists/TokenData';
import { useParams } from "react-router-dom";

const DEXPage = () => {
  const { dexId } = useParams();
  //console.log('DEXPage:', dexId);
    return (
      <BasePage>
        <Typography variant="h4" gutterBottom>
        DEX: {dexId} Volume
      </Typography>
      <TokenData dexId={dexId} />
    </BasePage>
  );
};

export default DEXPage;
