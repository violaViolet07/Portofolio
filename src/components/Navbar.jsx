import React, { useState } from 'react'
import { Link } from "react-router-dom"
import {
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemText,
    Avatar,
    Divider,
    List,
    Typography,
    ListItemIcon,
} from '@mui/material'
import { Box, ThemeProvider, createTheme } from '@mui/system';
import {
    ArrowBack,
    AssignmentInd,
    Home,
    Apps,
} from '@mui/icons-material'
import ContactlessIcon from '@mui/icons-material/Contactless';
import MobileRightMenuSlider from "@mui/material/Drawer"
import avatar from "../avatar.png"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
//css styles

const menuIcons = [
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
        listText: "Portofolio",
        listPath: "/portofolio"
    },
    {
        listIcon: <ContactlessIcon />,
        listText: "Contacts"
    },
]
const Navbar = () => {
    const [state, setState] = useState({
        right: false,
    })
    const toggleSlider = (slider, open) => () => {
        setState({ ...state, [slider]: open })
    }
    const sideList = slider => (
        <Box
            sx={{ width: 250, background: '#5E548E', height: '100%', display: 'flex', flexDirection: 'column' }}
            component="div"
            onClick={toggleSlider(slider, false)}
        >
            <Avatar
                sx={{
                    display: 'block',
                    margin: '0.5rem auto',
                    width: '80px',
                    height: '80px',
                }}
                src={avatar}
                alt="Violeta Vako"
            />
            <Divider />
            <List>
                {menuIcons.map((isIcon, key) => (
                    <ListItem
                        button
                        key={key}
                        component={Link}
                        to={isIcon.listPath}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            color: '#10002b',
                        }}
                    >
                        <ListItemIcon>{isIcon.listIcon}</ListItemIcon>
                        <ListItemText primary={isIcon.listText} />

                    </ListItem>
                ))}
                <ListItem
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        color: '#10002b',
                    }}
                >
                    <ListItemIcon>
                        <a href="https://www.linkedin.com/in/violet-v-03076b308/" target="_blank" rel="noopener noreferrer" style={{ color: '#10002b' }}>
                            <LinkedInIcon />
                        </a>
                    </ListItemIcon>
                    <ListItemIcon>
                        <a href="https://github.com/violaViolet07" target="_blank" rel="noopener noreferrer" style={{ color: '#10002b' }}>
                            <GitHubIcon />
                        </a>
                    </ListItemIcon>
                </ListItem>
            </List>

        </Box>
    );
    return (
        <>

            <Box component="nav">
                <AppBar position='static' style={{ background: "#272640" }}>
                    <Toolbar>
                        <IconButton onClick={toggleSlider("right", true)}>
                            <ArrowBack style={{ color: "#9F86C0" }} />
                        </IconButton>
                        <Typography variant="h5" style={{ color: "#E0B1CB" }}>
                            Portofolio
                        </Typography>
                        <MobileRightMenuSlider
                            //anchor="right"
                            open={state.right}
                            onClose={toggleSlider("right", false)}
                        >
                            {sideList("right")}
                        </MobileRightMenuSlider>
                    </Toolbar>
                </AppBar>
            </Box>

        </>
    )
}

export default Navbar
