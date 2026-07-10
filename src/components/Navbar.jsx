import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemText,
  Divider,
  List,
  Typography,
  ListItemIcon,
  Drawer,
} from '@mui/material';
import { Box } from '@mui/system';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AssignmentIndRoundedIcon from '@mui/icons-material/AssignmentIndRounded';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import AlternateEmailRoundedIcon from '@mui/icons-material/AlternateEmailRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const menuItems = [
  { icon: <HomeRoundedIcon />, text: 'Home', path: '/' },
  { icon: <AssignmentIndRoundedIcon />, text: 'Resume', path: '/resume' },
  { icon: <AppsRoundedIcon />, text: 'Portfolio', path: '/portofolio' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <Box component="nav" aria-label="Main navigation">
      <AppBar position="sticky" className="nav-appbar">
        <Toolbar className="nav-toolbar content-width">
          <Link to="/" className="nav-brand" style={{ textDecoration: 'none' }}>
            <span className="nav-mark">VV</span>
            <Typography className="nav-title">Violeta Vako</Typography>
          </Link>

          <span className="nav-spacer" />
          <div className="desktop-nav">
            {menuItems.map((item) => <Link key={item.path} to={item.path}>{item.text}</Link>)}
            <a href="mailto:violettavako@gmail.com">Contact</a>
          </div>

          <IconButton className="menu-button" onClick={() => setOpen(true)} aria-label="Open navigation menu">
            <MenuRoundedIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box className="drawer-panel" role="presentation">
          <div className="drawer-identity">
            <div className="drawer-avatar">VV</div>
            <h3>Violeta Vako</h3>
            <p>IT Specialist · Security</p>
          </div>
          <Divider sx={{ borderColor: 'rgba(239,195,230,.18)' }} />
          <List sx={{ mt: 2 }}>
            {menuItems.map((item) => (
              <ListItem
                key={item.path}
                component={Link}
                to={item.path}
                className="drawer-link"
                onClick={() => setOpen(false)}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} primaryTypographyProps={{ fontSize: '1.08rem', fontWeight: 700 }} />
              </ListItem>
            ))}
            <ListItem component="a" href="mailto:violettavako@gmail.com" className="drawer-link">
              <ListItemIcon><AlternateEmailRoundedIcon /></ListItemIcon>
              <ListItemText primary="Contact" primaryTypographyProps={{ fontSize: '1.08rem', fontWeight: 700 }} />
            </ListItem>
          </List>
          <div className="drawer-socials">
            <a href="https://www.linkedin.com/in/violet-v-03076b308/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedInIcon /></a>
            <a href="https://github.com/violaViolet07" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><GitHubIcon /></a>
          </div>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Navbar;
