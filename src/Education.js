import React from 'react';
import './css/Education.css'; 
import AUC from './img/AUC-nobk.png';
import ISG from './img/ISG-nobk.png'; 

const About = () => {
  const link1 = "https://www.aucegypt.edu/";
  const link2 = "https://dammam.isg.edu.sa/";

  return (
    <section id="education" className="about-section">
      <div className="about-header">
        <h1>Education.</h1>
        <p className="about-text">The schools that have shaped and outlined my success</p>
      </div>
      <div className="about-content">
        <div className="content-item">
          <a href={link1} target="_blank" rel="noopener noreferrer">
            <img src={AUC} alt="AUC Logo" className="content-image" />
          </a>
          <div className="content-text">
            <h2>Bachelor of Science in Computer Engineering & Minor in Business Entrepreneurship</h2>
            <p>GPA: 3.7, High Honors, Dean's List.</p>
          </div>
        </div>
        <div className="content-item">
          <a href={link2} target="_blank" rel="noopener noreferrer">
            <img src={ISG} alt="ISG Logo" className="content-image2" />
          </a>
          <div className="content-text2">
            <h2>American High School Diploma</h2>
            <p>GPA: 3.75, High Honors. SAT: 1370</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
