import React from "react";
import portfolioData from "../data/portfolioData";

const About = () => {
  return (
    <section id="about" className="about py-5 vh-100">
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="section-title position-relative pb-3">About Me</h2>
            <div className="title-underline"></div>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-lg-5 mb-4 mb-lg-0">
            <div className="about-image-container overflow-hidden rounded shadow-lg">
              <img
                src={portfolioData.about.image2}
                alt="About Me"
                className="img-fluid about-image"
                data-aos="fade-right"
                data-aos-duration="1000"
              />
            </div>
          </div>

          <div
            className="col-lg-7"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <h3 className="mb-4">I'm a {portfolioData.about.title}</h3>
            <p className="lead mb-4">{portfolioData.about.description}</p>

            <div className="row mb-4">
              <div className="col-md-6 mb-3">
                <div className="d-flex align-items-center">
                  <i className="bi bi-envelope-fill text-primary me-2 fs-5"></i>
                  <p className="mb-0">{portfolioData.contact.email}</p>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="d-flex align-items-center">
                  <i className="bi bi-geo-alt-fill text-primary me-2 fs-5"></i>
                  <p className="mb-0">{portfolioData.contact.location}</p>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="d-flex align-items-center">
                  <i className="bi bi-telephone-fill text-primary me-2 fs-5"></i>
                  <p className="mb-0">{portfolioData.contact.phone}</p>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="d-flex align-items-center">
                  <i className="bi bi-github text-primary me-2 fs-5"></i>
                  <p className="mb-0">github.com/sandaru-sdm</p>
                </div>
              </div>
            </div>

            <div className="d-flex gap-3">
              <a href="#projects" className="btn btn-primary px-4 py-2">
                My Work
              </a>
              <a
                href={portfolioData.about.resume}
                className="btn btn-outline-primary px-4 py-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
