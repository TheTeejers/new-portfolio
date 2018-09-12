import React from 'react'
import { Route } from 'react-router-dom';
import Home from './Home.js';
import Resume from './Resume.js';
import Projects from './Projects.js';
import About from './About.js';
import Contact from './Contact.js';



const Routes = () => (
  <routes>
      <div className='Home'>
        <Route exact path='/' component={ () => <Home /> } />
        <Route path='/Home' component={ () => <Home /> } />
        <Route path='/Resume' component={ () => <Resume /> } />
        <Route path='/Projects' component={ () => <Projects /> } />
        <Route path='/About' component={ () => <About /> } />
        <Route path='/Contact' component={ () => <Contact /> } />
      </div>
  </routes>
)

export default Routes
