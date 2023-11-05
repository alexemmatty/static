import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Service from './Service.js';

export const About = () => {
  return (
    <section className="about" id="about">
      
      <Container>
        <Service />
      <Row className="justify-content-center text-center">
        <h2>asaas</h2>
      </Row>
      </Container>

      {/*<Col lg={8} md={10}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Who We Are</h2>
                  <p className="mt-3">Our company is built on the foundation of innovation, integrity, and impact. With a team that values collaboration and creativity, we've been able to pioneer solutions that truly make a difference.</p>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col lg={4} md={6} className="text-center">
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeInLeft" : ""}>
                  <h3>Our Mission</h3>
                  <p>To deliver exceptional value through innovative products and services that empower our clients and enrich our communities.</p>
                </div>
              }
            </TrackVisibility>
          </Col>
          <Col lg={4} md={6} className="text-center">
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeInUp" : ""}>
                  <h3>Our Vision</h3>
                  <p>To be the leader in our industry, setting standards that others follow, driving forward to new horizons and achievements.</p>
                </div>
              }
            </TrackVisibility>
          </Col>
          <Col lg={4} md={6} className="text-center">
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeInRight" : ""}>
                  <h3>Our Values</h3>
                  <p>Excellence, collaboration, and innovation. We believe these pillars are the key to making a positive impact in the world.</p>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row> */}
    </section>
  )
}
