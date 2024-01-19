import React from 'react';
import myImage from './img/gardenspicturenobk.png';
import linkedinLogo from './img/linkedin-logo.png';
import githubLogo from './img/github-logo.png';
import './css/Home.css';

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <div className="content-with-image">
          <div className="text-content">
            <h1>Hi. I'm Mohammed.</h1>
            <p className="intro-text">
              I am a passionate Computer Engineering student at The American University in Cairo (AUC), Egypt, with an anticipated graduation in Spring 2024. Dedicated to innovation, I have led impactful projects in drone technology, machine learning, and full-stack development.
            </p>
            <p className="contact-info">
              <span className="bold-text phone">PHONE</span> +20 109 493 8252<br />
              <span className="bold-text email">EMAIL</span> mohammedfarag0101@gmail.com<br />
              <span className="bold-text address">ADDRESS</span> New Cairo, Cairo, Egypt
            </p>
            <div className="logos">
              <a className='logoIn' href="https://www.linkedin.com/in/mohammedfaragg/" target="_blank" rel="noopener noreferrer">
                <img src={linkedinLogo} alt="LinkedIn" className="logo linkedin-logo" />
              </a>
              <div className="vertical-line"></div>
              <a className='logoGit' href="https://github.com/mfaraggg" target="_blank" rel="noopener noreferrer">
                <img src={githubLogo} alt="GitHub" className="logo github-logo" />
              </a>
            </div>
          </div>
          <img src={myImage} alt="Mohammed Farag" className="profile-image" />
        </div>
      </div>
    </section>
  );
};

export default Home;
