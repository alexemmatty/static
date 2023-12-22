import { Container, Row, Col } from "react-bootstrap";

import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center justify-content-between">
          <Col xs={12} md={6} className="mb-3 mb-md-0">
            <h2 className="brand-name">n<span>X</span>tep</h2>
          </Col>
          <Col xs={12} md={6} className="text-md-right mb-3 mb-md-0">
            <div className="footer-nav">
              <a href="#home">Home</a>
              <a href="#about">About Us</a>
              <a href="#Service">Our Services</a>
              <a href="#contact">Contact Us</a>
            </div>
          </Col>
        </Row>
        <hr />
        <Row className="text-center">
          <Col>
            <p>Copyright © {new Date().getFullYear()}. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;