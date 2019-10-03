import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";

// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Resume from './components/Resume';

import './App.css';

export default function App() {
  return (
    <Router>
      <div className="App">
        <nav style={{position: 'absolute', width: '100%'}}>
          <div style={{display: 'flex', justifyContent: 'space-between', padding: 30}}>
            <div style={{display: 'inline-block', order: 1}}>
              <Typography variant='h5'>Jae Beom Bae</Typography>
            </div>
            <div className="navbar-list" style={{display: 'inline-block', order: 2}}>
              <NavLink exact to='/'>Work</NavLink>
              <NavLink to='/resume'>Resume</NavLink>
              <NavLink to='/about'>About</NavLink>
              <NavLink to='/contact'>Contact</NavLink>
            </div>
          </div>
        </nav>
        <Switch>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
