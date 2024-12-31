import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import VolumePage from '../pages/VolumePage';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/volume" element={<VolumePage />} />
  </Routes>
);

export default AppRoutes;
