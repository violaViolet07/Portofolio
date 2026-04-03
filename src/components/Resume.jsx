import React from 'react'
import { Box, Typography, Card, CardContent, Grid } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import ScienceIcon from '@mui/icons-material/Science';
import SecurityIcon from '@mui/icons-material/Security';
import Navbar from './Navbar';
import ParticlesComponent from './ParticlesComponent';
import Skills from './Skills';
import Experience from './Experience';
import Footer from './Footer';

const education = [
    {
        title: 'Master, Information and Network Security, Privacy and Data Protection',
        school: 'University of Information Science and Technology "St. Paul the Apostle"',
        period: 'Feb 2025 - Present',
        location: 'Ohrid, North Macedonia'
    },
    {
        title: 'Bachelor, Informatics',
        school: 'University of Tirana, Faculty of Natural Sciences',
        period: 'Nov 2020 - Jun 2023',
        location: 'Tirana, Albania'
    }
];

const certifications = [
    'EC-Council Certified Network Defender (C|ND) v3 Training Completion, Nov 2025',
    'Best Practices in Cybersecurity and Cyber Hygiene Training, National Cyber Security Authority & CRDF Global, May 2025',
    'Cybersecurity Governance and Standards Webinar, National Cyber Security Authority, Jul 2025',
    'Strategic Data Collection for Cybersecurity Webinar, National Cyber Security Authority, Jun 2025',
    'National Cybersecurity Marathon (SimSpace / CTF), British Council + National Cyber Security Authority, Oct-Dec 2025'
];

const researchHighlights = [
    {
        title: 'Coordinated Multi-View Visual Analytics for AWS VPC Flow Log-Derived Data Analysis',
        details: [
            'Accepted and presented at INFOTEH 2026',
            'IEEE Xplore indexing pending',
            'Designed a coordinated visual workflow for analyzing AWS VPC flow-log derived data across time, geography, and suspicious traffic behavior.',
            'Connected cloud log investigation with practical dashboard-based anomaly detection and exploratory analysis.'
        ]
    }
];

const labsAndCompetitions = [
    'Completed a 3-month National Cybersecurity Marathon using SimSpace and CTF-style exercises.',
    'Worked through practical cyber-range scenarios focused on investigation, analysis, and response thinking.',
    'Strengthened hands-on exposure to applied cybersecurity beyond classroom and theory-based learning.'
];

const sectionCardSx = {
    backgroundColor: '#2D3748',
    borderRadius: '1rem',
    border: '1px solid #4A5568',
    height: '100%'
};

const detailRowSx = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: 1.5,
    backgroundColor: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '0.85rem',
    px: 2,
    py: 1.4
};

const detailDotSx = {
    width: '0.65rem',
    height: '0.65rem',
    minWidth: '0.65rem',
    borderRadius: '50%',
    backgroundColor: '#FFFFFF',
    mt: '0.6rem',
    boxShadow: '0 0 10px rgba(255,255,255,0.35)'
};

