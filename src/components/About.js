import React, { Component } from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import Roll from 'react-reveal/Roll'
import Slide from 'react-reveal/Slide';


class About extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Roll top cascade>
            <h1 className="pageName">ABOUT</h1>
          </Roll>
        </div>
        <div className="aboutContainer">
          <Slide bottom>
            <Roll bottom cascade>
              <section>
                <p className="aboutParagraphs">As a graduate of General Assembly’s Web Development Immersive program, I have experience with both back and frontend development. Taking a full stack program gave me the opportunity to challenge myself and explore more fully the options available to me. With a passion for frontend work, I love to help bring design ideas to life and help bring focus to structure and detail.</p>
              </section>
              <section>
                <p className="aboutParagraphs">I’m not new to professional environments  and my ideal workplace is collaborative and challenging. Learning from others, increasing my skill set, and learning news skills along the way is what’s driven me to excel in my personal and professional life--and I look to continue that trend.</p>
              </section>
              <section>
                <p className="aboutParagraphs">My work style is adaptive--I’m able to work on my own or in a group setting and I find it easy to work with and collaborate with a pretty diverse group of personalities and communication styles. Working in finance gave me the ability to work under pressure, create deliverables on a deadline, and think more creatively in order to optimize results.</p>
              </section>
              <section>
                <p className="aboutParagraphs">Ready to chat? Contact me and let’s get the conversation started<a className='headerLinksInactive contactHere' href="mailto:tjcancode@gmail.com?subject=I%20saw%20your%20website%20and%20would%20like%20to%20chat!">HERE!</a></p>
              </section>
            </Roll>
          </Slide>
        </div>
      </div>
    );
  }
}

export default About;
