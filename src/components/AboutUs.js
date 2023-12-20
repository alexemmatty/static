import React, { useState, useEffect } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import "../styles/about.css"; 

function About() {
  const tabData = [
    {
      eventKey: "first",
      title: "Our Mission",
      content: "Crafting digital success",
    },
    {
      eventKey: "second",
      title: "Our Vision",
      content: "Your Success, Our Priority",
    },
    {
      eventKey: "third",
      title: "Our Goal",
      content: "Engage, Analyse, Grow",
    },
  ];

  const [activeKey, setActiveKey] = useState(tabData[0].eventKey);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveKey((prevActiveKey) => {
        const currentTabIndex = tabData.findIndex(tab => tab.eventKey === prevActiveKey);
        const nextTabIndex = (currentTabIndex + 1) % tabData.length;
        return tabData[nextTabIndex].eventKey;
      });
    }, 5000); 
    return () => clearInterval(interval);
  }, [tabData]);

  const renderTabContent = () => {
    return tabData.map((tab) => (
      <Tab.Pane eventKey={tab.eventKey} key={tab.eventKey} className={isMobile ? "mobile-tab-content" : ""}>
        {isMobile ? (
          <div className="message-style">
            <p className="text-center text-dark"><span>{tab.title}</span> is to {tab.content}</p>
          </div>
        ) : (
          <p className="text-center text-dark">{tab.content}</p>
        )}
      </Tab.Pane>
    ));
  };

  return (
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
                <Tab.Container id="projects-tabs" activeKey={activeKey} onSelect={(k) => setActiveKey(k)}>
                  {!isMobile && (
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center">
                      {tabData.map((tab) => (
                        <Nav.Item key={tab.eventKey}>
                          <Nav.Link eventKey={tab.eventKey} className="nav-tab-link">
                            {tab.title}
                          </Nav.Link>
                        </Nav.Item>
                      ))}
                    </Nav>
                  )}
                  <Tab.Content
                    id="slideInUp"
                    className={isVisible ? "animate__animated animate__slideInUp" : ""}
                  >
                    {renderTabContent()}
                  </Tab.Content>
                </Tab.Container>
              </Col>
            </Row>
          )}
        </TrackVisibility>
      </Container>
    </section>
  );
}

export default About;
