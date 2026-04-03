import React from 'react'
import Navbar from './Navbar'
import ParticlesComponent from './ParticlesComponent';
import Footer from './Footer';
import { Box, Grid, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography, Chip, Stack } from "@mui/material"

import Project1 from "../images/Project1.jpg"
import Project2 from "../images/Project2.png"
import Project3 from "../images/Project3.png"
import Project4 from "../images/Project4.png"
import Project5 from "../images/Project5.png"
import Project6 from "../images/Project6.png"
import Project7 from "../images/Project7.png"

const Portofolio = () => {
    const openExternalLink = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    const featuredProjects = [
        {
            name: 'Cyber Threat Analytics Dashboard',
            image: Project7,
            githubLink: 'https://github.com/violaViolet07/Coordinated-AWS-FLow-Logs-Dashboard',
            summary: 'Interactive R Shiny dashboard for investigating AWS VPC flow-log derived traffic, suspicious behavior, and anomaly patterns.',
            stack: ['R', 'Shiny', 'Plotly', 'Leaflet'],
            hasLiveDemo: true,
            liveDemoLink: 'https://cyber-threats.shinyapps.io/rsearchpaper/'
        }
    ];

    const otherProjects = [
        {
            name: 'E-commerce Website',
            image: Project1,
            githubLink: 'https://github.com/violaViolet07/Web-Project-For-an-e-commerce-website-partially-functional-',
            summary: 'Web-based shopping platform project focused on frontend and backend integration fundamentals.',
            stack: ['PHP', 'HTML', 'CSS', 'Hack'],
            hasLiveDemo: false
        },
        {
            name: 'Yelp Camp - A Review Website',
            image: Project2,
            githubLink: 'https://github.com/violaViolet07/Yelp-Camp',
            summary: 'Campground review platform with user interaction, reviews, and full-stack Node.js application flow.',
            stack: ['JavaScript', 'Node.js', 'Express.js', 'CSS'],
            hasLiveDemo: true,
            liveDemoLink: 'https://yelp-camp-5qke.onrender.com/'
        },
        {
            name: 'A React Random Dice Roll',
            image: Project3,
            githubLink: 'https://github.com/violaViolet07/LuckyRolls',
            summary: 'Interactive React mini-app built around randomized gameplay and responsive UI behavior.',
            stack: ['React.js', 'JavaScript', 'HTML', 'CSS'],
            hasLiveDemo: true,
            liveDemoLink: 'https://luckyrolls.onrender.com/'
        },
        {
            name: 'Search TV API',
            image: Project4,
            githubLink: 'https://github.com/violaViolet07/SearchTV',
            summary: 'Search-focused project consuming external TV data APIs and presenting results in a clean interface.',
            stack: ['HTML', 'JavaScript', 'API'],
            hasLiveDemo: false
        },
        {
            name: 'Java Snake Game',
            image: Project5,
            githubLink: 'https://github.com/violaViolet07/A-Java-Snake-Game-with-added-play-again-btn-',
            summary: 'Classic snake implementation with replay support and Java-based game logic.',
            stack: ['Java'],
            hasLiveDemo: false
        },
        {
            name: 'React To-Do List',
            image: Project6,
            githubLink: 'https://github.com/violaViolet07/TO-DO-List-React',
            summary: 'Task management interface demonstrating React state handling and simple productivity workflows.',
            stack: ['React.js', 'JavaScript', 'HTML', 'CSS'],
            hasLiveDemo: true,
            liveDemoLink: 'https://to-do-list-react-k1y3.onrender.com/'
        }
    ];

    const renderProjectCard = (project, featured = false) => (
        <Card
            className='cardContainer'
            sx={{
                width: '100%',
                maxWidth: featured ? '100%' : 520,
                backgroundColor: '#2D3748',
                borderRadius: '1rem',
                border: '1px solid rgba(255,255,255,0.08)',
                color: 'white'
            }}
        >
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt={project.name}
                    height={featured ? "240" : "190"}
                    image={project.image}
                    sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ p: 3 }}>
                    <Typography gutterBottom variant={featured ? "h4" : "h5"} sx={{ color: '#F8FAFC', fontWeight: 700 }}>
                        {project.name}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#CBD5E0', lineHeight: 1.75, mb: 2.2 }}>
                        {project.summary}
                    </Typography>
                    <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                        {project.stack.map((item) => (
                            <Chip
                                key={item}
                                label={item}
                                sx={{
                                    backgroundColor: 'rgba(224, 177, 203, 0.12)',
                                    color: '#F8FAFC',
                                    border: '1px solid rgba(224, 177, 203, 0.24)'
                                }}
                            />
                        ))}
                    </Stack>
                </CardContent>
            </CardActionArea>
            <CardActions sx={{ px: 3, pb: 3 }}>
                <Button size="small" color="primary" onClick={() => openExternalLink(project.githubLink)}>
                    GitHub
                </Button>
                {project.hasLiveDemo ? (
                    <Button size="small" color="primary" onClick={() => openExternalLink(project.liveDemoLink)}>
                        Live Demo
                    </Button>
                ) : (
                    <Button size="small" color="primary" disabled>
                        No Live Demo
                    </Button>
                )}
            </CardActions>
        </Card>
    );

    return (
        <>
            <Box component="div" className='mainContainer' sx={{ minHeight: "100vh" }}>
                <ParticlesComponent />
                <Navbar />

                <Box maxWidth="lg" mx="auto" px={3} pt={6} pb={2}>
                    <Typography variant="h3" sx={{ color: '#FFFFFF', fontWeight: 700, mb: 1.5 }}>
                        Featured Work
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#E2E8F0', lineHeight: 1.8, maxWidth: '760px', mb: 4 }}>
                        The most relevant work for my current profile in IT operations, cloud security analytics, and technical problem solving.
                    </Typography>
                    <Grid container spacing={4}>
                        {featuredProjects.map((project) => (
                            <Grid item xs={12} key={project.name}>
                                {renderProjectCard(project, true)}
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                <Box maxWidth="lg" mx="auto" px={3} pt={5} pb={8}>
                    <Typography variant="h4" sx={{ color: '#FFFFFF', fontWeight: 700, mb: 1.5 }}>
                        Additional Projects
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#E2E8F0', lineHeight: 1.8, maxWidth: '760px', mb: 4 }}>
                        Earlier development projects that still reflect my technical foundation across frontend, backend, APIs, and application logic.
                    </Typography>

                    <Grid container justifyContent="center" spacing={3}>
                        {otherProjects.map((project) => (
                            <Grid item key={project.name} xs={12} sm={8} md={6}>
                                {renderProjectCard(project)}
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>
            <Footer />
        </>
    );
};

export default Portofolio;
