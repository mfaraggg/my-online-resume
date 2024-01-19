import React from 'react';
import './css/Navbar.css';

const Navbar = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-brand">
          <span>Mohammed Farag.</span>
        </div>
        <div className="navbar-links">
          <button onClick={() => scrollToSection('home')}>Home</button>
          <button onClick={() => scrollToSection('education')}>Education</button>
          <button onClick={() => scrollToSection('skills')}>Skills</button>
          <button onClick={() => scrollToSection('experience')}>Experience</button>
          <button onClick={() => scrollToSection('projects')}>Projects</button>
          <button onClick={() => scrollToSection('achievements')}>Achievements</button>
          <button onClick={() => scrollToSection('extracurriculars')}>Extracurriculars</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
