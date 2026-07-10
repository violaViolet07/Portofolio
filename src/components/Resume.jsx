import { Box, Typography } from '@mui/material';
import Navbar from './Navbar';
import ParticlesComponent from './ParticlesComponent';
import Skills from './Skills';
import Experience from './Experience';
import Research from './Research';
import Certifications from './Certifications';

const Resume = () => {
  return (
    <div className="page-shell">
      <ParticlesComponent />
      <Navbar />
      <Box component="header" className="resume-hero">
        <span className="cyber-kicker">Profile / 01</span>
        <Typography component="h1" variant="h2" className="section-title" sx={{ mt: 2 }}>
          About me
        </Typography>
        <Typography className="resume-intro">
          I am an IT Specialist and computer science graduate with a foundation in programming,
          web development, and relational and non-relational databases. Today, I apply that
          technical range to public-sector infrastructure, Windows Server, Active Directory,
          networks, virtualization, user support, and security-focused analytics. I enjoy adapting
          quickly, solving practical problems, and presenting technical work clearly.
        </Typography>
      </Box>
      <Experience />
      <Research />
      <Certifications />
      <Skills />
    </div>
  );
};

export default Resume;
