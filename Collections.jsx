import React from 'react';
import './Bluestone.css';
import img1 from './assets/barbie1.webp';
import img2 from './assets/barbie2.jpg';
import img3 from './assets/barbie3.webp';
import storeBanner from './assets/banner2.webp';

const Collections = () => {
  return (
    <div className="collections-container">
      <div className="image-row">
        <img src={img1} alt="Heart" className="left-img" />
        <img src={img2} alt="Checkmate" className="center-img" />
        <img src={img3} alt="Barbie" className="right-img" />
      </div>
      <div className="btn-wrapper">
        <button className="browse-btn">Browse all Collections</button>
      </div>

<div className="banner">
  <img src={storeBanner} alt="Banner" className="banner-image"/>
</div>
  </div>
  );
};

export default Collections;