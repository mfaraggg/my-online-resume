import React from 'react';
import './css/Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects.</h2>
      <p>Direct applications to my obtained technical skills.</p>
      <div className="project-list">
        <div className="project-item">
          <h3>Digital Twins for Autonomous Drone Delivery System</h3>
          <p>
            Developed digital twin technology for optimizing drone-based delivery systems, enabling enhanced route planning and delivery efficiency.
          </p>
        </div>
        <div className="project-item">
          <h3>Abstractive Text Summarization Model with LongT5</h3>
          <p>
            Finetuned the LongT5 model for text summarization, focusing on movies and TV shows, improving the accuracy and efficiency of the summarization process.
          </p>
        </div>
        <div className="project-item">
            <h3>Scraped Web Data and Full-Stack Web Application</h3>
            <p>
            Scraped the web for over 20 hours to extract information on available job postings and subsequently developed a robust backend application.
            </p>
        </div>
        <div className="project-item">
  <h3>Full-Stack Android Application for Shopping</h3>
  <p>
    Developed a full-stack Android application to save receipts, track spending, and hold gift cards, digitizing the shopping process.
  </p>
</div>
<div className="project-item">
  <h3>Pac-Man Game with Dijkstra's Algorithm (C++)</h3>
  <p>
    Programmed a Pac-Man game using Dijkstra’s algorithm and the SFML library in C++.
  </p>
</div>

<div className="project-item">
  <h3>Multithreaded Distributed System in Rust</h3>
  <p>
    Created a multithreaded distributed system to support fault tolerance with load balancing and distributed election methods in Rust.
  </p>
</div>

<div className="project-item">
  <h3>Engineered VLANs with Diverse Network Features</h3>
  <p>
    Engineered VLANs with remote access, secured networks, inter-department chatting, DHCP servers, and DMZ networks.
  </p>
</div>

<div className="project-item">
  <h3>Pipelined Data Path RISC-V CPU on Nexys 100T FPGA</h3>
  <p>
    Implemented a pipelined data path RISC-V CPU that supports all RV32I instructions on a Nexys 100T FPGA board.
  </p>
</div>

<div className="project-item">
  <h3>Machine Language to Assembly Language Translator</h3>
  <p>
    Prototyped a computer program to translate machine language into assembly language.
  </p>
</div>

<div className="project-item">
  <h3>Search Engine with Page Rank Algorithm</h3>
  <p>
    Designed a search engine that sorts results using Google’s Page Rank algorithm in C++.
  </p>
</div>

        {/* Include other project items similarly */}
        {/* Add content for the remaining projects */}
      </div>
    </section>
  );
};

export default Projects;
