import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import services from '../data/services'; // Import the JSON data
import '../styles/service.css';

export const Service = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const handleServiceClick = (service) => {
    window.open(service.redirect, '_blank'); // Open the link in a new window or tab
  };

  return (
    <section className="service" id="service">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="service-bx wow zoomIn">
              <h2>Our Services</h2>
              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000}
                className="owl-carousel owl-theme auto-slider"
              >
                {services.map((service, index) => (
                  <div
                    onClick={() => handleServiceClick(service)}
                    key={index}
                    className="service-link"
                  >
                    <div className="e-card playing">
                      <div className="image">
                        <img
                          src={service.image}
                          alt={service.alt}
                          className="service-image"
                        />
                      </div>
                      <div className="infotop">{service.title}</div>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
