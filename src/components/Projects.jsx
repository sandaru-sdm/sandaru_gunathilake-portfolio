import React, { useState } from 'react';
import portfolioData from '../data/portfolioData';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="projects py-5 d-flex justify-content-center align-items-center">
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="section-title position-relative pb-3">My Projects</h2>
            <div className="title-underline"></div>
            <p className="text-muted mt-3">Here are some of my recent works</p>
          </div>
        </div>
        
        <div className="row g-4 d-flex justify-content-center align-content-center">
          {portfolioData.projects.map(project => (
            <div 
              key={project.id} 
              className="col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-delay={project.id * 100}
            >
              <div className="card project-card h-100 shadow-sm">
                <img 
                  src={project.image} 
                  className="card-img-top project-image " 
                  alt={project.title} 
                />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text text-muted">{project.description}</p>
                  <div className="d-flex flex-wrap gap-2 mb-3">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="badge bg-light text-dark">{tech}</span>
                    ))}
                  </div>
                </div>
                <div className="card-footer bg-white border-0 pt-0">
                  <div className="d-flex gap-2">
                    <a 
                      href={project.demoLink} 
                      className="btn btn-sm btn-outline-primary flex-grow-1"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo
                    </a>
                    <a 
                      href={project.githubLink} 
                      className="btn btn-sm btn-outline-dark flex-grow-1"
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Code
                    </a>
                  </div>
                </div>
                <div className="project-overlay">
                  <button 
                    className="btn btn-primary"
                    onClick={() => setSelectedProject(project)}
                    data-bs-toggle="modal"
                    data-bs-target="#projectModal"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Project Modal */}
        <div className="modal fade" id="projectModal" tabIndex="-1" aria-hidden="true">
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              {selectedProject && (
                <>
                  <div className="modal-header">
                    <h5 className="modal-title">{selectedProject.title}</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body text-center">
                    <img 
                      src={selectedProject.image} 
                      className="img-fluid rounded mb-4 " 
                      alt={selectedProject.title} 
                    />
                    <h6 className='fw-bold text-start'>Description</h6>
                    <p className='text-start'>{selectedProject.description}</p>
                    <h6 className='text-start fw-bold'>Technologies Used</h6>
                    <div className="d-flex flex-wrap gap-2 mb-3">
                      {selectedProject.technologies.map((tech, index) => (
                        <span key={index} className="badge bg-primary">{tech}</span>
                      ))}
                    </div>
                  </div>
                  <div className="modal-footer">
                    <a 
                      href={selectedProject.demoLink} 
                      className="btn btn-primary"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo
                    </a>
                    <a 
                      href={selectedProject.githubLink} 
                      className="btn btn-outline-dark"
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub Repository
                    </a>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;