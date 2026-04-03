import React from 'react';
import { Box, Typography, Card, CardContent, Grid } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const workExperience = [
  {
    position: 'IT Specialist',
    company: 'Pogradec Municipality',
    location: 'Pogradec, Albania',
    period: 'February 2025 - Present',
    responsibilities: [
      'Delivered IT support and infrastructure administration for 500+ government users.',
      'Administered Windows Server, Active Directory, DNS, and DHCP across public-sector systems.',
      'Implemented and maintained MikroTik Firewall and Windows Firewall policies.',
      'Managed Hyper-V virtual machines, virtual networking, and server uptime.',
      'Diagnosed endpoint, network, and authentication incidents across internal systems.',
      'Supported the secure operation of e-government services and staff technology platforms.'
    ]
  },
  {
    position: 'GIS Surveyor of Census',
    company: 'National Census Operations',
    location: 'Pogradec, Albania',
    period: 'August 2023 - November 2023',
    responsibilities: [
      'Updated census maps and compiled geospatial data according to INSTAT guidelines.',
      'Revised and improved monitoring and issue-reporting applications during field operations.',
      'Supported census surveyors with orientation and on-site problem solving.',
      'Visited new buildings to verify records and collect accurate data via tablet.',
      'Documented building and entrance details to maintain complete location records.'
    ]
  }
];

const Experience = () => {
  return (
    <Box id="experience" py={10} sx={{ backgroundColor: '#5E548E', color: 'white' }}>
      <Box textAlign="center" mb={6}>
        <WorkIcon sx={{ width: '6rem', height: 'auto', color: 'white' }} />
        <Typography variant="h3" mt={4} mb={2}>
          Work Experience
        </Typography>
        <Typography variant="body1" mb={6} mx="auto" sx={{ maxWidth: '75%' }}>
          Professional experience spanning public-sector IT operations, infrastructure support,
          network security, and field data collection.
        </Typography>
      </Box>

      <Box maxWidth="lg" mx="auto" px={3}>
        <Grid container spacing={4}>
          {workExperience.map((role) => (
            <Grid item xs={12} key={role.position}>
              <Card sx={{
                backgroundColor: '#2D3748',
                borderRadius: '1rem',
                border: '1px solid #4A5568'
              }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h4" sx={{ color: '#E2E8F0', mb: 2, fontWeight: 'bold' }}>
                    {role.position}
                  </Typography>

                  <Box display="flex" flexWrap="wrap" gap={3} mb={3}>
                    <Box display="flex" alignItems="center" gap={1}>
                      <WorkIcon sx={{ color: '#34D399', fontSize: '1.2rem' }} />
                      <Typography variant="h6" sx={{ color: '#CBD5E0' }}>
                        {role.company}
                      </Typography>
                    </Box>

                    <Box display="flex" alignItems="center" gap={1}>
                      <LocationOnIcon sx={{ color: '#34D399', fontSize: '1.2rem' }} />
                      <Typography variant="body1" sx={{ color: '#CBD5E0' }}>
                        {role.location}
                      </Typography>
                    </Box>

                    <Box display="flex" alignItems="center" gap={1}>
                      <CalendarTodayIcon sx={{ color: '#34D399', fontSize: '1.2rem' }} />
                      <Typography variant="body1" sx={{ color: '#CBD5E0' }}>
                        {role.period}
                      </Typography>
                    </Box>
                  </Box>

                  <Typography variant="h6" sx={{ color: '#E2E8F0', mb: 2 }}>
                    Key Responsibilities:
                  </Typography>

                  <Box component="ul" sx={{ pl: 2, m: 0 }}>
                    {role.responsibilities.map((responsibility) => (
                      <Box component="li" key={responsibility} sx={{ mb: 1 }}>
                        <Typography variant="body1" sx={{ color: '#CBD5E0', lineHeight: 1.6 }}>
                          {responsibility}
                        </Typography>
                      </Box>
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

export default Experience;
