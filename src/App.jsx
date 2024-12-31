import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import VolumePage from './pages/VolumePage';

const App = () => (
  <Router>
    <Navbar />
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/volume" element={<VolumePage />} />
      </Routes>
    </Container>
    <Footer />
  </Router>
);

export default App;

