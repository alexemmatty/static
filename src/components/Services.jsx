import React from "react";
import "../style/Services.css";
import { Card, Container, Row, Col } from 'react-bootstrap';
import servicesData from '../assets/data/services.json';

// function Services() {
//     return (
//         <Container id="services">
//             <Row>
//                 {servicesData.map(service => (
//                     <Col key={service.id} md={6}>
//                         <Card>
//                             <Card.Body>
//                                 <Card.Title>{service.title}</Card.Title>
//                                 <Card.Text>{service.description}</Card.Text>
//                             </Card.Body>
//                         </Card>
//                     </Col>
//                 ))}
//             </Row>
//         </Container>
//     );
// }

// export default Services;


function Services() {


  const servicesList = [
    {
      id: 1,
      title: "web design",
      spline: "https://media.istockphoto.com/id/1406684959/vector/modern-3d-illustration-of-young-man-programming-concept.jpg?s=612x612&w=0&k=20&c=2l3e_tuADe6trKO-mWTDGN0LF4KJNhqEO8FR8nZgE7g=", // replace with actual spline link
      redirect: "https://www.google.com/",
    },
    {
      id: 2,
      title: "support",
      spline: "https://digifloat.io/wp-content/uploads/2021/02/Free-3D-Illustration-Twitter.jpg", // replace with actual spline link
      redirect: "https://www.google.com/",
    },
    {
      id: 3,
      title: "digital marketing",
      spline: "https://img.freepik.com/premium-vector/realistic-concept-digital-marketing-scene-without-people-3d-cartoon-style_198565-2662.jpg", // replace with actual spline link
      redirect: "https://www.google.com/",
    },
    {
      id: 4,
      title: "graphic design & branding",
      spline: "https://img.freepik.com/free-psd/3d-nft-icon-digital-artist-male_629802-8.jpg?w=1380&t=st=1698688369~exp=1698688969~hmac=de5b042e058d514610a1c5bc38cd6dbe186ec59cb5669282fde9572b64efdfbf", // replace with actual spline link
      redirect: "https://www.google.com/",
    },
  ];
  return (
    <div className="container mt-4">
        <div className="row justify-content-center">
            {servicesList.map((service) => (
                <div className="col-12 col-md-6 mb-4" key={service.id}>
                    <div className="service-card shadow-sm" onClick={() => service.redirect && window.open(service.redirect)}>
                      <img className="service-spline img-fluid" src={service.spline} alt={service.title} />
                        <div className="service-title">{service.title}</div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
}

export default Services;