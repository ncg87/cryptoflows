import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import VolumePage from '../pages/VolumePage';
import TokenPage from '../pages/TokenPage';
import DEXPage from '../pages/DEXPage';
import TokenIndex from '../pages/TokenIndex';
import DEXIndex from '../pages/DEXIndex';


const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/volume" element={<VolumePage />} />
    <Route path="/tokens" element={<TokenIndex />} />
    <Route path="/dexs" element={<DEXIndex />} />
    <Route path="/tokens/:tokenId" element={<TokenPage />} />
    <Route path="/dexs/:dexId" element={<DEXPage />} />
  </Routes>
);

export default AppRoutes;
