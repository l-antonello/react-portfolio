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
        <p>Hi, my name is Luke Antonello and I am a web developer student. Currently working full time in a private non-profit in Philadelphia, I hope to show the unique and creative projects I've created at the Penn Coding Bootcamp. Click each title for the GitHub repo and the image for the site itself!</p>
      </div>
    </section>
  );
};

export default About;
