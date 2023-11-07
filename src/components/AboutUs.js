
import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";
import "../styles/about.css";

function About() {
  const tabData = [
    {
      eventKey: "first",
      title: "Mission",
      content: "Crafting digital success",
    },
    {
      eventKey: "second",
      title: "Vision",
      content: "Your Success, Our Priority",
    },
    {
      eventKey: "third",
      title: "Goal",
      content: "Engage, Analyse, Grow",
    },
  ];

  return (
    <>
      {/* <Services /> */}
      <section className="about-section" id="about">
        <Container>
          <TrackVisibility once partialVisibility>
            {({ isVisible }) => (
              <Row className="align-items-center justify-content-center">
                <Col lg={7} md={12} className="text-part">
                  <h1 className="text-center single-line-heading">
                    Your <span className="highlight">Global Guidance</span>
                  </h1>
                  <p className="description text-center">
                    Welcome to NXTEP, where the future of digital marketing
                    unfolds before your eyes. We're a passionate team of
                    enthusiasts on a mission to redefine the digital landscape.
                    Our journey began with a promise – a promise to deliver
                    innovative, effective, and forward-thinking digital
                    marketing solutions that empower businesses like yours to
                    thrive in the online world.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      {tabData.map((tab) => (
                        <Nav.Item key={tab.eventKey}>
                          <Nav.Link eventKey={tab.eventKey}>
                            {tab.title}
                          </Nav.Link>
                        </Nav.Item>
                      ))}
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      {tabData.map((tab) => (
                        <Tab.Pane eventKey={tab.eventKey} key={tab.eventKey}>
                          <p className="text-center">{tab.content}</p>
                        </Tab.Pane>
                      ))}
                    </Tab.Content>
                  </Tab.Container>
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
