import React, { useEffect } from 'react';
import './Home.css';
import MeImage from '../Images/me.png'; // Adjust the path to your image
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <div className="container">
        <h1 className="name" data-aos="fade-up">Kanae</h1>
        <div className="image-container" data-aos="fade-up">
          <img src={MeImage} alt="face" className="face-image" />
        </div>
        <h2 className="surname" data-aos="fade-up">Bunche</h2>
        <h1 className="portfolio" data-aos="fade-up">PORTFOLIO</h1>
       <p className="surname1"data-aos="fade-up" > Web Developer</p>
      </div>
      
    </div>
  );
};

export default Home;
