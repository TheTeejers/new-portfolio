import React, { Component } from 'react';
import Roll from 'react-reveal/Roll';
import makeCarousel from 'react-reveal/makeCarousel';
import Slide from 'react-reveal/Slide';
import styled from 'styled-components';
import './Home.css';


const Container = styled.div`
  ${'' /* border: 1px solid red; */}
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 7em;
`;


const CarouselUI = ({ children }) => <Container>{children}</Container>;
const Carousel = makeCarousel(CarouselUI);


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { show: true };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ show: !this.state.show });
  }



  render() {
    return (
      <div className="Home">

        <div className="FSWD">
          <Roll top cascade>
            <h1>Full Stack</h1>
          </Roll>
          <Roll bottom cascade>
            <h1>Web Developer</h1>
          </Roll>
        </div>
        <Carousel forever defaultWait={2500}>
          <Slide right>
            <div>
              <h1> </h1>
            </div>
          </Slide>
          <Slide wait={2500} left>
            <Roll left cascade>
              <h1 className="FSWD">HTML</h1>
            </Roll>
          </Slide>
          <Slide right>
            <Roll right cascade>
              <h1 className="FSWD">CSS</h1>
            </Roll>
          </Slide>
          <Slide left>
            <Roll left cascade>
              <h1 className="FSWD">JavaScript</h1>
            </Roll>
          </Slide>
          <Slide right>
            <Roll right cascade>
              <h1 className="FSWD">React.js</h1>
            </Roll>
          </Slide>
          <Slide left>
            <Roll left cascade>
              <h1 className="FSWD">Node.js</h1>
            </Roll>
          </Slide>
          <Slide right>
            <Roll right cascade>
              <h1 className="FSWD">WordPress</h1>
            </Roll>
          </Slide>
          <Slide left>
            <Roll left cascade>
              <h1 className="FSWD">NGNX</h1>
            </Roll>
          </Slide>
          <Slide right>
            <Roll right cascade>
              <h1 className="FSWD">Express</h1>
            </Roll>
          </Slide>
          <Slide left>
            <Roll left cascade>
              <h1 className="FSWD">MongoDB</h1>
            </Roll>
          </Slide>
        </Carousel>
      </div>
    );
  }
}



export default Home
