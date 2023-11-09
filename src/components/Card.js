import React from 'react';
import { Col } from 'react-bootstrap';
import '../styles/Card.css'; // Make sure to create this CSS file

export const Card = ({ title, description, image }) => {
  return (
    <Col xs={12} sm={6} md={4} className="mb-4 card-container">
      <div className="card">
        <img src={image} alt={title} className="card-img-top" />
      </div>
    </Col>
  );
};
