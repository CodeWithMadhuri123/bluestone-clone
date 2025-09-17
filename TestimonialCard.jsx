import React from 'react';
import pin from './assets/pin.webp';

const TestimonialCard = ({ image, name, review, tilt }) => {
    const tiltDegrees = tilt === 'tilt-left' ? '15deg' : tilt === 'tilt-right' ? '15deg' : '0deg';
  return (
    <div className={`testimonial-card ${tilt}`} data-aos="fade-up" style={{ '--tilt' : tiltDegrees }}>
      <img src={image} alt={name} />
      <h4 className="customer-name">{name}</h4>
      <p className="customer-review">{review}</p>
    </div>
  );
};

export default TestimonialCard;