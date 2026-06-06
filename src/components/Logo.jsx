import React from 'react';
import './Logo.css';

const Logo = ({ light = false }) => {
  return (
    <div className={`brand-logo ${light ? 'logo-light' : ''}`}>
      <div className="brand-logo-top">
        <div className="brand-icon">
          <span className="brand-v">V</span>
          <span className="brand-g">G</span>
        </div>
        <div className="brand-name">
          <span className="brand-smart">SmartFile</span>
        </div>
      </div>
      <div className="brand-logo-bottom">
        <span className="brand-line"></span>
        <span className="brand-solutions">SOLUTIONS</span>
        <span className="brand-line"></span>
      </div>
    </div>
  );
};

export default Logo;
