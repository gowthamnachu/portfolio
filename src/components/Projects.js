import React from 'react';

const Projects = () => {
  return (
    <div className="projects container">
      <h2>Projects</h2>
      <div className="project-item card">
        <h3>InterviewXpert</h3>
        <p><strong>Technologies:</strong> Django, React, MongoDB, AI/ML</p>
        <p><button className="btn">GitHub</button> | <button className="btn">Website</button></p>
        <ul>
          <li>Developed an AI-powered interview simulation platform that evaluates responses based on accuracy, fluency, and confidence</li>
          <li>Integrated Speech processing, Automatic Speech Recognition (ASR), and NLP for hesitation detection and fluency analysis</li>
          <li>Created Xpert Bot, an AI interview chatbot using Chatling for interactive practice</li>
          <li>Provided real-time AI feedback with visual performance metrics.</li>
          <li>Tools Used: Django, React, MongoDB, Netlify, Speech-to-Text, NLTK, TensorFlow, Chatling</li>
        </ul>
      </div>
      <div className="project-item card">
        <h3>Finance Portfolio (FIPO)</h3>
        <p><strong>Technologies:</strong> React, WebSockets, Financial APIs</p>
        <p><button className="btn">GitHub</button> | <button className="btn">Website</button></p>
        <ul>
          <li>Developed a financial portfolio optimizer with AI-powered investment suggestions</li>
          <li>Implemented real-time asset price fetching and risk-return analysis using WebSockets</li>
          <li>Tools Used: React, WebSockets, Yahoo Finance API, SciPy, NumPy, Pandas, Render</li>
        </ul>
      </div>
      <div className="project-item card">
        <h3>MentorMarket</h3>
        <p><strong>Technologies:</strong> Django, HTML, CSS</p>
        <p><button className="btn">GitHub</button> | <button className="btn">Website</button></p>
        <ul>
          <li>Built a mentorship marketplace connecting experts with mentees for career guidance</li>
          <li>Implemented real-time mentor availability and session scheduling</li>
          <li>Tools Used: Django, PostgreSQL, HTML, CSS, Render</li>
        </ul>
      </div>
    </div>
  );
};

export default Projects;