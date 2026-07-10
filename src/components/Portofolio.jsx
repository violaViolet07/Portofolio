import Navbar from './Navbar';
import ParticlesComponent from './ParticlesComponent';
import { Box, Grid, Card, CardActionArea, CardActions, CardContent, Button, Typography } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import TravelExploreOutlinedIcon from '@mui/icons-material/TravelExploreOutlined';
import CasinoOutlinedIcon from '@mui/icons-material/CasinoOutlined';
import TvOutlinedIcon from '@mui/icons-material/TvOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import ChecklistRoundedIcon from '@mui/icons-material/ChecklistRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';

const projects = [
  {
    name: 'E-commerce Website',
    icon: <ShoppingCartOutlinedIcon />,
    githubLink: 'https://github.com/violaViolet07/Web-Project-For-an-e-commerce-website-partially-functional-',
    description: 'PHP · HTML · CSS · Hack',
    hasLiveDemo: false
  },
  {
    name: 'Yelp Camp — A Review Website',
    icon: <TravelExploreOutlinedIcon />,
    githubLink: 'https://github.com/violaViolet07/Yelp-Camp',
    description: 'JavaScript · HTML · CSS · Node.js · Express.js',
    hasLiveDemo: true,
    liveDemoLink: 'https://yelp-camp-5qke.onrender.com/'
  },
  {
    name: 'React Random Dice Roll',
    icon: <CasinoOutlinedIcon />,
    githubLink: 'https://github.com/violaViolet07/LuckyRolls',
    description: 'React.js · JavaScript · HTML · CSS',
    hasLiveDemo: true,
    liveDemoLink: 'https://luckyrolls.onrender.com/'
  },
  {
    name: 'Search TV API',
    icon: <TvOutlinedIcon />,
    githubLink: 'https://github.com/violaViolet07/SearchTV',
    description: 'HTML · JavaScript · API integration',
    hasLiveDemo: true,
    liveDemoLink: 'https://tv-kerko.onrender.com/'
  },
  {
    name: 'Java Snake Game',
    icon: <SportsEsportsOutlinedIcon />,
    githubLink: 'https://github.com/violaViolet07/A-Java-Snake-Game-with-added-play-again-btn-',
    description: 'Java · Game logic · Replay flow',
    hasLiveDemo: false
  },
  {
    name: 'React To-Do List',
    icon: <ChecklistRoundedIcon />,
    githubLink: 'https://github.com/violaViolet07/TO-DO-List-React',
    description: 'React.js · JavaScript · HTML · CSS',
    hasLiveDemo: true,
    liveDemoLink: 'https://to-do-list-react-k1y3.onrender.com/'
  },
];

const openExternal = (url) => window.open(url, '_blank', 'noopener,noreferrer');

const Portofolio = () => (
  <div className="page-shell portfolio-page">
    <ParticlesComponent />
    <Navbar />
    <Box component="header" className="portfolio-heading">
      <span className="cyber-kicker">Build archive / 02</span>
      <Typography component="h1" variant="h2" className="section-title" sx={{ mt: 2, mb: 2 }}>
        Selected portfolio
      </Typography>
      <Typography className="section-subtitle" mx="auto">
        Original development projects, re-presented through a clearer security-inspired interface.
        The source code and live demonstrations remain directly accessible.
      </Typography>
    </Box>

    <Grid container spacing={3} className="portfolio-grid">
      {projects.map((project, index) => (
        <Grid item key={project.name} xs={12} md={6}>
          <Card className="project-card security-corners">
            <CardActionArea onClick={() => openExternal(project.githubLink)}>
              <div className="project-visual">
                <span className="project-index">0{index + 1} / REPOSITORY</span>
                <div className="project-glyph">{project.icon}</div>
              </div>
              <CardContent className="project-card-content">
                <Typography gutterBottom variant="h4" className="project-name">{project.name}</Typography>
                <Typography className="project-description">{project.description}</Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className="project-actions">
              <Button variant="contained" startIcon={<GitHubIcon />} onClick={() => openExternal(project.githubLink)}>
                Source code
              </Button>
              {project.hasLiveDemo ? (
                <Button variant="outlined" color="secondary" endIcon={<OpenInNewRoundedIcon />} onClick={() => openExternal(project.liveDemoLink)}>
                  Live demo
                </Button>
              ) : (
                <Button variant="outlined" disabled>No live demo</Button>
              )}
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  </div>
);

export default Portofolio;
