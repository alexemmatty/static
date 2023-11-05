// ServiceDetail.js
import React from 'react';

const ServiceDetail = ({ service }) => {
  return (
    <div className="service-detail">
      <img src={service.image} alt={service.alt} />
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <a href={service.redirect} target="_blank" rel="noopener noreferrer">
        Learn More
      </a>
    </div>
  );
};

export default ServiceDetail;
