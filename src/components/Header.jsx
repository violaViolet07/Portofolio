import React from 'react'
import {
    Typography,
    Avatar,
    Grid,
} from "@mui/material"
//import avatar from
import { ReactTyped } from "react-typed";
import { Box, ThemeProvider, createTheme } from '@mui/system';
import avatar from "../avatar.png" 
const Header = () => {
    return (
        <Box sx={{
            position: "absolute",
            top: "50%",
            letf: "50%",
            transform: "transleate(-50%, -50%)",
            width: "100vw",
            textAlign: "center",
            zIndex: 1
        }}>
            <Grid container justifyContent="center">
                <Avatar sx={{
                    width: "150px",
                    height: "150px",
                    margin: "1rem"
                }} src={avatar} alt="Viola" />

            </Grid>
            <Typography sx={{ color: "#f0a6ca" }} variant="h4">
                <ReactTyped strings={["Violeta Vako"]} typeSpeed={40} />
            </Typography>
            <br />
            <Typography sx={{ color: "#efc3e6", marginBottom: "3rem" }} variant="h5">
                <ReactTyped strings={["Programming", "Web Development", "Web Design"]} typeSpeed={40}
                    backSpeed={60} loop />
            </Typography>
        </Box>
    )
}

export default Header
