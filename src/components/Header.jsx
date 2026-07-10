import {
    Typography,
    Button,
} from "@mui/material"
import { ReactTyped } from "react-typed";
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';

const Header = () => {
    return (
        <Box component="header" className="hero-shell">
            <div className="hero-grid">
                <div className="hero-copy">
                    <span className="cyber-kicker">IT infrastructure · cybersecurity</span>
                    <Typography component="h1" variant="h1" className="hero-title">
                        Violeta <span>Vako</span>
                    </Typography>
                    <Typography component="div" variant="h4" className="hero-subtitle">
                        <ReactTyped
                            strings={["IT Specialist", "Cybersecurity", "Programming", "Web Development", "Web Design"]}
                            typeSpeed={48}
                            backSpeed={45}
                            loop
                        />
                    </Typography>
                    <Typography className="hero-description">
                        Supporting public-sector systems, networks, and users while building practical
                        security analytics and polished digital experiences.
                    </Typography>
                    <div className="hero-actions">
                        <Button component={Link} to="/portofolio" className="primary-action" endIcon={<ArrowForwardRoundedIcon />}>
                            Explore portfolio
                        </Button>
                        <Button component={Link} to="/resume" variant="outlined" className="secondary-action">
                            View resume
                        </Button>
                    </div>
                </div>

                <div className="identity-console security-corners" aria-label="Violeta Vako profile status">
                    <div className="console-bar"><i></i><i></i><i></i><span>identity.secure</span></div>
                    <div className="identity-visual" aria-hidden="true">
                        <div className="signal-orbit signal-orbit-one"><i></i><i></i><i></i></div>
                        <div className="signal-orbit signal-orbit-two"><i></i><i></i><i></i></div>
                        <div className="scan-beam"></div>
                        <div className="avatar-monogram avatar-photo-frame">
                            <img src="/profile-avatar.png" alt="" />
                        </div>
                        <span className="data-tag data-tag-top">MFA</span>
                        <span className="data-tag data-tag-right">IDS</span>
                        <span className="data-tag data-tag-left">LOG</span>
                    </div>
                    <div className="console-status">
                        <div><span>Role</span><strong>IT Specialist</strong></div>
                        <div><span>Focus</span><strong>Security</strong></div>
                    </div>
                    <div className="status-line"><i></i><span><ShieldOutlinedIcon sx={{ fontSize: 17, verticalAlign: 'middle', mr: .6 }} />Profile verified · Available to connect</span></div>
                </div>
            </div>
        </Box>
    )
}

export default Header
