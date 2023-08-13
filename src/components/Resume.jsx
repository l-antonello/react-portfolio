import React from 'react';

import '../styled-components/Resume.css';


const Resume = () => {
  const proficiencies = [
    'JavaScript',
    'React',
    'HTML',
    'CSS',
    'Node.js',
    'Git',
    // Add more proficiencies as needed
  ];

  return (
    <section className="resume">
      <h2>Resume</h2>
      <div className="proficiencies">
        <h3>Proficiencies</h3>
        <ul>
          {proficiencies.map((proficiency, index) => (
            <li key={index}>{proficiency}</li>
          ))}
        </ul>
      </div>
      <div className="download-resume">
        <a href="/path/to/your/resume.pdf" download>
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;
