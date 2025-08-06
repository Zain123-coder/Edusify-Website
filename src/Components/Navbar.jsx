import React, { useState, useEffect } from 'react';
import '../Styles/above.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="Edusify Logo" />
        
      </div>
      
      <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <a href="#home">Home</a>
        <a href="#program">Program</a>
        <a href="#about">About us</a>
        <a href="#campus">Campus</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contact">Contact us</a>
      </div>
      
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        <img src="/images/menu-icon.png" alt="Menu" />
      </div>
    </nav>
  );
};

export default Navbar;