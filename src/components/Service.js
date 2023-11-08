import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import services from "../data/services"; // Import the JSON data
import "../styles/service.css";

export const Services = () => {
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
                {services.map((service) => (
                  <div key={service.id} className="service">
                    <h3>{service.title}</h3>
                    <img src={service.image} alt={service.alt} />
                    <p>{service.description}</p>
                    <Link to={`/services/${service.title.replace(/\s+/g, "")}`}>
                      Learn More
                    </Link>
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

export default Services;
