import React from 'react';

import '../styled-components/Portfolio.css';


const Portfolio = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'Description of Project 1...',
      liveLink: 'https://project1.com',
      githubLink: 'https://github.com/user/project1',
    },
    // Add more project objects as needed
  ];

  return (
    <section className="portfolio">
      <h2>Portfolio</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="links">
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Live</a>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
