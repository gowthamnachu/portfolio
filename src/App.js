import React, { useState } from 'react';
import IntroVideo from './components/IntroVideo';
import Portfolio from './components/Portfolio';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Personal from './components/Personal';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  const [showMainContent, setShowMainContent] = useState(false);

  return (
    <Router>
      <div className="App">
        {/* Background Elements */}
        <div className="background-sphere"></div>
        <div className="background-sphere"></div>
        <div className="background-sphere"></div>
        <div className="background-sphere"></div>
        <div className="background-sphere"></div>
        <div className="background-sphere"></div>
        <div className="background-sphere"></div>

        {/* Geometric Shapes */}
        <div className="geometric-shape"></div>
        <div className="geometric-shape"></div>
        <div className="geometric-shape"></div>

        {/* Animated Name Ribbon */}
        <div className="animated-name-ribbon">
          <div className="ribbon-content">Nachu Gowtham</div>
        </div>

        {/* Particle System */}
        <div className="particle-system">
          {[...Array(20)].map((_, index) => (
            <div key={index} className="particle" style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * -20}s`
            }}></div>
          ))}
        </div>

        {!showMainContent && <IntroVideo onVideoEnd={() => setShowMainContent(true)} />}
        {showMainContent && (
          <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="/personal" element={<Personal />} />
            <Route path="/education" element={<Education />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
