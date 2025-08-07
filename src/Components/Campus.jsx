import React from 'react';
import '../Styles/Campus.css';

const Campus = () => {
  const galleryImages = [
    { id: 1, src:process.env.PUBLIC_URL +  "/Images/gallery-1.png", alt: "Campus building" },
    { id: 2, src:process.env.PUBLIC_URL +  "/Images/gallery-2.png", alt: "Library" },
    { id: 3, src: process.env.PUBLIC_URL + "/Images/gallery-3.png", alt: "Classroom" },
    { id: 4, src:process.env.PUBLIC_URL +  "/Images/gallery-4.png", alt: "Sports facility" },
  ];

  return (
    <section id="campus" className="campus">
      <h2>GALLERY</h2>
      <h3>Campus Photos</h3>
      
      <div className="gallery-grid">
        {galleryImages.map((image) => (
          <div key={image.id} className="gallery-item">
            <img 
              src={image.src} 
              alt={image.alt}
              loading="lazy"
            />
          </div>
        ))}
      </div>
      
      <button className="see-more-btn">
        See more here <span>→</span>
      </button>
    </section>
  );
};

export default Campus;