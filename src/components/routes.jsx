import React from 'react';
import { Route } from 'react-router-dom';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={About} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/contact" component={Contact} />
      <Route path="/resume" component={Resume} />
    </Switch>
  );
};

export default Routes;