const Resume = () => {
    return (
        <>
            <ParticlesComponent />
            <Navbar />

            <Box component="header" className="mainContainer" sx={{ pb: 3 }}>
                <Box textAlign="center" pt={8} pb={3}>
                    <Typography variant="h4" align="center" sx={{ color: 'white' }}>
                        ABOUT ME
                    </Typography>
                </Box>

                <Box maxWidth="lg" mx="auto" px={3}>
                    <Card sx={sectionCardSx}>
                        <CardContent sx={{ p: 4 }}>
                            <Typography variant="body1" sx={{ color: '#E2E8F0', fontSize: '1.15rem', lineHeight: 1.9 }}>
                                IT Specialist and master&apos;s student in Information and Network Security with experience in
                                Windows Server administration, Active Directory, DNS, DHCP, virtualization, endpoint support,
                                and network security in public-sector environments.
                            </Typography>
                            <Typography variant="body1" sx={{ color: '#CBD5E0', fontSize: '1.05rem', lineHeight: 1.9, mt: 3 }}>
                                I enjoy building practical, security-focused solutions, from cloud threat analytics dashboards
                                and log analysis projects to responsive web applications that present technical work clearly and professionally.
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
            </Box>

            <Experience />

            <Box py={10} sx={{ backgroundColor: '#5E548E', color: 'white' }}>
                <Box textAlign="center" mb={6}>
                    <SchoolIcon sx={{ width: '6rem', height: 'auto', color: 'white' }} />
                    <Typography variant="h3" mt={4} mb={2}>
                        Education
                    </Typography>
                    <Typography variant="body1" mb={6} mx="auto" sx={{ maxWidth: '75%' }}>
                        Academic background focused on informatics, cybersecurity, privacy, and data protection.
                    </Typography>
                </Box>

                <Box maxWidth="lg" mx="auto" px={3}>
                    <Grid container spacing={4}>
                        {education.map((item) => (
                            <Grid item xs={12} md={6} key={item.title}>
                                <Card sx={sectionCardSx}>
                                    <CardContent sx={{ p: 4 }}>
                                        <Typography variant="h5" sx={{ color: '#E2E8F0', mb: 2, fontWeight: 'bold' }}>
                                            {item.title}
                                        </Typography>
                                        <Typography variant="body1" sx={{ color: '#CBD5E0', mb: 1.5 }}>
                                            {item.school}
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: '#A0AEC0', mb: 1 }}>
                                            {item.period}
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: '#A0AEC0' }}>
                                            {item.location}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>

            <Box py={10} sx={{ backgroundColor: '#5E548E', color: 'white' }}>
                <Box textAlign="center" mb={6}>
                    <WorkspacePremiumIcon sx={{ width: '6rem', height: 'auto', color: 'white' }} />
                    <Typography variant="h3" mt={4} mb={2}>
                        Certifications & Training
                    </Typography>
                    <Typography variant="body1" mb={6} mx="auto" sx={{ maxWidth: '75%' }}>
                        Professional development in cybersecurity, cyber hygiene, governance, and practical investigation labs.
                    </Typography>
                </Box>

                <Box maxWidth="lg" mx="auto" px={3}>
                    <Card sx={sectionCardSx}>
                        <CardContent sx={{ p: 4 }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                                {certifications.map((item) => (
                                    <Box key={item} sx={detailRowSx}>
                                        <Box sx={detailDotSx} />
                                        <Typography variant="body1" sx={{ color: '#CBD5E0', lineHeight: 1.7 }}>
                                            {item}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>
                        </CardContent>
                    </Card>
                </Box>
            </Box>

            <Box py={10} sx={{ backgroundColor: '#5E548E', color: 'white' }}>
                <Box textAlign="center" mb={6}>
                    <ScienceIcon sx={{ width: '6rem', height: 'auto', color: 'white' }} />
                    <Typography variant="h3" mt={4} mb={2}>
                        Research & Publication
                    </Typography>
                    <Typography variant="body1" mb={6} mx="auto" sx={{ maxWidth: '75%' }}>
                        Research work aligned with cloud security, visual analytics, and applied cybersecurity investigation.
                    </Typography>
                </Box>

                <Box maxWidth="lg" mx="auto" px={3}>
                    <Grid container spacing={4}>
                        {researchHighlights.map((item) => (
                            <Grid item xs={12} key={item.title}>
                                <Card sx={sectionCardSx}>
                                    <CardContent sx={{ p: 4 }}>
                                        <Typography variant="h5" sx={{ color: '#E2E8F0', mb: 2, fontWeight: 'bold' }}>
                                            {item.title}
                                        </Typography>
                                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                                            {item.details.map((detail) => (
                                                <Box key={detail} sx={detailRowSx}>
                                                    <Box sx={detailDotSx} />
                                                    <Typography variant="body1" sx={{ color: '#CBD5E0', lineHeight: 1.7 }}>
                                                        {detail}
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

            <Box py={10} sx={{ backgroundColor: '#5E548E', color: 'white' }}>
                <Box textAlign="center" mb={6}>
                    <SecurityIcon sx={{ width: '6rem', height: 'auto', color: 'white' }} />
                    <Typography variant="h3" mt={4} mb={2}>
                        Competitions & Labs
                    </Typography>
                    <Typography variant="body1" mb={6} mx="auto" sx={{ maxWidth: '75%' }}>
                        Practical cybersecurity experience gained through hands-on exercises and structured challenge environments.
                    </Typography>
                </Box>

                <Box maxWidth="lg" mx="auto" px={3}>
                    <Card sx={sectionCardSx}>
                        <CardContent sx={{ p: 4 }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                                {labsAndCompetitions.map((item) => (
                                    <Box key={item} sx={detailRowSx}>
                                        <Box sx={detailDotSx} />
                                        <Typography variant="body1" sx={{ color: '#CBD5E0', lineHeight: 1.7 }}>
                                            {item}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>
                        </CardContent>
                    </Card>
                </Box>
            </Box>

            <Skills />
            <Footer />
        </>
    )
}

export default Resume
