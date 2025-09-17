import React from 'react';
import './Bluestone.css';

const Goldmine = () => {
  return (
    <div className="goldmine-strip">
      <div className="goldmine-center-content">
        <span className="goldmine-text">
          <strong>Gold Mine <span className="highlight">10+1 Monthly Plan</span></strong> 
          <span className="description"> (Pay 10 installments & enjoy 100% savings on the 11th month!)</span>
        </span>
        <button className="goldmine-enroll-btn">Enroll Now</button>
      </div>
    </div>
  );
};

export default Goldmine;