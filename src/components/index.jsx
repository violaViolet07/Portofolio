import Navbar from './Navbar';
import Header from './Header';
import ParticlesComponent from './ParticlesComponent';

const Home = () => {
  return (
    <div className="page-shell home-page">
      <ParticlesComponent />
      <Navbar />
      <Header />
    </div>
  );
};

export default Home;
