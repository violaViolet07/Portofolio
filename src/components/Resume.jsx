import React from 'react'
import { Box, ThemeProvider, createTheme } from '@mui/system';
import { Typography } from '@mui/material';
import Navbar from './Navbar';
import ParticlesComponent from './ParticlesComponent';
import Skills from './Skills';


const Resume = () => {
    return (
        <>
        <ParticlesComponent /> 
            <Navbar />
            <br></br>
            
            <Box component="header" className="mainContainer" >
                <br>
                </br>
                <Typography variant="h4" align="center" sx={{ color: 'white' }}>
                    ABOUT ME
                </Typography>

                <Box component="div" sx={{ ml: '20px' }}>
                    
                    <Typography variant ="p"  align="center" sx={{ color: 'white',fontSize: '1.2rem' }}>
                    An inspiring and dedicated recent computer science graduate with 
expertise in a range of programming languages and proficient in 
both relational and non-relational databases.Excited to bring my 
well-rounded technical knowledge to a dynamic role that leverages 
my programming skills, database expertise, and ability to adapt to 
new technologies.

                    </Typography>
                </Box>
</Box>
<Skills />
        </>
    )
}

export default Resume
