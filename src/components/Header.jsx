import React from 'react'
import {
    Typography,
    Avatar,
    Grid,
} from "@mui/material"
import { ReactTyped } from "react-typed";
import { Box } from '@mui/system';
const Header = () => {
    return (
        <Box sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100vw",
            textAlign: "center",
            zIndex: 1
        }}>
            <Grid container justifyContent="center">
                <Avatar sx={{
                    width: "150px",
                    height: "150px",
                    margin: "1rem",
                    bgcolor: "#f0a6ca",
                    color: "#1f1f1f",
                    fontSize: "3rem",
                    fontWeight: 700
                }}>
                    VV
                </Avatar>

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
