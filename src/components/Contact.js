import React, { Component } from 'react';
import Roll from 'react-reveal/Roll'
import Slide from 'react-reveal/Slide';
import firebase from './firebase.js'


var day = new Date().getDate();
var month = new Date().getMonth() + 1;
var year = new Date().getFullYear();
var hours = new Date().getHours();
var minutes = new Date().getMinutes();

class Contact extends Component {
  constructor() {
  super();
    this.state = {
    name: '',
    company: '',
    email: '',
    phoneNumber: '',
    message: '',
    messageDate: '',
    messageTime: ''
  }
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(e) {
  this.setState({
    [e.target.name]: e.target.value
  });
}

handleSubmit(e) {
  e.preventDefault();
  const contactRef = firebase.database().ref('conatact');
  const contact = {
    name: this.state.name,
    email: this.state.email,
    company: this.state.company,
    phoneNumber: this.state.phoneNumber,
    message: this.state.message,
    messageDate: month + '-' + day + '-' + year,
    messageTime: hours + ':' + minutes
  }
  contactRef.push(contact);
  this.setState({
    name: '',
    company: '',
    email: '',
    phoneNumber: '',
    message: '',
    messageDate: '',
    messageTime: ''
  });
  alert("Submitted!  Thank you!")
}




  render() {
    return (
      <div className="App">
        <div>
          <Roll top cascade>
            <h1 className="pageName">Contact</h1>
          </Roll>
        </div>
        <Slide bottom>
          <Roll bottom cascade>
          <div className="contactInfo">
            <div className="alert">YOUR MESSAGE HAS BEEN SENT</div>
            <li>EMAIL:<a className='mailLink' href="mailto:tjcancode@gmail.com?subject=I%20saw%20your%20website%20and%20would%20like%20to%20chat!">TJCANCODE@GMAIL.COM</a></li>
            <li>PHONE NUMBER: <a href="tel:1-512-826-6923">512.826.6923</a></li>

            <form id='contactForm' method='post' encType='text/plain' onSubmit={this.handleSubmit}>
              <input id='name' type='text' name='name' placeholder='Name (required)' size='50' required onChange={this.handleChange} value={this.state.name}/><br/>

              <input id='company' type='text' name='company' placeholder='Company' size='50'onChange={this.handleChange} value={this.state.company}/><br/>

              <input id='email' type='email' name='email' placeholder='Email (required)' size='50' required onChange={this.handleChange} value={this.state.email}/><br/>

              <input id='phoneNumber' type='text' name='phoneNumber' placeholder='Phone Number' size='50' onChange={this.handleChange} value={this.state.phoneNumber}/><br/>

              <textarea id='message' name='message' rows='10' placeholder='Type your message here' required cols='100' onChange={this.handleChange} value={this.state.message}></textarea><br/>

              <input className='contactSubmitButton' type='submit' value='Send Message'/>
            </form>
          </div>
        </Roll>
        </Slide>
      </div>
    );
  }
}

export default Contact;
