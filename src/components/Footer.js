import React, { Component } from 'react';
import twitterIcon from './images/twitter.png';
import githubIcon from './images/github.png';
import linkedinIcon from './images/linkedin.png';

class Footer extends Component {
  render () {
    return (
      <div className="App-Footer">
      <footer>
        <div className="socialIcon"><a href="https://twitter.com/tjloughry" target='popup'  ><img className='twitterImage' src={twitterIcon} alt='social media icon'/></a></div>
        <div className="socialIcon"><a href="https://github.com/TheTeejers" target='popup' ><img className='githubImage' src={githubIcon} alt='social media icon'/></a></div>
        <div className="socialIcon"><a href="https://www.linkedin.com/in/tjloughry/" target='popup' ><img className='linkedinImage' src={linkedinIcon} alt='social media icon'/></a></div>
      </footer>
      </div>
    )
  }
}

export default Footer;
