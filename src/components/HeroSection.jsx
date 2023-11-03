import React from 'react';
import { Carousel, Button, Container, Row, Col } from 'react-bootstrap';
import '../style/HeroSection.css';
import Image1 from '../assets/images/c2.png'; // Importing the image
import Image2 from '../assets/images/c1.png';

function HeroSection() {
    return (
        <div className="hero-section">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Image1} // Using the imported image
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Image2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                {/* Add more carousel items if needed */}
            </Carousel>
            <Container className="overlay-content">
                <Row>
                    <Col xs={12} className="text-center">
                        <h1>We bring the next step to your brands.</h1>
                        <Button style={{ backgroundColor: '#27096d', borderColor: '#27096d' }}>Get Started</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default HeroSection;
