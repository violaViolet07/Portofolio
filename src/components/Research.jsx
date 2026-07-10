import { Box, Typography, Button, Chip } from '@mui/material';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import HubOutlinedIcon from '@mui/icons-material/HubOutlined';

const IEEE_URL = 'https://ieeexplore.ieee.org/document/11477686';
const DASHBOARD_URL = 'https://cyber-threats.shinyapps.io/rsearchpaper/';

const Research = () => (
  <Box id="research" className="section-block research-section">
    <Box className="content-width">
      <Box className="section-heading">
        <ScienceOutlinedIcon className="section-icon" />
        <Typography variant="h2" className="section-title" mt={3} mb={2}>
          Research &amp; publication
        </Typography>
        <Typography className="section-subtitle" mx="auto">
          Published research connecting cloud security, AWS network telemetry, and coordinated
          visual analytics for practical threat investigation.
        </Typography>
      </Box>

      <article className="research-feature glass-panel security-corners">
        <div className="research-main">
          <div className="research-label-row">
            <span className="cyber-kicker">IEEE Xplore · Published</span>
            <Chip label="INFOTEH 2026" className="publication-chip" />
          </div>
          <Typography component="h3" variant="h3" className="research-title">
            Interactive Visual Analytics for Cloud Security Monitoring
          </Typography>
          <Typography className="research-authors">
            V. Vako, E. Domazet, D. Mechkaroska, and D. Capeska Bogatinoska
          </Typography>
          <Typography className="research-summary">
            The research presents a coordinated multi-view workflow for examining AWS VPC Flow
            Logs across time, geography, connection behavior, and anomaly-focused patterns. The
            system helps analysts identify high-risk IP addresses, traffic spikes, unusual data
            volumes, and suspicious cloud-network activity.
          </Typography>
          <div className="research-actions">
            <Button href={IEEE_URL} target="_blank" rel="noopener noreferrer" variant="contained" startIcon={<ArticleOutlinedIcon />} endIcon={<OpenInNewRoundedIcon />}>
              View on IEEE Xplore
            </Button>
            <Button href={DASHBOARD_URL} target="_blank" rel="noopener noreferrer" variant="outlined" color="secondary" startIcon={<PublicOutlinedIcon />} endIcon={<OpenInNewRoundedIcon />}>
              Open Live Dashboard
            </Button>
          </div>
          <Typography className="doi-line">
            DOI: 10.1109/INFOTEH63925.2026.11477686
          </Typography>
        </div>

        <aside className="research-console" aria-label="Research system overview">
          <div className="console-bar"><i></i><i></i><i></i><span>cloud-threat-analytics.r</span></div>
          <div className="research-project-mark"><HubOutlinedIcon /></div>
          <Typography variant="h5">Cloud Threat Analytics Dashboard</Typography>
          <Typography>
            Interactive R Shiny system for exploratory analysis of AWS VPC Flow Logs.
          </Typography>
          <div className="research-view-list">
            <span><TimelineOutlinedIcon />Temporal traffic</span>
            <span><PublicOutlinedIcon />Geographic sources</span>
            <span><CloudOutlinedIcon />Cloud anomalies</span>
            <span><HubOutlinedIcon />Coordinated views</span>
          </div>
          <div className="technology-line"><b>R</b><b>Shiny</b><b>Plotly</b><b>Leaflet</b><b>AWS VPC</b></div>
        </aside>
      </article>
    </Box>
  </Box>
);

export default Research;
