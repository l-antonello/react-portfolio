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
        {/* Add links to additional social platforms */}
      </div>
      <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
