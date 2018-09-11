import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home.js';
import Resume from './Resume.js';
import Projects from './Projects.js';
import About from './About.js';
import Contact from './Contact.js';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Router>
      <div className='Home'>
        <Route exact path='/' component={ () => <Home /> } />
        <Route path='/Home' component={ () => <Home /> } />
        <Route path='/Resume' component={ () => <Resume /> } />
        <Route path='/Projects' component={ () => <Projects /> } />
        <Route path='/About' component={ () => <About /> } />
        <Route path='/Contact' component={ () => <Contact /> } />
      </div>
    </Router>
  </main>
)

export default Main
