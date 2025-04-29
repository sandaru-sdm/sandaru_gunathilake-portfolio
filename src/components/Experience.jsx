// src/components/Experience.jsx
import React from 'react';
import portfolioData from '../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="experience py-5 bg-light">
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="section-title position-relative pb-3">Work Experience</h2>
            <div className="title-underline"></div>
            <p className="text-muted mt-3">My professional journey and achievements</p>
          </div>
        </div>
        
        <div className="row">
          <div className="col-12">
            <div className="timeline-container">
              {portfolioData.experience.map((exp, index) => (
                <div 
                  key={exp.id}
                  className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                  data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
                >
                  <div className="timeline-content card shadow-sm">
                    <div className="card-body">
                      <div className="timeline-date badge bg-primary">{exp.period}</div>
                      <h4 className="mb-1">{exp.position}</h4>
                      <h6 className="text-muted mb-3">{exp.company}</h6>
                      <p className="mb-3">{exp.description}</p>
                      <h6 className="mb-2">Key Achievements:</h6>
                      <ul className="timeline-achievements">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;