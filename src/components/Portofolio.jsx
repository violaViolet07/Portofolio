import React from 'react'
import Navbar from './Navbar'
import ParticlesComponent from './ParticlesComponent';
import { Box, Grid, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material'

const createProjectPreview = (title, accent, secondary) =>
    `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630" fill="none">
            <rect width="1200" height="630" fill="#081121"/>
            <circle cx="1030" cy="130" r="220" fill="${accent}" fill-opacity="0.18"/>
            <circle cx="170" cy="520" r="220" fill="${secondary}" fill-opacity="0.16"/>
            <rect x="88" y="82" width="1024" height="466" rx="28" fill="#101b33" stroke="#ffffff" stroke-opacity="0.14"/>
            <text x="140" y="210" fill="#8fb8ff" font-family="Arial, Helvetica, sans-serif" font-size="28" letter-spacing="4">PORTFOLIO PROJECT</text>
            <text x="140" y="300" fill="#f8fafc" font-family="Arial, Helvetica, sans-serif" font-size="54" font-weight="700">${title}</text>
            <text x="140" y="380" fill="#cbd5e1" font-family="Arial, Helvetica, sans-serif" font-size="30">Built by Violeta</text>
            <rect x="140" y="430" width="220" height="14" rx="7" fill="${accent}"/>
            <rect x="140" y="470" width="320" height="14" rx="7" fill="${secondary}"/>
        </svg>
    `)}`;

const projectPreviews = {
    ecommerce: createProjectPreview('E-commerce Website', '#7c3aed', '#06b6d4'),
    yelpCamp: createProjectPreview('Yelp Camp', '#22c55e', '#f59e0b'),
    luckyRolls: createProjectPreview('Lucky Rolls', '#ef4444', '#f97316'),
    searchTv: createProjectPreview('Search TV API', '#3b82f6', '#14b8a6'),
    snakeGame: createProjectPreview('Java Snake Game', '#84cc16', '#22c55e'),
    todoList: createProjectPreview('React To-Do List', '#ec4899', '#8b5cf6'),
    cyberThreats: createProjectPreview('Cyber Threat Analytics', '#38bdf8', '#22c55e'),
};

const Portofolio = () => {
    const openExternalLink = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    const projects = [
        {
            name: 'E-commerce Website',
            image: projectPreviews.ecommerce,
            projectLink: 'https://github.com/violaViolet07/Web-Project-For-an-e-commerce-website-partially-functional-',
            description: 'Technology used: PHP, HTML, CSS, Hack',
            hasLiveDemo: false,
        },
        {
            name: 'Yelp Camp - A Review Website',
            image: projectPreviews.yelpCamp,
            projectLink: 'https://github.com/violaViolet07/Yelp-Camp',
            description: 'Technology used: JavaScript, HTML, CSS, Node.js with Express.js',
            hasLiveDemo: true,
            liveDemoLink: 'https://yelp-camp-5qke.onrender.com/'
        },
        {
            name: 'A React Random Dice Roll',
            image: projectPreviews.luckyRolls,
            projectLink: 'https://github.com/violaViolet07/LuckyRolls',
            description: 'Technology used: React.js, JavaScript, HTML, CSS',
            hasLiveDemo: true,
            liveDemoLink: 'https://luckyrolls.onrender.com/'
        },
        {
            name: 'Search TV API',
            image: projectPreviews.searchTv,
            projectLink: 'https://github.com/violaViolet07/SearchTV',
            description: 'Technology used: HTML, JavaScript',
            hasLiveDemo: true,
            liveDemoLink: 'https://tv-kerko.onrender.com/'
        },
        {
            name: 'Java Snake Game',
            image: projectPreviews.snakeGame,
            projectLink: 'https://github.com/violaViolet07/A-Java-Snake-Game-with-added-play-again-btn-',
            description: 'Technology used: Java',
            hasLiveDemo: false,
        },
        {
            name: 'React To-Do List',
            image: projectPreviews.todoList,
            projectLink: 'https://github.com/violaViolet07/TO-DO-List-React',
            description: 'Technology used: React.js, JavaScript, HTML, CSS',
            hasLiveDemo: true,
            liveDemoLink: 'https://to-do-list-react-k1y3.onrender.com/'
        },
        {
            name: 'Cyber Threat Analytics Dashboard',
            image: projectPreviews.cyberThreats,
            projectLink: 'https://cyber-threats.shinyapps.io/rsearchpaper/',
            description: 'Technology used: R, Shiny, shinydashboard, tidyverse, Plotly, Leaflet, DT',
            hasLiveDemo: true,
            liveDemoLink: 'https://cyber-threats.shinyapps.io/rsearchpaper/'
        },
    ];

    return (
        <Box component="div" className='mainContainer' sx={{ height: '100%' }}>
            <ParticlesComponent />
            <Navbar />
            <Grid container justifyContent="center" spacing={3} sx={{ mt: 4 }}>
                {projects.map((project, index) => (
                    <Grid item key={index} xs={12} sm={8} md={6}>
                        <Card className='cardContainer'>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt={project.name}
                                    height="140"
                                    image={project.image}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5">
                                        {project.name}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {project.description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary" onClick={() => openExternalLink(project.projectLink)}>
                                    Link
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
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Portofolio;
