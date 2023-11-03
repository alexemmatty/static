import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import "../style/NxtepNavbar.css";  // Assuming you save the CSS in this file

function NxtepNavbar() {
  return (
      <Navbar expand="lg" variant="dark" fixed="top">
          <Navbar.Brand href="#home">Nxtep</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#services">Services</Nav.Link>
                  <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
          </Navbar.Collapse>
      </Navbar>
  );
}

export default NxtepNavbar;
