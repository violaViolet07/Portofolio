import React from 'react';
import { Box } from '@mui/material';
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';

const Home = () => {
  return (
    <>
      <Box sx={{ minHeight: '100vh', position: 'relative' }}>
        <Navbar />
        <Header />
      </Box>
      <Footer />
    </>
  );
};

export default Home;
