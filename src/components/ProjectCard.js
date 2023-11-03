import React from 'react';
import { Col } from 'react-bootstrap';
import '../styles/projectcard.css'; // Make sure to create this CSS file

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col xs={12} sm={6} md={4} className="mb-4">
      <div className="proj-imgbx">
        <div className="proj-img" style={{ backgroundImage: `url(${imgUrl})` }}>
          <div className="overlay"></div>
        </div>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
