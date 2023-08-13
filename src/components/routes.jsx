import React from 'react';
import { Route } from 'react-router-dom';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';
import Header from './Header';

const Routes = () => {
  return (
    <>
      <Route path="/header" component={Header} />
      <Route path="/" component={About} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/contact" component={Contact} />
      <Route path="/resume" component={Resume} />
    </>
  );
};

export default Routes;
