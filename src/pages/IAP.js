import React from 'react';
import './LandingPage.css'; 

import heroBackground from '../assets/Landing_Page.png';
import registerButton from '../assets/register-button.png';
import eyeImage1 from '../assets/image_1.png'; 
import eyeImage2 from '../assets/image_2.png';
import eyeImage3 from '../assets/image_3.png';

const IAP = () => {
  return (
    <div 
      className="hero-container" 
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      
      {/* 3. This wrapper holds the 3 new images */}
      <div className="blinking-eyes-wrapper">
        <img 
          src={eyeImage1} 
          alt="Eyes" 
          className="eyes-img"
          id="eye-img-1" // Unique ID
        />
        <img 
          src={eyeImage2} 
          alt="Eyes" 
          className="eyes-img"
          id="eye-img-2" // Unique ID
        />
        <img 
          src={eyeImage3} 
          alt="Eyes" 
          className="eyes-img"
          id="eye-img-3" // Unique ID
        />
      </div>

      <div className="hero-content">
        <a 
          href="https://your-registration-link-goes-here.com"
          className="register-image-link"
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img src={registerButton} alt="Click to Register" />
        </a>
      </div>

    </div>
  );
};

export default IAP;