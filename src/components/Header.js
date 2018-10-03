import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade';

class Header extends Component {
  // constructor(){
  //   super()
  //   this.state = {
  //     menuOpen: false
  //   }
  // }
  //
  // menuToggle()
  //   {
  //     this.setState({
  //       menuOpen: !this.state.menuOpen
  //     })
  //   }

  constructor(props) {
  super(props);
  this.state = { show: false };
  this.handleClick = this.handleClick.bind(this);
}
handleClick() {
  this.setState({ show: !this.state.show });
}

  render () {
    return (
      <div className="App-header">
        <header>
            <div className="headerName headerNameHome"><Link to="/">TJ LOUGHRY</Link></div>
            <div className="headerLinks headerLinksInactive"><Link to="/Resume">RESUME</Link></div>
            <div className="headerLinks headerLinksInactive"><Link to="/Projects">PROJECTS</Link></div>
            <div className="headerLinks headerLinksInactive"><Link to="/About">ABOUT</Link></div>
            <div className="headerLinks headerLinksInactive"><Link to="/Contact">CONTACT</Link></div>
            {/* <div className="headerLinks headerLinksInactive"><Link to="/Test">Test</Link></div> */}
            <button onClick={this.handleClick}  className="hamburger">{ this.state.show}&#9776;</button>
        </header>
        <Fade bottom cascade when={this.state.show}>
          <div className="menu">
            <ul>
              <Link to="/Resume" onClick={this.handleClick}><li>RESUME</li></Link>
              <Link to="/Projects" onClick={this.handleClick}><li>PROJECTS</li></Link>
              <Link to="/About" onClick={this.handleClick}><li>ABOUT</li></Link>
              <Link to="/Contact" onClick={this.handleClick}><li>CONTACT</li></Link>
            </ul>
          </div>
        </Fade>
        {/* {
          this.state.menuOpen?
          <div className="menu">
            <ul>
              <Link to="/Resume"><li>RESUME</li></Link>
              <Link to="/Projects"><li>PROJECTS</li></Link>
              <Link to="/About"><li>ABOUT</li></Link>
              <Link to="/Contact"><li>CONTACT</li></Link>
            </ul>
          </div>
          :null
        } */}

      </div>
    )
  }
}

export default Header;
