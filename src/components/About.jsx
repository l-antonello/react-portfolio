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
        <p>Hi, my name is Luke Antonello and I am a web developer graduate. Currently working full time in a private non-profit in Philadelphia, I hope to show the unique and creative projects I've created at the Penn Coding Bootcamp. Click each title in the header for a different section!</p>
      </div>
    </section>
  );
};

export default About;
