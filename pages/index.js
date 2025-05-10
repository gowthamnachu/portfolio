import React from 'react';

export default function Home() {
  return (
    <main>
      <section id="home" className="section hero-section">
        <div>
          <h1 className="hero-name">Your Name</h1>
          <p className="hero-title">Web Developer & Designer</p>
        </div>
      </section>

      <section id="education" className="section education-section">
        <h2>Education</h2>
        <div className="education-card">
          <h3>Degree Name</h3>
          <p>University Name</p>
          <p>2020 - 2024</p>
          <p>Relevant coursework and achievements</p>
        </div>
        {/* Add more education cards as needed */}
      </section>
    </main>
  );
}