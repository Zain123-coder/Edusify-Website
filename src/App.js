import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Program from './Components/Program';
import About from './Components/About';
import Campus from './Components/Campus'
import Testimonials from './Components/Testimonials';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

import './Styles/Global.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Program />
      <About />
      <Campus />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
