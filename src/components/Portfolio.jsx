import React from 'react';

import pj1Image from '../assets/images/pj1.png';
import pj2Image from '../assets/images/pj2.png';
import pj3Image from '../assets/images/pj3.avif';
import hw9Image from '../assets/images/hw9.png';
import hw10Image from '../assets/images/hw10.png';
import hw12Image from '../assets/images/hw12.png';


import '../styled-components/Portfolio.css';


const Portfolio = () => {
  const projects = [
    {
      title: 'Project 1: Park and Brew Finder',
      description: 'A web application that allows users to search for parks and breweries in a given city. The application uses the Google Maps API and Open Brewery DB API to display the results.',
      liveLink: 'https://jjsdunc88.github.io/park-weather-app/',
      githubLink: 'https://github.com/jjsdunc88/park-weather-app',
      image: pj1Image,
    },
    {
      title: 'Project 2: Musicale',
      description: 'This application combines the functionality of Ticketmaster with the organization that a calendar provides. Users are able to search for concerts by city and save them to their calendar to easily see the upcoming music events they are interested in or have purchased tickets for.',
      liveLink: 'https://musicale-app-f8a5312a774d.herokuapp.com/',
      githubLink: 'https://github.com/ruggerheist/musicale',
      image: pj2Image,
    },
    {
      title: 'Project 3: Fitness Tracker (title TBD)',
      description: 'This application will allow users to track their workouts and view their progress over time. Users will be able to create new workouts and add exercises to them. They will also able to view their stats on a dashboard. Check back soon for more details!',
      liveLink: '',
      githubLink: '',
      image: pj3Image,
    },
    {
      title: 'Class Assignment: README-generator',
      description: 'This is javascript code for using Node.js to create a README. You can quickly and easily create a README file by using a command-line application to generate one. This allows the project creator to devote more time to working on the project. ',
      liveLink: 'https://drive.google.com/file/d/1OPk2UpJEi9V0vJH8QPZ_KkW_zWXooL4f/view',
      githubLink: 'https://github.com/l-antonello/README-generator',
      image: hw9Image,
    },
    {
      title: 'Class Assignment: svg-generator',
      description: 'The application prompts the user to select a color and shape, provide text for the logo, and save the generated SVG to a .svg file.',
      liveLink: 'https://drive.google.com/file/d/173mGi3VQTJFXx8ho7niWRfvD0QQ0uSYg/view',
      githubLink: 'https://github.com/l-antonello/svg-generator',
      image: hw10Image,
    },
    {
      title: 'Class Assignment: employee-tracker',
      description: "This is a command-line application from scratch to manage a company's employee database, using Node.js, Inquirer, and MySQL.",
      liveLink: '',
      githubLink: 'https://github.com/l-antonello/employee-tracker/tree/main',
      image: hw12Image,
    },
    // Add more project objects as needed
  ];

  return (
    <section className="portfolio">
      <h2>Portfolio</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              <h3>{project.title}</h3>
            </a>
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={project.title} />
            </a>
            <p>{project.description}</p>
            <div className="links">
              <div className="link-item">
                {/* <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Live</a> */}
              </div>
              <div className="link-item">
                {/* <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
