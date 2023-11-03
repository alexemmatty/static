import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";
import services from '../data/services.json'; // Import the JSON data
import '../styles/service.css'; // Make sure you create this CSS file
import image from '../assets/img/web.png';

export const Skills = () => {
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
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Our Services</h2>
              <p>Our humble Services include:</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                {services.map((service) => (
                  <article class="card">
                  <div class="temporary_text">
                  <img src={service.image} alt={service.alt} className="service-image" />
                  </div>
              <div class="card_content">
                  <span class="card_title"><h5>{service.title}</h5></span>
                      <span class="card_subtitle">{service.description}</span>    
              </div>
              </article>
              ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Decorative background" />
    </section>
  );
};

export default Skills;