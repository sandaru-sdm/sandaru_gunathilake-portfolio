import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles/custom.css';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {

    const AOS = window.AOS;
    if (AOS) {
      AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      });
    }

    const backToTopButton = document.createElement('div');
    backToTopButton.className = 'back-to-top';
    backToTopButton.innerHTML = '<i class="bi bi-arrow-up"></i>';
    document.body.appendChild(backToTopButton);

    const toggleBackToTopButton = () => {
      if (window.scrollY > 300) {
        backToTopButton.classList.add('visible');
      } else {
        backToTopButton.classList.remove('visible');
      }
    };

    backToTopButton.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', toggleBackToTopButton);

    const animatedElements = document.querySelectorAll('.animated-element');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(element => {
      observer.observe(element);
    });

    return () => {
      window.removeEventListener('scroll', toggleBackToTopButton);
      document.body.removeChild(backToTopButton);
      animatedElements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;