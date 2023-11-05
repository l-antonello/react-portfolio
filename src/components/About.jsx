import React from 'react';
import '../styled-components/About.css';
import headshotImage from '../assets/images/headshot.png';

const About = () => {
  return (
    <section className="about">
      <h2>About Me</h2>
      <div className="bio">
        <a href="https://github.com/l-antonello" target="_blank" rel="noopener noreferrer">
          <img src={headshotImage} alt="luke-avatar" className="headshot" />
        </a>
        <p>Hi, my name is Luke Antonello and I am a full stack web developer. Currently a Front-End Web Developer leveraging my background in psychology to build more intuitive user experiences on the web. Recently earned a certificate in Full Stack Development from the University of Pennsylvania and developed skills in JavaScript, CSS, React.js, and responsive web design. Known as an innovative problem-solver passionate about developing apps, with a focus on mobile-first design and development. Aim for each project is to best engage the audience for an impactful user-experience. Excited to leverage my skills in the future as part of a fast-paced, quality-driven team in order to build better experiences on the web. Click each title in the header for a different section!</p>
      </div>
    </section>
  );
};

export default About;
