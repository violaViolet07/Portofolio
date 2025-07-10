import React from 'react';
import { Box, Typography, Card, CardContent, Chip, Grid } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const Experience = () => {
  const workExperience = {
    position: 'IT Specialist',
    company: 'Pogradec Municipality',
    location: 'Pogradec, Albania',
    period: 'February 2025 - Present',
    responsibilities: [
      'Provided IT support and helpdesk services to over 500 government employees, ensuring the smooth operation of various electronic systems',
      'Diagnosed and resolved hardware and software issues to maintain optimal system performance',
      'Installed, configured, and troubleshot Microsoft Windows operating systems in diverse environments',
      'Administered Windows Server infrastructure, including domain management, server roles, and services',
      'Maintained and resolved issues related to Active Directory, DNS, and DHCP',
      'Implemented and managed network security using Mikrotik Firewall and Windows Firewall',
      'Monitored and managed virtual machines and virtual networks through Microsoft Hyper-V'
    ]
  };

  return (
    <Box id="experience" py={10} sx={{ backgroundColor: '#5E548E', color: 'white' }}>
      <Box textAlign="center" mb={6}>
        <WorkIcon sx={{ width: '6rem', height: 'auto', color: 'white' }} />
        <Typography variant="h3" mt={4} mb={2}>
          Work Experience
        </Typography>
        <Typography variant="body1" mb={6} mx="auto" sx={{ maxWidth: '75%' }}>
          Professional experience in IT systems management, network security, and technical support
          in government environments.
        </Typography>
      </Box>
      
      <Box maxWidth="lg" mx="auto" px={3}>
        <Card sx={{ 
          backgroundColor: '#2D3748', 
          borderRadius: '1rem',
          border: '1px solid #4A5568'
        }}>
          <CardContent sx={{ p: 4 }}>
            <Typography variant="h4" sx={{ color: '#E2E8F0', mb: 2, fontWeight: 'bold' }}>
              {workExperience.position}
            </Typography>
            
            <Box display="flex" flexWrap="wrap" gap={3} mb={3}>
              <Box display="flex" alignItems="center" gap={1}>
                <WorkIcon sx={{ color: '#34D399', fontSize: '1.2rem' }} />
                <Typography variant="h6" sx={{ color: '#CBD5E0' }}>
                  {workExperience.company}
                </Typography>
              </Box>
              
              <Box display="flex" alignItems="center" gap={1}>
                <LocationOnIcon sx={{ color: '#34D399', fontSize: '1.2rem' }} />
                <Typography variant="body1" sx={{ color: '#CBD5E0' }}>
                  {workExperience.location}
                </Typography>
              </Box>
              
              <Box display="flex" alignItems="center" gap={1}>
                <CalendarTodayIcon sx={{ color: '#34D399', fontSize: '1.2rem' }} />
                <Typography variant="body1" sx={{ color: '#CBD5E0' }}>
                  {workExperience.period}
                </Typography>
              </Box>
            </Box>

            <Typography variant="h6" sx={{ color: '#E2E8F0', mb: 2 }}>
              Key Responsibilities:
            </Typography>
            
            <Box component="ul" sx={{ pl: 2, m: 0 }}>
              {workExperience.responsibilities.map((responsibility, index) => (
                <Box component="li" key={index} sx={{ mb: 1 }}>
                  <Typography variant="body1" sx={{ color: '#CBD5E0', lineHeight: 1.6 }}>
                    {responsibility}
                  </Typography>
                </Box>
              ))}
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default Experience;