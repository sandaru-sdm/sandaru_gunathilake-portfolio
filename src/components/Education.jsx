import React from 'react';
import portfolioData from '../data/portfolioData';

const Education = () => {
  return (
    <section id="education" className="education py-5 bg-light d-flex justify-content-center align-items-center">
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="section-title position-relative pb-3">My Education</h2>
            <div className="title-underline"></div>
            <p className="text-muted mt-3">My academic background and certifications</p>
          </div>
        </div>
        
        <div className="row g-4 d-flex justify-content-center align-content-center">
          {portfolioData.education.map((edu, index) => (
            <div 
              key={edu.id} 
              className="col-md-6"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="education-card card h-100 shadow-sm border-0">
                <div className="card-body p-4">
                  <div className="d-flex justify-content-between mb-2">
                    <h5 className="card-title mb-0">{edu.degree}</h5>
                    <span className="badge bg-primary">{edu.year}</span>
                  </div>
                  <h6 className="card-subtitle mb-2 text-muted">{edu.institution}</h6>
                  <p className="card-text">{edu.description}</p>
                  
                  {edu.courses && edu.courses.length > 0 && (
                    <div className="mt-3">
                      <h6 className="mb-2">Relevant Coursework:</h6>
                      <div className="d-flex flex-wrap gap-2">
                        {edu.courses.map((course, i) => (
                          <span key={i} className="badge bg-light text-dark">{course}</span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {edu.achievements && edu.achievements.length > 0 && (
                    <div className="mt-3">
                      <h6 className="mb-2">Achievements:</h6>
                      <ul className="mb-0 ps-3">
                        {edu.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                
                {edu.logo && (
                  <div className="education-logo">
                    <img src={edu.logo} alt={edu.institution} className="img-fluid" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;