import React from 'react';
import '../Styles/Program.css';

const Program = () => {
  const programs = [
    {
      id: 1,
      title: "Post",
      icon: "/images/program-icon-1.png",
      image: "/images/program-1.png",
      description: "Advanced postgraduate programs for specialized learning"
    },
    {
      id: 2,
      title: "Question",
      icon: "/images/program-icon-2.png",
      image: "/images/program-2.png",
      description: "Interactive question-based learning modules"
    },
    {
      id: 3,
      title: "Certification",
      icon: "/images/program-icon-3.png",
      image: "/images/program-3.png",
      description: "Professional certification courses for career advancement"
    }
  ];

  return (
    <section id="program" className="program">
      <h2>OUR PROGRAM</h2>
      <h3>What We Offer</h3>
      <div className="program-cards">
        {programs.map(program => (
          <div key={program.id} className="program-card">
            <div className="program-image">
              <img src={program.image} alt={program.title} />
            </div>
            <div className="program-icon">
              <img src={program.icon} alt={program.title} />
            </div>
            <h4>{program.title}</h4>
            <p>{program.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Program;