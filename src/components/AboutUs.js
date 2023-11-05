import React from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Services } from './Service';
import '../styles/about.css';
import image from '../assets/img/bd.png';
const AboutSectionHeader = ({ isVisible }) => (
  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
    <h2>About Us</h2>
    <p>This is a place where we share our company story and values. Learn more about our mission, vision, and the values that drive us.</p>
  </div>
);

const AboutTabContent = ({ eventKey, isVisible, children }) => (
  <Tab.Pane eventKey={eventKey}>
    <div className={isVisible ? "animate__animated animate__slideInUp" : ""}>
      {children}
    </div>
  </Tab.Pane>
);

function About () {
  return (
    <section className="about-section" id="about">
      <Container>
        <Services />
        <Row className="justify-content-center text-center">
        <div className="d-flex flex-row justify-content-center align-items-center">
        <div className="p-2">
          <img src={image} className="img-fluid" alt="Responsive image" />
        </div>
        <div className="p-2">
          <h1>Your Title Text Here</h1>
          <p>Your description or other content here...</p>
        </div>
      </div>
        </Row>
      </Container>
    </section>
  );
};

export default About;