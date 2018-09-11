import React, { Component } from 'react';
// import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Main from './components/Main.js'
// import NeonLettersAbout from './components/NeonLettersAbout.js';
// import './components/NeonLetters.css';
// import './components/About.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul className="cb-slideshow">
        	<li>
        		<span>Image 01</span>
        		<div>
        			{/* <h3>one</h3> */}
        		</div>
        	</li>
        	<li>
        		<span>Image 02</span>
        		<div>
        			{/* <h3>two</h3> */}
        		</div>
        	</li>
          <li>
        		<span>Image 03</span>
        		<div>
        			{/* <h3>three</h3> */}
        		</div>
        	</li>
          <li>
        		<span>Image 04</span>
        		<div>
        			{/* <h3>four</h3> */}
        		</div>
        	</li>
          <li>
        		<span>Image 05</span>
        		<div>
        			{/* <h3>five</h3> */}
        		</div>
        	</li>
          <li>
        		<span>Image 06</span>
        		<div>
        			{/* <h3>six</h3> */}
        		</div>
        	</li>
        </ul>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
