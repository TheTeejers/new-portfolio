import React, { Component } from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Routes from './components/Routes.js'
import './App.css';



class App extends Component {

  render() {

    return (
      <div className="App">
        <ul className="cb-slideshow">
        	<li>
        		<span>Image 01</span>
        	</li>
        	<li>
        		<span>Image 02</span>
        	</li>
          <li>
        		<span>Image 03</span>
        	</li>
          <li>
        		<span>Image 04</span>
        	</li>
          <li>
        		<span>Image 05</span>
        	</li>
          <li>
        		<span>Image 06</span>
        	</li>
        </ul>
        <Header />
        <Routes />
        <Footer />
      </div>
    );
  }
}

export default App;
