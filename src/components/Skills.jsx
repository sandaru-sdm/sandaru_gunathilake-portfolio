import React, { useEffect } from 'react';
import portfolioData from '../data/portfolioData';

const Skills = () => {
  useEffect(() => {
    const progressBars = document.querySelectorAll('.progress-bar');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const progressBar = entry.target;
          const percentage = progressBar.getAttribute('aria-valuenow');
          progressBar.style.width = percentage + '%';
          progressBar.style.transition = 'width 1.5s ease-in-out';
          progressBar.classList.add('bg-primary'); 
        }
      });
    }, { threshold: 0.1 });

    progressBars.forEach(progressBar => {
      observer.observe(progressBar);
    });

    return () => {
      progressBars.forEach(progressBar => {
        observer.unobserve(progressBar);
      });
    };
  }, []);

  return (
    <section id="skills" className="skills py-5 bg-light justify-content-center align-items-center d-flex">
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="section-title position-relative pb-3">My Skills</h2>
            <div className="title-underline"></div>
            <p className="text-muted mt-3">Here are my technical skills and proficiency levels</p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 mb-4">
            <div className="skill-content pe-lg-5" data-aos="fade-right">
              <h3 className="mb-4">Technical Expertise</h3>
              <p className="mb-4">
                I specialize in creating modern, responsive web applications with clean code and optimal performance.
                My technical skills range from frontend development with React to backend solutions with various technologies.
              </p>
              <div className="d-flex flex-wrap gap-2 mb-4">
                {portfolioData.skills.slice(0, 10).map((skill, index) => (
                  <span key={index} className="badge bg-primary p-2">{skill.name}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-left">
            {portfolioData.skills.slice(0, 10).map((skill, index) => (
              <div key={index} className="mb-4">
                <div className="d-flex justify-content-between mb-1">
                  <h6 className="mb-0">{skill.name}</h6>
                  <h6 className="mb-0">{skill.percentage}%</h6>
                </div>
                <div className="progress" style={{ height: '10px' }}>
                  <div 
                    className="progress-bar" 
                    role="progressbar" 
                    style={{ width: '0%' }}  
                    aria-valuenow={skill.percentage} 
                    aria-valuemin="0" 
                    aria-valuemax="100">
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;