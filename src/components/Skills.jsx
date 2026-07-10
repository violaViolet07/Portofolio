import { Box, Typography } from '@mui/material';
import TaskAltIcon from '@mui/icons-material/TaskAltRounded';

const skills = [
  'Windows Server', 'Active Directory', 'DNS & DHCP', 'TCP/IP', 'MikroTik', 'Hyper-V', 'Linux',
  'Firewalls', 'Log Analysis', 'Cloud Threat Analytics', 'C/C++', 'Java', 'JavaScript', 'PHP',
  'Python', 'R', 'Node.js', 'Express.js', 'EJS', 'HTML', 'CSS', 'React.js', 'Material UI',
  'Oracle', 'MySQL', 'MongoDB'
];

const Skills = () => (
  <Box id="skills" className="section-block">
    <Box className="content-width">
      <Box className="section-heading">
        <TaskAltIcon className="section-icon" />
        <Typography variant="h2" className="section-title" mt={3} mb={2}>Skills &amp; technologies</Typography>
        <Typography className="section-subtitle" mx="auto">
          A practical toolkit spanning infrastructure, cybersecurity, programming, web
          development, and database systems.
        </Typography>
      </Box>
      <div className="skill-grid">
        {skills.map((skill) => (
          <Box key={skill} className="skill-card" display="flex" alignItems="center" gap={1.5}>
            <TaskAltIcon />
            <Typography>{skill}</Typography>
          </Box>
        ))}
      </div>
    </Box>
  </Box>
);

export default Skills;
