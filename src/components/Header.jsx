import React from 'react'
import {
    Typography,
    Avatar,
    Grid,
    Button,
    Stack,
} from "@mui/material"
import { Link } from 'react-router-dom';
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
            zIndex: 1,
            px: 2
        }}>
            <Grid container justifyContent="center">
                <Avatar sx={{
                    width: "150px",
                    height: "150px",
                    margin: "1rem",
                    bgcolor: "#f0a6ca",
                    color: "#1f1f1f",
                    fontSize: "3rem",
                    fontWeight: 700,
                    boxShadow: '0 18px 45px rgba(0,0,0,0.28)'
                }}>
                    VV
                </Avatar>

            </Grid>
            <Typography sx={{ color: "#f0a6ca", fontWeight: 700 }} variant="h4">
                <ReactTyped strings={["Violeta Vako"]} typeSpeed={40} />
            </Typography>
            <br />
            <Typography sx={{ color: "#efc3e6", marginBottom: "1.5rem" }} variant="h5">
                <ReactTyped strings={["IT Specialist", "Cybersecurity Enthusiast", "Systems & Network Support", "Cloud Threat Analytics"]} typeSpeed={40}
                    backSpeed={60} loop />
            </Typography>
            <Typography sx={{ color: '#E2E8F0', maxWidth: '720px', mx: 'auto', mb: 3, lineHeight: 1.8, fontSize: '1.05rem' }}>
                Supporting public-sector infrastructure, network operations, and security-focused analytics while building practical projects in cloud threat investigation and visual reporting.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
                <Button
                    component={Link}
                    to="/resume"
                    variant="contained"
                    sx={{
                        bgcolor: '#E0B1CB',
                        color: '#272640',
                        fontWeight: 700,
                        px: 3,
                        py: 1.2,
                        '&:hover': { bgcolor: '#efc3e6' }
                    }}
                >
                    Explore My Resume
                </Button>
                <Button
                    component={Link}
                    to="/portfolio"
                    variant="outlined"
                    sx={{
                        borderColor: '#E0B1CB',
                        color: '#F8FAFC',
                        fontWeight: 700,
                        px: 3,
                        py: 1.2,
                        '&:hover': { borderColor: '#F0A6CA', backgroundColor: 'rgba(255,255,255,0.04)' }
                    }}
                >
                    View Portfolio
                </Button>
            </Stack>
        </Box>
    )
}

export default Header
