import React from 'react';
import { Box, Typography, Chip, Grid, Card, CardContent } from '@mui/material';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

const skillGroups = [
  {
    title: 'Infrastructure & Security',
    items: ['Windows Server', 'Active Directory', 'DNS', 'DHCP', 'TCP/IP', 'MikroTik', 'Windows Firewall', 'Hyper-V', 'Linux', 'Virtualization']
  },
  {
    title: 'Monitoring & Analysis',
    items: ['SIEM Fundamentals', 'Log Analysis', 'Cloud Threat Analytics', 'Endpoint Troubleshooting', 'Network Troubleshooting']
  },
  {
    title: 'Programming & Data',
    items: ['R', 'Python', 'SQL', 'JavaScript', 'Node.js', 'React.js']
  },
  {
    title: 'Databases & Platforms',
    items: ['MySQL', 'MongoDB', 'Public-Sector IT Support', 'E-Government Systems']
  }
];

const Skills = () => {
  return (
    <Box id="skills" py={10} sx={{ backgroundColor: '#5E548E', color: 'white' }}>
      <Box textAlign="center" mb={8}>
        <TaskAltIcon sx={{ width: '6rem', height: 'auto', color: 'white' }} />
        <Typography variant="h3" mt={4} mb={2}>
          Skills & Technologies
        </Typography>
        <Typography variant="body1" mb={6} mx="auto" sx={{ maxWidth: '75%' }}>
          Core skills grouped by domain so your infrastructure, cybersecurity, and development strengths
          are easier to scan.
        </Typography>
      </Box>

      <Box maxWidth="lg" mx="auto" px={3}>
        <Grid container spacing={4}>
          {skillGroups.map((group) => (
            <Grid item xs={12} md={6} key={group.title}>
              <Card sx={{
                backgroundColor: '#2D3748',
                borderRadius: '1rem',
                border: '1px solid #4A5568',
                height: '100%'
              }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h5" sx={{ color: '#E2E8F0', fontWeight: 700, mb: 2.5 }}>
                    {group.title}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.2 }}>
                    {group.items.map((item) => (
                      <Chip
                        key={item}
                        label={item}
                        sx={{
                          backgroundColor: 'rgba(224, 177, 203, 0.12)',
                          color: '#F8FAFC',
                          border: '1px solid rgba(224, 177, 203, 0.24)',
                          fontWeight: 500
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Skills;
