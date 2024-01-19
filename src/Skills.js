import React from 'react';
import './css/Skills.css'; // Import the corresponding CSS file

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-content">
        <h1>Skills.</h1>
        <p className="skills-text">Technical skills that distinguish me.</p>

        <div className="skill-area">
          <h2>Full-Stack Development</h2>
          <p className="skills-list">
            <span className="bold-text">Frontend:</span> HTML, CSS, JavaScript, React<br />
            <span className="bold-text">Backend:</span> Node.js, RESTful APIs<br />
            <span className="bold-text">Databases:</span> mySQL, Postgres, Redis<br />
            <span className="bold-text">Tools & Version Control:</span> Git, Postman, Visual Studio, JetBrains<br />
          </p>
        </div>

        <div className="skill-area">
          <h2>Mobile & App Development</h2>
          <p className="skills-list">
            <span className="bold-text">Languages & Platforms:</span> Java (Android Studio), Dart (Flutter)<br />
            <span className="bold-text">Backend Integration:</span> RESTful APIs<br />
            <span className="bold-text">Design & Prototyping:</span> Figma<br />
          </p>
        </div>

        <div className="skill-area">
          <h2>Hardware & Embedded Systems</h2>
          <p className="skills-list">
            <span className="bold-text">Hardware Description Languages:</span> Verilog, VHDL, Assembly<br />
            <span className="bold-text">Simulation & Network Emulation:</span> GNS3<br />
          </p>
        </div>

        <div className="skill-area">
          <h2>Machine Learning & AI</h2>
          <p className="skills-list">
            <span className="bold-text">Frameworks & Libraries:</span> TensorFlow, PyTorch, NumPy<br />
            <span className="bold-text">Parallel Computing:</span> Cuda<br />
          </p>
        </div>

        <div className="skill-area">
          <h2>Additional Skills</h2>
          <p className="skills-list">
            <span className="bold-text">Project Management & Organization:</span> Jira, Notion<br />
          </p>
        </div>

        {/* Add more skill areas with their respective skills */}

      </div>
    </section>
  );
};

export default Skills;
