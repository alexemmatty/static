import { Container, Row, Col} from "react-bootstrap";
import { Card } from "./Card";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import services from "../data/services";
import "../styles/service.css";
function Services() {
  return (
    <section className="project" id="Service">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Our Services</h2>
                      <Row className="i" >
                        {
                          services.map((project, index) => {
                            return (
                              <Card
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="bg"></img>
    </section>
  )
}

export default Services;