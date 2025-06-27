import React from 'react';
import portfolioData from '../data/portfolioData';

const Certificates = () => {

  return (
    <section id="projects" className="projects py-5 d-flex justify-content-center align-items-center">
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="section-title position-relative pb-3">My Certificates</h2>
            <div className="title-underline"></div>
            <p className="text-muted mt-3">Here are my Certifications and Achievements</p>
          </div>
        </div>
        
        <div className="row g-4 d-flex justify-content-center align-content-center">
          {portfolioData.certificates.map(certificate => (
            <div 
              key={certificate.id} 
              className="col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-delay={certificate.id * 100}
            >
              <div className="card project-card h-100 shadow-sm">
                <img 
                  src={certificate.image} 
                  className="card-img-top certificate-image" 
                  alt={certificate.title} 
                />
                <div className="card-body">
                  <h5 className="card-title">{certificate.title}</h5>
                  <p className="card-text text-muted">{certificate.description}</p>
                  <div className="d-flex flex-wrap gap-2 mb-3">
                    {certificate.technologies.map((tech, index) => (
                      <span key={index} className="badge bg-light text-dark">{tech}</span>
                    ))}
                  </div>
                </div>
                <div className="card-footer bg-white border-0 pt-0">
                  <div className="d-flex gap-2">
                    <a 
                      href={certificate.link} 
                      className="btn btn-sm btn-outline-primary flex-grow-1"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Link
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;