import React from 'react';
import { Box, Typography } from '@mui/material';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

const skills = [
  'C/C++',
  'Java',
  'JavaScript',
  'PHP',
  'Node.js',
  'Express.js',
  'EJS',
  'HTML',
  'CSS',
  'React.js',
  'Material-UI',
  'Oracle',
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
        Explore my comprehensive skill set and technological proficiencies below.
  From programming languages to database management systems, discover the range
  of capabilities I bring to the table.
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
