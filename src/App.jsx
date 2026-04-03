import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import Home from "./components/"
import Resume from './components/Resume';
import Portofolio from './components/Portofolio';


function App() {
  return (
    <>
      <CssBaseline />


      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/portfolio" element={<Portofolio />} />
        <Route path="/portofolio" element={<Navigate to="/portfolio" replace />} />
      </Routes>


    </>
  );
}

export default App;

