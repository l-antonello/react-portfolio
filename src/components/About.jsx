import React from 'react';

import '../styled-components/About.css';

const About = () => {
  return (
    <section className="about">
      <h2>About Me</h2>
      <div className="bio">
        <img src="../assets/images/headshot.png" alt="luke-avatar" />
        <p>Hi, my name is Luke Antonello and I am a web developer. Currently working full time in a private non-profit in Philadelphia, I hope to show the unique and creative projects I've created at the Penn Coding Bootcamp.</p>
      </div>
    </section>
  );
};

export default About;
