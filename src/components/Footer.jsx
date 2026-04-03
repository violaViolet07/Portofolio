import React from 'react';
import { Box, Typography, Stack, Button } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <Box
      id="connect"
      sx={{
        backgroundColor: '#272640',
        color: 'white',
        py: 7,
        px: 3,
        borderTop: '1px solid rgba(255,255,255,0.08)'
      }}
    >
      <Box maxWidth="lg" mx="auto" textAlign="center">
        <Typography variant="h4" sx={{ color: '#E0B1CB', fontWeight: 700, mb: 1.5 }}>
          Let&apos;s Connect
        </Typography>
        <Typography variant="body1" sx={{ color: '#CBD5E0', maxWidth: '720px', mx: 'auto', lineHeight: 1.8, mb: 4 }}>
          I&apos;m open to IT support, infrastructure, cybersecurity, and technical project opportunities.
          If you&apos;d like to talk, reach out by email or connect with me on LinkedIn and GitHub.
        </Typography>

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          justifyContent="center"
          alignItems="center"
        >
          <Button
            href="mailto:violettavako@gmail.com"
            variant="contained"
            startIcon={<EmailIcon />}
            sx={{
              bgcolor: '#E0B1CB',
              color: '#272640',
              fontWeight: 700,
              '&:hover': { bgcolor: '#efc3e6' }
            }}
          >
            Email Me
          </Button>
          <Button
            href="https://www.linkedin.com/in/violet-v-03076b308/"
            target="_blank"
            rel="noopener noreferrer"
            variant="outlined"
            startIcon={<LinkedInIcon />}
            sx={{
              borderColor: '#E0B1CB',
              color: '#F8FAFC',
              fontWeight: 700,
              '&:hover': { borderColor: '#F0A6CA', backgroundColor: 'rgba(255,255,255,0.04)' }
            }}
          >
            LinkedIn
          </Button>
          <Button
            href="https://github.com/violaViolet07"
            target="_blank"
            rel="noopener noreferrer"
            variant="outlined"
            startIcon={<GitHubIcon />}
            sx={{
              borderColor: '#E0B1CB',
              color: '#F8FAFC',
              fontWeight: 700,
              '&:hover': { borderColor: '#F0A6CA', backgroundColor: 'rgba(255,255,255,0.04)' }
            }}
          >
            GitHub
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default Footer;
