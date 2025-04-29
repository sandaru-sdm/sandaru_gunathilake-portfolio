import React, { useEffect } from "react";
import portfolioData from "../data/portfolioData";

const Hero = () => {
  useEffect(() => {
    const text = "I build things for the web";
    const typingElement = document.getElementById("typing-text");

    if (typingElement) {
      let i = 0;
      const typingInterval = setInterval(() => {
        if (i < text.length) {
          typingElement.textContent += text.charAt(i);
          i++;
        } else {
          clearInterval(typingInterval);
        }
      }, 100);

      return () => clearInterval(typingInterval);
    }
  }, []);

  return (
    <section
      id="home"
      className="hero bg-dark text-light min-vh-100 d-flex align-items-center"
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 animate__animated animate__fadeInLeft">
            <h1 className="display-4 fw-bold mb-3">
              Hi, I'm {portfolioData.about.name}
            </h1>
            <h2 className="h3 mb-4 text-primary" id="typing-text"></h2>
            <p className="lead mb-4">{portfolioData.about.title}</p>
            <div className="d-flex gap-3">
              <a href="#contact" className="btn btn-primary btn-lg">
                Get In Touch
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
          <div className="col-lg-6 d-flex justify-content-center animate__animated animate__fadeInRight">
            <div className="hero-image-container mt-5 mt-lg-0">
              <img
                src={portfolioData.about.image1}
                alt="Hero Image"
                className="img-fluid rounded-circle hero-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
