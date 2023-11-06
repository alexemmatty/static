import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import '../styles/about.css';
import creativeImage from '../assets/img/bd.png';

// Import your Services component
import { Services } from './Service'; // Assuming the default export is used

function About() {
  return (
    <>
      <Services />
      <section className="about-section" id="about">
        <Container>
          <TrackVisibility once partialVisibility>
            {({ isVisible }) => (
              <Row className="align-items-center justify-content-center"> 
                <Col lg={7} md={12} className="text-part">
                  <h1 className="single-line-heading">Your <span className="highlight">Global Guidance</span></h1>
                  <p className="description text-center">
                    Welcome to NXTEP, where the future of digital marketing unfolds before your eyes. We're a passionate team of enthusiasts on a mission to redefine the digital landscape. Our journey began with a promise – a promise to deliver innovative, effective, and forward-thinking digital marketing solutions that empower businesses like yours to thrive in the online world.
                  </p>
                  
                  {/* Three lists for Mission, Vision, and Goal */} 
                  <Row className="list justify-content-center">
                    <Col md={4}>
                      <h3 className='padding1'>Mission</h3>
                      <ul className="text-left1">
                        Crafting digital success
                        {/* Add more list items as needed */}
                      </ul>
                    </Col>
                    <Col md={4}>
                      <h3 className='padding2'>Vision</h3>
                      <ul className="text-left2">
                        Your Success, Our Priority
                        {/* Add more list items as needed */}
                      </ul>
                    </Col>
                    <Col md={4}>
                      <h3 className='padding3'>Goal</h3>
                      <ul className="text-left3">
                    Engage, Analyse, Grow
                        {/* Add more list items as needed */}
                      </ul>
                    </Col>
                  </Row>
                </Col>
              </Row>
            )}
          </TrackVisibility>
        </Container>
      </section>
    </>
  );
}

export default About;