import React from "react";
import portfolioData from "../data/portfolioData";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer bg-dark text-light py-4">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 mb-3 mb-md-0">
            <h5 className="text-white mb-3">Sandaru Gunathilake</h5>
            <p className="mb-0 text-light">
              Thank you for visiting my personal portfolio website. Connect with
              me on social media.
            </p>
          </div>

          <div className="col-md-6 text-md-end">
            <div className="d-flex justify-content-md-end justify-content-center gap-3 mb-3 social-links">
              <a
                href={portfolioData.contact.socialMedia.linkedin}
                target="_blank"
                rel="noreferrer"
                className="social-link linkedin"
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a
                href={portfolioData.contact.socialMedia.github}
                target="_blank"
                rel="noreferrer"
                className="social-link github"
              >
                <i className="bi bi-github"></i>
              </a>
              <a
                href={portfolioData.contact.socialMedia.medium}
                target="_blank"
                rel="noreferrer"
                className="social-link bg-dark"
              >
                <i className="bi bi-medium"></i>
              </a>
            </div>
            <p className="mb-0 text-light">
              &copy; {currentYear} {portfolioData.about.name}. All Rights
              Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
