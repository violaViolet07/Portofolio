import './App.css';
import { Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Home from "./components/"
import Resume from './components/Resume';
import Portofolio from './components/Portofolio';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#F0A6CA' },
    secondary: { main: '#9F86C0' },
    background: { default: '#10002B', paper: '#272640' },
    text: { primary: '#FFF7FC', secondary: '#EFC3E6' }
  },
  typography: {
    fontFamily: 'Inter, Roboto, Arial, sans-serif',
    h1: { fontWeight: 800, letterSpacing: '-0.045em' },
    h2: { fontWeight: 800, letterSpacing: '-0.04em' },
    h3: { fontWeight: 800, letterSpacing: '-0.035em' },
    h4: { fontWeight: 750, letterSpacing: '-0.025em' },
    h5: { fontWeight: 700 },
    body1: { fontSize: '1.08rem', lineHeight: 1.8 },
    body2: { fontSize: '1rem', lineHeight: 1.7 },
    subtitle1: { fontSize: '1.18rem', lineHeight: 1.7 }
  },
  shape: { borderRadius: 18 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { textTransform: 'none', fontWeight: 800, fontSize: '1rem', borderRadius: 12 }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: { backgroundImage: 'none' }
      }
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/portofolio" element={<Portofolio />} />
        <Route path="/portfolio" element={<Portofolio />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
