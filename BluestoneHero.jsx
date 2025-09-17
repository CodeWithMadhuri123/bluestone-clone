import React from 'react';
import './Bluestone.css';
import heroVideo from './assets/hero.mp4.mp4';
import Radiantromance from './assets/Radiant-romance.webp';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate('/allproducts');
  };
  return (
    <div className="hero-container">
      <video autoPlay muted loop className="hero-video" style={{ cursor: 'pointer' }} onClick={handleRedirect}>
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-overlay">
        <img src={Radiantromance} alt="Radiant Romance" className="hero-overlay-image" style={{ cursor: 'pointer' }} onClick={handleRedirect}/>
      </div>
    </div>
  );
};

export default Hero;