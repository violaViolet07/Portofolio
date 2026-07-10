import { Box, Typography } from '@mui/material';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';

const educationItems = [
  {
    degree: 'Master, Information and Network Security, Privacy and Data Protection',
    school: 'University of Information Science and Technology "St. Paul the Apostle"',
    dates: 'Feb. 2025 - Present',
    location: 'Ohrid, North Macedonia',
  },
  {
    degree: 'Bachelor, Informatics',
    school: 'University of Tirana / Faculty of Natural Sciences',
    dates: 'Nov. 2020 - Jun. 2023',
    location: 'Tirana, Albania',
  },
];

const Education = () => (
  <Box id="education" className="section-block education-section">
    <Box className="content-width">
      <Box className="section-heading">
        <SchoolOutlinedIcon className="section-icon" />
        <Typography variant="h2" className="section-title" mt={3} mb={2}>
          Education
        </Typography>
        <Typography className="section-subtitle" mx="auto">
          Academic path focused on information security, data protection, and informatics.
        </Typography>
      </Box>

      <div className="education-list">
        {educationItems.map((item) => (
          <article className="education-card glass-panel security-corners" key={item.degree}>
            <div className="education-badge">
              <SchoolOutlinedIcon />
            </div>
            <div className="education-copy">
              <span className="cyber-kicker">Academic background</span>
              <Typography component="h3" variant="h3">
                {item.degree}
              </Typography>
              <Typography className="education-school">{item.school}</Typography>
              <div className="education-meta">
                <span>
                  <CalendarMonthOutlinedIcon />
                  {item.dates}
                </span>
                <span>
                  <PlaceOutlinedIcon />
                  {item.location}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Box>
  </Box>
);

export default Education;
