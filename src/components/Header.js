import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render () {
    return (
      <div className="App-header">
        <header>
            <div className="headerName headerNameHome"><a href="./">TJ LOUGHRY</a></div>
            <div className="headerLinks headerLinksInactive"><a href="./Resume">RESUME</a></div>
            <div className="headerLinks headerLinksInactive"><a href="./Projects">PROJECTS</a></div>
            <div className="headerLinks headerLinksInactive"><a href="./About">ABOUT</a></div>
            <div className="headerLinks headerLinksInactive"><a href="./Contact">CONTACT</a></div>
            <button className="hamburger">&#9776;</button>
        </header>
        <div className="menu">
          <ul>
            <a href="./resume.html"><li>RESUME</li></a>
            <a href="./projects.html"><li>PROJECTS</li></a>
            <a href="./about.html"><li>ABOUT</li></a>
            <a href="./contact.html"><li>CONTACT</li></a>
          </ul>
        </div>
      </div>
    )
  }
}

export default Header;
