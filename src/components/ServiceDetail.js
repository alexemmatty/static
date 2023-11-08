// ServiceDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import services from '../data/services';

const ServiceDetail = () => {
  const { serviceName } = useParams();
  const service = services.find(service => service.title.replace(/\s+/g, '') === serviceName);

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div className="service-detail">
      <h2>{service.title}</h2>
      <img src={service.image} alt={service.alt} />
      <p>{service.description}</p>
      {/* You can add more details here */}
    </div>
  );
};

export default ServiceDetail;
