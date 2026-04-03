import React from 'react';
import { Box } from '@mui/material';
import Navbar from './Navbar';
import Header from './Header';
import ParticlesComponent from './ParticlesComponent';
import Footer from './Footer';

const Home = () => {
  return (
    <>
      <Box sx={{ minHeight: '100vh', position: 'relative' }}>
        <Navbar />
        <Header />
        <ParticlesComponent />
      </Box>
      <Footer />
    </>
  );
};

export default Home;
