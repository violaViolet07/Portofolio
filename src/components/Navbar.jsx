import React, { useState } from 'react'
import { Link, useLocation } from "react-router-dom"
import {
    AppBar,
    Toolbar,
    IconButton,
    ListItemText,
    Avatar,
    Divider,
    List,
    Typography,
    ListItemIcon,
    ListItemButton,
    Box,
} from '@mui/material'
import {
    ArrowBack,
    AssignmentInd,
    Home,
    Apps,
} from '@mui/icons-material'
import ContactlessIcon from '@mui/icons-material/Contactless';
import MobileRightMenuSlider from "@mui/material/Drawer"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Navbar = () => {
    const location = useLocation();
    const [state, setState] = useState({
        right: false,
    })

    const menuItems = [
        {
            listIcon: <Home />,
            listText: "Home",
            listPath: "/"
        },
        {
            listIcon: <AssignmentInd />,
            listText: "Resume",
            listPath: "/resume"
        },
        {
            listIcon: <Apps />,
            listText: "Portfolio",
            listPath: "/portfolio"
        },
        {
            listIcon: <ContactlessIcon />,
            listText: "Contact",
            listPath: "/resume#connect"
        },
    ];

    const toggleSlider = (slider, open) => () => {
        setState({ ...state, [slider]: open })
    }

    const sideList = (slider) => (
        <Box
            sx={{ width: 260, background: '#5E548E', height: '100%', display: 'flex', flexDirection: 'column' }}
            component="div"
            onClick={toggleSlider(slider, false)}
        >
            <Avatar
                sx={{
                    display: 'block',
                    margin: '1rem auto 0.75rem',
                    width: '80px',
                    height: '80px',
                    bgcolor: '#E0B1CB',
                    color: '#272640',
                    fontWeight: 700
                }}
                alt="Violeta Vako"
            >
                VV
            </Avatar>
            <Typography variant="subtitle1" align="center" sx={{ color: '#F7FAFC', fontWeight: 600, mb: 1 }}>
                Violeta Vako
            </Typography>
            <Divider />
            <List sx={{ px: 1.2, py: 1.2 }}>
                {menuItems.map((item) => {
                    const isActive = item.listPath.startsWith('/resume')
                        ? location.pathname === '/resume'
                        : location.pathname === item.listPath;

                    return (
                        <ListItemButton
                            key={item.listText}
                            component={Link}
                            to={item.listPath}
                            sx={{
                                borderRadius: '0.9rem',
                                mb: 0.8,
                                color: isActive ? '#F8FAFC' : '#10002b',
                                backgroundColor: isActive ? 'rgba(39, 38, 64, 0.6)' : 'transparent',
                                border: isActive ? '1px solid rgba(224, 177, 203, 0.35)' : '1px solid transparent',
                                '&:hover': {
                                    backgroundColor: 'rgba(39, 38, 64, 0.38)'
                                }
                            }}
                        >
                            <ListItemIcon sx={{ color: isActive ? '#E0B1CB' : '#10002b', minWidth: 38 }}>
                                {item.listIcon}
                            </ListItemIcon>
                            <ListItemText primary={item.listText} />
                        </ListItemButton>
                    );
                })}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, pt: 1.2, pl: 1 }}>
                    <a href="https://www.linkedin.com/in/violet-v-03076b308/" target="_blank" rel="noopener noreferrer" style={{ color: '#10002b' }}>
                        <LinkedInIcon />
                    </a>
                    <a href="https://github.com/violaViolet07" target="_blank" rel="noopener noreferrer" style={{ color: '#10002b' }}>
                        <GitHubIcon />
                    </a>
                </Box>
            </List>
        </Box>
    );

    return (
        <Box component="nav">
            <AppBar position='static' style={{ background: "#272640" }}>
                <Toolbar>
                    <IconButton onClick={toggleSlider("right", true)}>
                        <ArrowBack style={{ color: "#9F86C0" }} />
                    </IconButton>
                    <Typography variant="h5" style={{ color: "#E0B1CB" }}>
                        Portfolio
                    </Typography>
                    <MobileRightMenuSlider
                        open={state.right}
                        onClose={toggleSlider("right", false)}
                    >
                        {sideList("right")}
                    </MobileRightMenuSlider>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar
