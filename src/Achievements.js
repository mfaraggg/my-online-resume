import React from 'react';
import './css/Achievements.css';
import USAID from './img/USAID.png';
import SU from './img/SU.png';
import ENGCOMM from './img/ENGCOMM.png';
import ROWING from './img/rowing.png';

const Achievements = () => {
  return (
    <section id="achievements" className="achievements-sec">
        <div className="achievements-section">
        <h1>Achievements.</h1>
        <p>Recognitions and awards for my academic and extracurricular achievements.</p>
        <div className="achievement">
            <div className="job-experience">
                <a href="https://www.usaid.gov/" target="_blank" rel="noopener noreferrer">
                    <img src={USAID} alt="USAID" className="custom-logo" />
                </a>
            <div className="job-details">
                <h2>Tomorrow’s Leaders Gender Scholars</h2>
                <ul>
                <li>Awarded a fully funded one year scholarship for exceptional leadership and gender awareness.</li>
                <li>Conducted in-depth scholarly research on gender issues, authoring two research papers.</li>
                <li>Engaged in over 30 hours of civic involvement, participating in community service initiatives promoting gender equality.</li>
                </ul>
            </div>
            </div>
            <div className="job-experience">
                <a href="https://www.reallifecompetition.org/" target="_blank" rel="noopener noreferrer">
                    <img src={SU} alt="SU" className="company-logo" />
                </a>
            <div className="job-details">
                <h2>Student Union Real Life Global Competition</h2>
                <ul>
                <li>Competed against 100+ local and international teams over 10 days.</li>
                <li>Secured third place and received a $500 award for the proposed idea.</li>
                </ul>
            </div>
            </div>
            <div className="job-experience">
                <a href="https://www.engcomm.ca/" target="_blank" rel="noopener noreferrer">
                    <img src={ENGCOMM} alt="ENGCOMM" className="company-logo" />
                </a>
            <div className="job-details">
                <h2>Engineering & Commerce Case Competition</h2>
                <ul>
                <li>Achieved first place in a cross-faculty case competition and represented AUC in Montreal, Quebec, Canada.</li>
                <li>Presented solutions to stakeholders from companies like L3Harris and Canadian Certification Center.</li>
                </ul>
            </div>
            </div>
            <div className="job-experience">
                <a href="https://www.instagram.com/aucrowing?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
                    <img src={ROWING} alt="ROWING" className="custom-logo" />
                </a>
            <div className="job-details">
                <h2>Rowing Competitions</h2>
                <ul>
                <li>Secured second place nationally in the Egyptian Annual National Rowing competition.</li>
                <li>Won 3 gold and 1 silver medal in AUC-hosted Fifth Sector’s Annual Indoor Rowing Competition.</li>
                </ul>
            </div>
            </div>
        </div>
        </div>
    </section>
  );
};

export default Achievements;
