import React from 'react';
import '../styled-components/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://github.com/l-antonello" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/luke-antonello-248094165/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://stackoverflow.com/users/20992806/otterslacks" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-stack-overflow"></i>
        </a>
        {/* Add links to additional social platforms */}
      </div>
      <p>&copy; {new Date().getFullYear()} Luke Antonello. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
