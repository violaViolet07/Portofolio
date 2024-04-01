import React from 'react'
import Navbar from './Navbar'
import ParticlesComponent from './ParticlesComponent';
import { Box, Grid, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from "@mui/material"

import Project1 from "../images/Project1.png"
import Project2 from "../images/Project2.png"
import Project3 from "../images/Project3.png"
import Project4 from "../images/Project4.png"
import Project5 from "../images/Project5.png"
import Project6 from "../images/Project6.png"


const Portofolio = () => {
    // Function to handle navigation to GitHub repository
    const handleShare = (githubRepoLink) => {
        window.open(githubRepoLink, '_blank');
    };

    // Define your project data with GitHub repository links
    const projects = [
        { 
            name: 'E-commerce Website ', 
            image: Project1, 
            githubLink: 'https://github.com/violaViolet07/Web-Project-For-an-e-commerce-website-partially-functional-', 
            description: 'Technology used:PHP,HTML,CSS,Hack',
            hasLiveDemo: false // Example property to indicate whether the project has a live demo
        },
        { 
            name: 'Yelp Camp - A Review Website ', 
            image: Project2, 
            githubLink: 'https://github.com/violaViolet07/Yelp-Camp', 
            description: 'Technology used:Javascipt,HTML,CSS,Node.js with Express.js',
            hasLiveDemo: true,
            liveDemoLink:'https://yelp-camp-5qke.onrender.com/'
        },
        
        { 
            name: 'A react random dice roll', 
            image: Project3, 
            githubLink: 'https://github.com/violaViolet07/LuckyRolls', 
            description: 'Technology used:React.js,Javascipt,HTML,CSS.',
            hasLiveDemo: true,
            liveDemoLink:'https://luckyrolls.onrender.com/' // Example property to indicate whether the project has a live demo
        },
        { 
            name: 'Search TV API', 
            image: Project4, 
            githubLink: 'https://github.com/violaViolet07/SearchTV', 
            description: 'Technology used:HTML,Javascript',
            hasLiveDemo: false // Example property to indicate whether the project has a live demo
        },
        { 
            name: 'Java Snake Game', 
            image: Project5, 
            githubLink: 'https://github.com/violaViolet07/A-Java-Snake-Game-with-added-play-again-btn-', 
            description: 'Technology used:Java',
            hasLiveDemo: false 
        },
        { 
            name: 'React To-Do List', 
            image: Project6, 
            githubLink: 'https://github.com/violaViolet07/TO-DO-List-React', 
            description: 'Technology used:React.js,Javascipt,HTML,CSS',
            hasLiveDemo: true,
            liveDemoLink:'https://to-do-list-react-k1y3.onrender.com/' 
        },
    ];


    return (
        <Box component="div" className='mainContainer' sx={{ height: "100%" }}>
            <ParticlesComponent />
            <Navbar />
            <Grid container justifyContent="center" spacing={3} sx={{ mt: 4 }}>
                {/* Render each project card using map */}
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
                                <Button size="small" color="primary" onClick={() => handleShare(project.githubLink)}>
                                    Link
                                </Button>
                                {project.hasLiveDemo ? (
                                    <Button size="small" color="primary" onClick={() => window.open(project.liveDemoLink)}>
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
