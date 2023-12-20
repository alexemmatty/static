import { Container, Row, Col } from "react-bootstrap";
// import logo from "../assets/img/logo.svg";
// import navIcon1 from "../assets/img/nav-icon1.svg";
// import navIcon2 from "../assets/img/nav-icon2.svg";
// import navIcon3 from "../assets/img/nav-icon3.svg";
import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center justify-content-center text-center">
          <Col xs={12} sm={6} md={4} className="mb-3 mb-sm-0">
            <h4>Contact Us</h4>
            <p>Phone: +91 8289819891</p>
          </Col>
          <Col xs={12} sm={6} md={4} className="mb-3 mb-sm-0">
            {/* Replace "Visit Us" with a logo */}
            <h2 className="brand-name">n<span>X</span>tep</h2>
          </Col>
          <Col xs={12} sm={12} md={4} className="mb-3 mb-sm-0">
            <h4>Mail Us</h4>
            <p>nxtep.in@gmail.com</p>
          </Col>
        </Row>
        <Row className="align-items-center justify-content-center text-center">
          <Col xs={12} sm={12} className="mb-3 mb-sm-0">
            <p>Copyright © {new Date().getFullYear()}. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;