import React from 'react';
import './css/Extracurriculars.css';
import SU from './img/SU.png';
import AUC from './img/AUC-Logo-New.png';
import BALogo from './img/BA-logo2.png';
import ESLogo from './img/ES-logo.png';

const Extracurriculars = () => {
  return (
    <div className="extracurriculars-section" id='extracurriculars'>
      <h1>Extracurriculars.</h1>
      <p>My involvement in student organizations and clubs.</p>
      <div className="activity">
        <div className="activity-details">
            <a href="https://www.aucegypt.edu/student-life/ambassador-program" target="_blank" rel="noopener noreferrer">
                <img src={AUC} alt="AUC Logo" className="activity-logo" />
            </a>
          <div className="activity-description">
            <h2>Student Ambassador <span className="job-period"><i>September 2022 – Present</i></span></h2>
            <ul>
                <li>Represented the university at formal events, offering tours to distinguished visitors, prospective students, and families.</li>
            </ul>
          </div>
        </div>
        <div className="activity-details">
            <a href="https://www.linkedin.com/company/auc-business-association?originalSubdomain=eg" target="_blank" rel="noopener noreferrer">
                <img src={BALogo} alt="BA Logo" className="activity-logo" />
            </a>
          <div className="activity-description">
            <h2>Business Association <span className="job-period"><i>September 2019 – Present</i></span></h2>
            <ul>
                <li>Organized academic competitions and facilitated student-professor interactions through meetups.</li>
                <li>Developed distributable packages containing vouchers and trendy products for all students.</li>
                <li>Managed the yearly budget for events and financial responsibilities.</li>
            </ul>
          </div>
        </div>
        <div className="activity-details">
            <a href="https://www.entrepreneurssociety.org/" target="_blank" rel="noopener noreferrer">
                <img src={ESLogo} alt="ES Logo" className="activity-logo" />
            </a>
          <div className="activity-description">
            <h2>Entrepreneurship Society <span className="job-period"><i>September 2020 – June 2023</i></span></h2>
            <ul>
                <li>Orchestrated marketing campaigns for two major annual events, reaching over 3000 students.</li>
                <li>Hosted 50+ local brands in an event to bolster support and awareness for small Egyptian businesses.</li>
            </ul>
          </div>
        </div>
        <div className="activity-details">
            <a href="https://www.aucsu.org/" target="_blank" rel="noopener noreferrer">
                <img src={SU} alt="SU Logo" className="activity-logo" />
            </a>
          <div className="activity-description">
            <h2>Student Union <span className="job-period"><i>September 2020 – June 2022</i></span></h2>
            <ul>
                <li>Conducted logistical research for a 500-person international conference held at AUC.</li>
                <li>Contributed to organizing culturally diverse events for engaging international students at AUC.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Extracurriculars;
