import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Bluestone.css'; 
import ddhome from './assets/ddhome.jpg';
import ddhome2 from './assets/ddhome2.webp';

const HomeSlider = () => {
  return (
    <Carousel fade interval={3000} controls={true} indicators={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ddhome}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ddhome2}
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default HomeSlider;