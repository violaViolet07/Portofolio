import './App.css';
import { Routes,Route } from 'react-router-dom';
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
        <Route path="/portofolio" element={<Portofolio />} />
      </Routes>


    </>
  );
}

export default App;

