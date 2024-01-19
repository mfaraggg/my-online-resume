import React from 'react';
import './css/App.css';
import Home from './Home';
import Navbar from './Navbar';
import Education from './Education';
import Skills from './Skills';
import Experience from './Experience';
import Projects from './Projects';
import Achievements from './Achievements';
import Extracurriculars from './Extracurriculars';
import CopyRight from './Copyright';

// JavaScript for showing the scroll-to-top button when scrolling down
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  const btn = document.getElementById("scrollTopBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
}

function goToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Home />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Extracurriculars />
        <CopyRight />
      </header>
      <button onClick={goToTop} id="scrollTopBtn" title="Go to top">&#8679;</button>
    </div>
  );
}

export default App;
