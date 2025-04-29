import React from "react";
import portfolioData from "../data/portfolioData";

const Contact = () => {
  return (
    <section
      id="contact"
      className="contact py-5 d-flex justify-content-center align-items-center vh-100"
    >
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="section-title position-relative pb-3">
              Get In Touch
            </h2>
            <div className="title-underline"></div>
            <p className="text-muted mt-3">
              Let's connect and discuss how I can help with your projects
            </p>
          </div>
        </div>

        <div className="row g-5">
          <div className="col-lg-5" data-aos="fade-right">
            <div className="contact-info p-4 shadow rounded bg-white">
              <h3 className="mb-4">Contact Information</h3>

              <div className="d-flex align-items-center mb-4">
                <div className="contact-icon-box d-flex align-items-center justify-content-center">
                  <i className="bi bi-geo-alt text-primary fs-4"></i>
                </div>
                <div className="ms-3">
                  <h5 className="mb-0">Location</h5>
                  <p className="mb-0 text-muted">
                    {portfolioData.contact.location}
                  </p>
                </div>
              </div>

              <div className="d-flex align-items-center mb-4">
                <div className="contact-icon-box d-flex align-items-center justify-content-center">
                  <i className="bi bi-envelope text-primary fs-4"></i>
                </div>
                <div className="ms-3">
                  <h5 className="mb-0">Email</h5>
                  <p className="mb-0 text-muted">
                    {portfolioData.contact.email}
                  </p>
                </div>
              </div>

              <div className="d-flex align-items-center mb-4">
                <div className="contact-icon-box d-flex align-items-center justify-content-center">
                  <i className="bi bi-telephone text-primary fs-4"></i>
                </div>
                <div className="ms-3">
                  <h5 className="mb-0">Phone</h5>
                  <p className="mb-0 text-muted">
                    {portfolioData.contact.phone}
                  </p>
                </div>
              </div>

              <h4 className="mt-5 mb-3">Connect With Me</h4>
              <div className="d-flex gap-3 social-links">
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
            </div>
          </div>

          <div className="col-lg-7" data-aos="fade-left">
            <div className="contact-form p-4 shadow rounded bg-white">
              <h3 className="mb-4">Send Me a Message</h3>

              <form
                action={`https://formsubmit.co/${portfolioData.contact.randomString}`}
                method="POST"
                target="_blank"
              >
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input
                  type="hidden"
                  name="_autoresponse"
                  value="Thanks for reaching out. I'll get back to you soon!"
                />
                <input
                  type="hidden"
                  name="_next"
                  value="https://yourdomain.com/thanks"
                />

                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        required
                      />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-floating mb-3">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Your Email"
                        required
                      />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        name="subject"
                        placeholder="Subject"
                      />
                      <label htmlFor="subject">Subject</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-floating mb-3">
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        placeholder="Your Message"
                        style={{ height: "160px" }}
                        required
                      ></textarea>
                      <label htmlFor="message">Your Message</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <button type="submit" className="btn btn-primary py-3 px-4">
                      Send Message
                      <i className="bi bi-send ms-2"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
