import React from 'react';
import { NavLink } from 'react-router-dom';

import '../styled-components/Header.css';

const Header = () => {
  return (
    <header>
      <h1>Luke's Portfolio</h1>
      <nav>
        <NavLink exact to="/" activeClassName="active">About Me</NavLink>
        <NavLink
          to="/portfolio"
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'active' : ''
          }
        >
          Portfolio
        </NavLink>
        <NavLink to="/contact" activeClassName="active">Contact</NavLink>
        <NavLink to="/resume" activeClassName="active">Resume</NavLink>
      </nav>
    </header>
  );
};

export default Header;
