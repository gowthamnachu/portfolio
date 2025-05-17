import React, { useEffect, useRef} from 'react';
import '../styles/Portfolio.css';
import Logo from './Logo';
import { FaGithub, FaLinkedin, FaPhone, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Portfolio = () => {
  const heroRef = useRef(null);
  const educationRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const [content, setContent] = React.useState('');

  const handleButtonClick = (section) => {
    switch(section) {
      case 'personal':
        setContent(`Hyderabad\nNACHU GOWTHAM\ngowthamnachu\ngowthamnachu545@gmail.com\n8247258297`);
        break;
      case 'education':
        setContent(`Koneru Lakshmaiah University Hyderabad\nBachelor of Technology in Artificial Intelligence and Data Science-(CGPA:9.4)\nKoneru Lakshmaiah University Hyderabad\nBachelor of Business Administration-(CGPA:8.26)\nIIT GUWAHATI\nMicro Degree in Data Science and AI\nNarayana Junior College\nIntermediate- (Percentage- 94 )\nVagdevi Vidya Mandir\nHigh School- (CGPA- 10 )`);
        break;
      case 'projects':
        setContent(`InterviewXpert | Django, React, MongoDB, AI/ML\nGitHub | Website\n◦ Developed an AI-powered interview simulation platform that evaluates responses based on accuracy, fluency, and confidence\n◦ Integrated Speech processing, Automatic Speech Recognition (ASR), and NLP for hesitation detection and fluency analysis\n◦ Created Xpert Bot, an AI interview chatbot using Chatling for interactive practice\n◦ Provided real-time AI feedback with visual performance metrics.\n◦ Tools Used: Django, React, MongoDB, Netlify, Speech-to-Text, NLTK, TensorFlow, Chatling\nFinance Portfolio (FIPO) | React, WebSockets, Financial APIs\n◦ Developed a financial portfolio optimizer with AI-powered investment suggestions\nGitHub | Website\n◦ Implemented real-time asset price fetching and risk-return analysis using WebSockets\n◦ Tools Used: React, WebSockets, Yahoo Finance API, SciPy, NumPy, Pandas, Render\nMentorMarket | Django, HTML, CSS\nGitHub | Website\n◦ Built a mentorship marketplace connecting experts with mentees for career guidance\n◦ Implemented real-time mentor availability and session scheduling\n◦ Tools Used: Django, PostgreSQL, HTML, CSS, Render`);
        break;
      case 'skills':
        setContent(`Languages: Python, Java, C\nFrameworks: React, Django, Express.js, Android App development\nDeveloper Tools: VS Code, Trae, Android Studio, Pycharm, Dev c++, Eclipse\nCertifications\n◦ Amazon Web Services Cloud Practitioner\n◦ GitHub Foundations\n◦ Neural Networks and Deep Learning\nLeadership & Achievements\n◦ 41st Rank, BITS Hyderabad Hackathon 2024.\n◦ Entrepreneurship Development(ED) Cell Co-Ordinator, KLH University\n◦ PR, KLH SAC\n◦ Regional Level Skater`);
        break;
      default:
        setContent('');
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
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
    <>
      <div className="center-content">
        <h1>Nachu Gowtham</h1>
        <nav className="tree-nav">
          <ul>
            <li className="nav-item"><Link to="/personal">Personal</Link></li>
            <li className="nav-item"><Link to="/education">Education</Link></li>
            <li className="nav-item"><Link to="/Projects">Projects</Link></li>
            <li className="nav-item"><Link to="/skills">Skills</Link></li>
          </ul>
        </nav>
      </div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
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
      <div className="portfolio">
        <div className="content-display">
          <pre>{content}</pre>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
