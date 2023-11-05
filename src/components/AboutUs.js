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
              <Row className="align-items-center">
                <Col lg={6} md={12} className="text-part">
                  <h1>We're <span className="highlight">Scoda Agency</span></h1>
                  <p className="description">
                    We are a fully in-house digital agency focusing on branding, marketing, web design and development with clients ranging from start-ups. We pride ourselves on partnering with clients in order to give the most transparent and educational experience.
                  </p>
                </Col>
                <Col lg={6} md={12} className="image-part d-none d-lg-block">
                  <img
                    src={creativeImage}
                    alt="Creative Space"
                    className={`img-fluid ${isVisible ? 'animate__animated animate__zoomIn' : ''}`}
                  />
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
