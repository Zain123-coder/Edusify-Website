import React from 'react';
import '../Styles/Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>We Ensure better education for a better world</h1>
        <p>
          Our cutting-edge curriculum is designed to empower students with the knowledge, 
          skills, and experiences needed to excel in the dynamic field of education.
        </p>
        <button className="cta-button">
          Explore more <img src="/Images/white-arrow.png" alt="Arrow" />
        </button>
      </div>
    </section>
  );
};

export default Hero;