import React from 'react';
import '../styles/Portfolio.css';
import Logo from './Logo';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <Logo />
      <section className="hero">
        <h1>NACHU GOWTHAM</h1>
        <div className="contact-info">
          <p>gowthamnachu545@gmail.com</p>
          <p>8247258297</p>
          <p>Hyderabad</p>
        </div>
      </section>

      <section className="education">
        <h2>Education</h2>
        <div className="education-item">
          <h3>Koneru Lakshmaiah University Hyderabad</h3>
          <p>Bachelor of Technology in Artificial Intelligence and Data Science - (CGPA: 9.4)</p>
          <p>July 2023– April 2027</p>
        </div>
        {/* Add other education items */}
      </section>

      <section className="projects">
        <h2>Projects</h2>
        <div className="project-item">
          <h3>InterviewXpert</h3>
          <p>Django, React, MongoDB, AI/ML</p>
          <ul>
            <li>Developed an AI-powered interview simulation platform</li>
            <li>Integrated Speech processing and ASR</li>
            {/* Add other points */}
          </ul>
        </div>
        {/* Add other projects */}
      </section>

      <section className="skills">
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
          {/* Add other skills */}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
