import React, { useEffect } from 'react';
import './AboutMe.css'; // Import the CSS file
import AOS from 'aos'; // Import AOS for animations
import 'aos/dist/aos.css'; // Import AOS styles

const AboutMe = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <div className="about-container">
        <h1 className="about-title" data-aos="fade-up">About Me</h1>
        <p className="about-description" data-aos="fade-up">
          After transitioning into tech, I’ve focused on creating clean, responsive websites that blend functionality with user experience. 
          I’m passionate about refining my skills in both frontend and backend, always driven by a desire to learn and push my work to the next level.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
