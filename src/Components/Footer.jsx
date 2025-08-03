import React from 'react';
import '../Styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="#home">Home</a>
        <a href="#program">Program</a>
        <a href="#about">About us</a>
        <a href="#campus">Campus</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contact">Contact us</a>
      </div>
      <p>© {new Date().getFullYear()} Edusify. All rights reserved.</p>
    </footer>
  );
};

export default Footer;