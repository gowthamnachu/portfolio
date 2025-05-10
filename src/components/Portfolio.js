import React, { useEffect, useRef, useState } from 'react';
import '../styles/Portfolio.css';
import Logo from './Logo';
import { FaGithub, FaLinkedin, FaPhone, FaInstagram } from 'react-icons/fa';


const Portfolio = () => {
  const heroRef = useRef(null);
  const educationRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      document.documentElement.style.setProperty('--scroll', window.scrollY / (document.documentElement.scrollHeight - window.innerHeight));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px' }
    );

    // Store current refs in a variable for cleanup
    const currentRefs = [heroRef.current, educationRef.current, projectsRef.current, skillsRef.current];
    
    currentRefs.forEach(element => {
      if (element) observer.observe(element);
    });

    return () => {
      currentRefs.forEach(element => {
        if (element) observer.unobserve(element);
      });
    };
  }, [heroRef, educationRef, projectsRef, skillsRef]);

  return (
    <div className="portfolio" style={{
        '--parallax-speed': scrollY * 0.002 + 'px'
      }}>
      {[...Array(8)].map((_, i) => (
        <div key={i} className="particle" style={{
          '--delay': i * 2 + 's',
          '--position': (i % 4) * 25 + '%'
        }}></div>
      ))}
      <header className="header">
        <a href="tel:8247258297" className="phone-link">
          <FaPhone className="social-icon" />
          <span>8247258297</span>
        </a>
        <a href="https://github.com/gowthamnachu" target="_blank" rel="noopener noreferrer">
          <FaGithub className="social-icon" />
     </a>
        <a href="https://www.linkedin.com/in/gowthamnachu/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="social-icon" />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="social-icon" />
        </a>
      </header>
      <Logo />
      <section className="hero" ref={heroRef}>
        <div className="hero-content">
          <h1>NACHU GOWTHAM</h1>
          <div className="contact-info">
            <p>gowthamnachu545@gmail.com</p>
            <p>8247258297</p>
            <p>Hyderabad</p>
          </div>
        </div>
      </section>

      <section className="education" ref={educationRef}>
        <h2>Education</h2>
        <div className="education-item">
          <h3>Koneru Lakshmaiah University Hyderabad</h3>
          <p>Bachelor of Technology in Artificial Intelligence and Data Science - (CGPA: 9.4)</p>
          <p>July 2023– April 2027</p>
        </div>
      </section>

      <section className="projects" ref={projectsRef}>
        <h2>Projects</h2>
        <div className="project-item">
          <h3>InterviewXpert</h3>
          <p>Django, React, MongoDB, AI/ML</p>
          <ul>
            <li>Developed an AI-powered interview simulation platform</li>
            <li>Integrated Speech processing and ASR</li>
          </ul>
        </div>
      </section>

      <section className="features">
        <h2>Features</h2>
        <ul>
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
        </ul>
      </section>

      <section className="skills" ref={skillsRef}>
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          <div>
            <h3>Languages</h3>
            <p>Python, Java, C</p>
          </div>
          <div>
            <h3>Frameworks</h3>
            <p>React, Django, Express.js, Android App development</p>
          </div>
        </div>
      </section>
    <div className="portfolio">
      
    </div>
  </div>
  );
};

export default Portfolio;
