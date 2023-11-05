import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";
import services from '../data/services.js'; // Import the JSON data
import '../styles/service.css';

export const Service = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="service" id="service">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="service-bx wow zoomIn">
              <h2>Our Services</h2>
              <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={2000} className="owl-carousel owl-theme auto-slider">
                {services.map((service, index) => (
                  <a href={service.redirect}  rel="noopener noreferrer" key={index} className="service-link">
                    <div className="e-card playing">
                      <div className="image">
                        <img src={service.image} alt={service.alt} className="service-image" />
                      </div>
                      <div className="infotop">
                        {service.title}
                      </div>
                    </div>
                  </a>
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