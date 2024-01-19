import React from 'react';
import './css/Experience.css'; 
import innovetyLogo from './img/innovety-logo.png';
import trellaLogo from './img/trella-logo.png';
import benyaLogo from './img/benya-logo.png';

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-content">
        <h1>Experience.</h1>
        <p>My professional experience and internships.</p>
        <div className="job-experience">
          <a href="https://www.innovety.com/" target="_blank" rel="noopener noreferrer">
            <img src={innovetyLogo} alt="Innovety" className="company-logo innovety-logo" />
          </a>
          <div className="job-details">
            <h2>Junior Consultant Intern, Innovety <span className="job-period"><i>June 2023 – August 2023</i></span></h2>
            <ul>
              <li>Developed and implemented a comprehensive digital literacy training module targeting underprivileged areas in Egypt.</li>
              <li>Utilized European frameworks to structure module content and ensure alignment with international standards.</li>
              <li>Conducted thorough research and analysis of market trends and industry dynamics in businesses and governments.</li>
            </ul>
          </div>
        </div>

        <div className="job-experience">
          <a href="https://www.trella.app/" target="_blank" rel="noopener noreferrer">
            <img src={trellaLogo} alt="Trella" className="company-logo trella-logo" />
          </a>
          <div className="job-details">
            <h2>Backend Development Intern, Trella YC S19 <span className="job-period"><i>June 2022 – August 2022</i></span></h2>
            <ul>
              <li>Deployed a feature to automatically update Trella’s portal with trucks’ statuses based on their locations relative to their destinations using geofencing concepts which drastically decreased the number of touchpoints between the operation’s department and the truckers.</li>
              <li>Debugged multiple security issues to guarantee only authorized users can access specific features.</li>
              <li>Optimized certain microservices to enhance their performance and increase developers’ productivity.</li>
            </ul>
          </div>
        </div>

        <div className="job-experience">
          <a href="https://benya.tech/" target="_blank" rel="noopener noreferrer">
            <img src={benyaLogo} alt="Benya Systems" className="company-logo benya-logo" />
          </a>
          <div className="job-details">
            <h2>Software Engineering Intern, Benya Systems <span className="job-period"><i>July 2021 – August 2021</i></span></h2>
            <ul>
              <li>Developed webpages using .NET MVC that automatically send and track taxes while ensuring authenticity of transactions.</li>
              <li>Wrote SQL queries that integrated between Benya Systems and local businesses’ databases to ensure readily updated information.</li>
              <li>Designed an interactive dashboard including dynamic tables and graphs that reported relevant data catered to our clients’ needs.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
