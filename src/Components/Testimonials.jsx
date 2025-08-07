import React from 'react';
import Slider from 'react-slick';
import '../Styles/Testimonials.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Emily Williams",
      location: "Edusify, USA",
      text: "Choosing to pursue my degree at Edusify was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.",
      image: process.env.PUBLIC_URL + "/Images/user-1.png"
    },
    {
      id: 2,
      name: "William Jackson",
      location: "Edusify, USA",
      text: "Choosing to pursue my degree at Edusify was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.",
      image:process.env.PUBLIC_URL +  "/Images/user-2.png"
    },
    {
      id: 3,
      name: "Sophia Martinez",
      location: "Edusify, USA",
      text: "The faculty at Edusify are truly exceptional. Their guidance and expertise have been invaluable in shaping my educational journey and preparing me for my future career.",
      image: process.env.PUBLIC_URL + "/Images/user-3.png"
    },
    {
      id: 4,
      name: "Michael Brown",
      location: "Edusify, USA",
      text: "The diverse student body and inclusive environment at Edusify have enriched my learning experience beyond measure. I've grown both academically and personally.",
      image: process.env.PUBLIC_URL + "/Images/user-4.png"
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section id="testimonials" className="testimonials">
      <h2>TESTIMONIALS</h2>
      <h3>What Student Says</h3>
      
      <div className="slider-container">
        <Slider {...settings}>
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="user-image">
                <img src={process.env.PUBLIC_URL + testimonial.image} alt={testimonial.name} />
              </div>
              <h4>{testimonial.name}</h4>
              <p className="location">{testimonial.location}</p>
              <p className="text">{testimonial.text}</p>
            </div>
          ))}
        </Slider>
      </div>
      
      <button className="see-more">
        See more here <img src="/Images/next-icon.png" alt="Next" />
      </button>
    </section>
  );
};

export default Testimonials;