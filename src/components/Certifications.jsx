import { Box, Typography } from '@mui/material';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import TerminalOutlinedIcon from '@mui/icons-material/TerminalOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import PropTypes from 'prop-types';

const training = [
  {
    type: 'Training completion',
    title: 'EC-Council Certified Network Defender (C|ND) v3',
    organization: 'EC-Council · Her Cyber programme',
    date: 'November 2025',
    icon: <VerifiedUserOutlinedIcon />
  },
  {
    type: 'Professional training',
    title: 'Best Practices in Cybersecurity and Cyber Hygiene',
    organization: 'National Cyber Security Authority & CRDF Global',
    date: 'May 2025',
    icon: <SchoolOutlinedIcon />
  },
  {
    type: 'Professional webinar',
    title: 'Cybersecurity Governance and Standards',
    organization: 'National Cyber Security Authority',
    date: 'July 2025',
    icon: <WorkspacePremiumOutlinedIcon />
  },
  {
    type: 'Professional webinar',
    title: 'Strategic Data Collection for Cybersecurity',
    organization: 'National Cyber Security Authority',
    date: 'June 2025',
    icon: <WorkspacePremiumOutlinedIcon />
  },
];

const competitions = [
  {
    type: 'European championship',
    title: 'SANS CTF European Championship 2026',
    organization: 'National Qualifier Participant · 6 CPEs earned',
    date: 'May 25–29, 2026',
    icon: <EmojiEventsOutlinedIcon />
  },
  {
    type: 'Cyber range & CTF',
    title: 'National Cybersecurity Marathon',
    organization: 'SimSpace · British Council · National Cyber Security Authority',
    date: 'October–December 2025',
    icon: <TerminalOutlinedIcon />
  },
  {
    type: 'Practical labs',
    title: 'Threat Investigation & CTF Labs',
    organization: 'Three months of investigative cyber-range scenarios in SimSpace',
    date: '2025',
    icon: <TerminalOutlinedIcon />
  },
];

const CredentialCard = ({ item }) => (
  <article className="credential-card glass-panel">
    <div className="credential-icon">{item.icon}</div>
    <div className="credential-copy">
      <span>{item.type}</span>
      <Typography component="h3" variant="h5">{item.title}</Typography>
      <Typography>{item.organization}</Typography>
      <small><CalendarMonthOutlinedIcon />{item.date}</small>
    </div>
  </article>
);

CredentialCard.propTypes = {
  item: PropTypes.shape({
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    organization: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
  }).isRequired,
};

const Certifications = () => (
  <Box id="certifications" className="section-block credentials-section">
    <Box className="content-width">
      <Box className="section-heading">
        <WorkspacePremiumOutlinedIcon className="section-icon" />
        <Typography variant="h2" className="section-title" mt={3} mb={2}>
          Certifications &amp; professional training
        </Typography>
        <Typography className="section-subtitle" mx="auto">
          Structured learning in network defence, cyber hygiene, governance, standards, and
          security-focused data collection, supported by practical competition experience.
        </Typography>
      </Box>

      <div className="credential-group">
        <div className="credential-group-title">
          <span>01</span>
          <div><Typography variant="h4">Training &amp; webinars</Typography><Typography>Formal professional development</Typography></div>
        </div>
        <div className="credential-grid">
          {training.map((item) => <CredentialCard key={item.title} item={item} />)}
        </div>
      </div>

      <div className="credential-group competition-group">
        <div className="credential-group-title">
          <span>02</span>
          <div><Typography variant="h4">Competitions &amp; practical labs</Typography><Typography>Hands-on investigation and cyber-range experience</Typography></div>
        </div>
        <div className="credential-grid competition-grid">
          {competitions.map((item) => <CredentialCard key={item.title} item={item} />)}
        </div>
      </div>
    </Box>
  </Box>
);

export default Certifications;
