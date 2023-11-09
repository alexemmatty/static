import { Container, Row, Col} from "react-bootstrap";
import { ProjectCard } from "./Card";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import services from "../data/services";
import "../styles/service.css";
function Projects() {
  return (
    <section className="project" id="Service">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Our Services</h2>
                <p>Our humbled services include the following </p>
                      <Row >
                        {
                          services.map((project, index) => {
                            return (
                              <ProjectCard
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

export default Projects;