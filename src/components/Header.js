import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom'

class Header extends Component {
  render () {
    return (
      <div className="App-header">
        <header>
            <div className="headerName headerNameHome"><Link to="/">TJ LOUGHRY</Link></div>
            <div className="headerLinks headerLinksInactive"><Link to="/Resume">RESUME</Link></div>
            <div className="headerLinks headerLinksInactive"><Link to="/Projects">PROJECTS</Link></div>
            <div className="headerLinks headerLinksInactive"><Link to="/About">ABOUT</Link></div>
            <div className="headerLinks headerLinksInactive"><Link to="/Contact">CONTACT</Link></div>
            <button className="hamburger">&#9776;</button>
        </header>
        <div className="menu">
          <ul>
            <Link to="/Resume"><li>RESUME</li></Link>
            <Link to="/Projects"><li>PROJECTS</li></Link>
            <Link to="/About"><li>ABOUT</li></Link>
            <Link to="/Contact"><li>CONTACT</li></Link>
          </ul>
        </div>
      </div>
    )
  }
}

export default Header;
