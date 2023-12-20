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
          {/* <Col xs={12} sm={5} className="mb-3 mb-sm-0">
            <img src={logo} alt="Logo" />
          </Col> */}
          <Col xs={12} sm={3} className="mb-3 mb-sm-0">
  <p>Copyright © {new Date().getFullYear()}. All Rights Reserved</p>
</Col>

          {/* <Col xs={12} sm={4} className="mb-3 mb-sm-0">
            <div className="social-icon">
              <a href="#"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/Nxtep.in/"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/nxtep.in/"><img src={navIcon3} alt="Icon" /></a>
            </div>
          </Col> */}
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
