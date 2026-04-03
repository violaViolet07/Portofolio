import React from 'react';
import { Box, Typography } from '@mui/material';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

const skills = [
  'Windows Server',
  'Active Directory',
  'DNS',
  'DHCP',
  'TCP/IP',
  'MikroTik',
  'Windows Firewall',
  'Hyper-V',
  'Linux',
  'Virtualization',
  'SIEM Fundamentals',
  'Log Analysis',
  'Cloud Threat Analytics',
  'R',
  'Python',
  'SQL',
  'JavaScript',
  'Node.js',
  'React.js',
  'MySQL',
  'MongoDB'
];

const Skills = () => {
  return (
    <Box id="skills" py={10} sx={{ backgroundColor: '#5E548E', color: 'white' }}>
      <Box textAlign="center" mb={10}>
        <TaskAltIcon sx={{ width: '6rem', height: 'auto', color: 'white' }} />
        <Typography variant="h3" mt={4} mb={2}>
          Skills & Technologies
        </Typography>
        <Typography variant="body1" mb={6} mx="auto" sx={{ maxWidth: '75%' }}>
          A blend of cybersecurity, IT infrastructure, troubleshooting, and development skills
          applied across public-sector systems and technical projects.
        </Typography>
      </Box>
      <Box display="flex" flexWrap="wrap" justifyContent="center">
        {skills.map((skill) => (
          <Box key={skill} width={{ xs: '100%', sm: '50%' }} p={2}>
            <Box
              sx={{
                backgroundColor: '#2D3748',
                borderRadius: '0.5rem',
                padding: '1rem',
                display: 'flex',
                alignItems: 'center',
                height: '100%'
              }}
            >
              <TaskAltIcon sx={{ color: '#34D399', width: '1.5rem', height: '1.5rem', marginRight: '0.5rem' }} />
              <Typography variant="body1">{skill}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Skills;
