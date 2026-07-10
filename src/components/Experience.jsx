import { Box, Typography, Card, CardContent } from '@mui/material';
import WorkIcon from '@mui/icons-material/WorkOutlineRounded';
import LocationOnIcon from '@mui/icons-material/LocationOnOutlined';
import CalendarTodayIcon from '@mui/icons-material/CalendarTodayOutlined';

const workExperience = {
  position: 'IT Specialist',
  company: 'Pogradec Municipality',
  location: 'Pogradec, Albania',
  period: 'February 2025 — Present',
  responsibilities: [
    'Provided IT support and helpdesk services to over 500 government employees, ensuring the smooth operation of electronic systems.',
    'Diagnosed and resolved hardware and software issues to maintain stable system performance.',
    'Installed, configured, and troubleshot Microsoft Windows operating systems in diverse environments.',
    'Administered Windows Server infrastructure, including domain management, server roles, and services.',
    'Maintained and resolved issues related to Active Directory, DNS, and DHCP.',
    'Implemented and managed network security using MikroTik Firewall and Windows Firewall.',
    'Monitored and managed virtual machines and virtual networks through Microsoft Hyper-V.'
  ]
};

const Experience = () => (
  <Box id="experience" className="section-block">
    <Box className="content-width">
      <Box className="section-heading">
        <WorkIcon className="section-icon" />
        <Typography variant="h2" className="section-title" mt={3} mb={2}>Work experience</Typography>
        <Typography className="section-subtitle" mx="auto">
          Professional experience across IT systems management, identity services, network
          security, virtualization, and technical support in a government environment.
        </Typography>
      </Box>

      <Card className="experience-card glass-panel security-corners">
        <CardContent sx={{ p: { xs: 2.5, md: 4.5 } }}>
          <span className="cyber-kicker">Current position</span>
          <Typography variant="h3" sx={{ mt: 2, color: '#FFF7FC', fontSize: { xs: '2.2rem', md: '3.2rem' } }}>
            {workExperience.position}
          </Typography>
          <div className="experience-meta">
            <span className="meta-chip"><WorkIcon />{workExperience.company}</span>
            <span className="meta-chip"><LocationOnIcon />{workExperience.location}</span>
            <span className="meta-chip"><CalendarTodayIcon />{workExperience.period}</span>
          </div>
          <Typography variant="h5" sx={{ mb: 2.5, color: '#EFC3E6', fontSize: '1.35rem' }}>
            Key responsibilities
          </Typography>
          <ul className="responsibility-list">
            {workExperience.responsibilities.map((responsibility) => <li key={responsibility}>{responsibility}</li>)}
          </ul>
        </CardContent>
      </Card>
    </Box>
  </Box>
);

export default Experience;
